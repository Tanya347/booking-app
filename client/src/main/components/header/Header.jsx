import './header.css'
import { useContext, useState } from 'react';
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { useNavigate } from 'react-router-dom';
import { SearchContext } from "../../../context/SearchContext"
import { AuthContext } from '../../../context/AuthContext';

const Header = ({ type }) => {
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState("");
    const { user } = useContext(AuthContext)
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [days, setDays] = useState(0);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }
    const { dispatch } = useContext(SearchContext)
    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options, days } })
        navigate("/hotels", { state: { destination, dates, options, days } });
    }

    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }


    const handleDates = (item) => {
        setDates([item.selection])
        const ds = dayDifference(item.selection.endDate, item.selection.startDate);
        setDays(ds);
    }


    // window.addEventListener("click", (event) => {
    //     console.log(event.target.className)
    //     if (event.target.className !== "date" && openDate)
    //         setOpenDate(!openDate)
    //     // if (event.target.className !== "headerSearchText" && openOptions)
    //     //     setOpenOptions(!openOptions)
    // })

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem">
                        <div className="headerListItem active">
                            <FontAwesomeIcon icon={faBed} />
                            <span>Stays</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faPlane} />
                            <span>Flights</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faCar} />
                            <span>Car rentals</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faPerson} />
                            <span>Attractions</span>
                        </div>
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={faTaxi} />
                            <span>Airport taxis</span>
                        </div>
                    </div>
                </div>
            </div>
            {type !== "list" &&
                <>
                    <div class="paragraph">
                        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                        <p className="headerDesc">Get rewarded for you travels - unlock instant savings of 10% or more with a free Stay Solutions account</p>
                        {!user && <button className="headerBtn">Sign in / Register</button>}
                    </div>

                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className="headerIcon" />
                            <input onChange={e => setDestination(e.target.value)} type="text" placeholder='Where are you going?' className='headerSearchInput' />
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                            <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={handleDates}
                                moveRangeOnFirstSelection={false}
                                ranges={dates}
                                className="date"
                                minDate={new Date()}
                            />}
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                            <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                            {openOptions && <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <button className="optionCounterButton" disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <button className="optionCounterButton" disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <button className="optionCounterButton" disabled={options.room <= 1} onClick={() => handleOption("room", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                </div>
                            </div>}
                        </div>
                        <div className="headerSearchItem">
                            <button className="searchBtn" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </>}
        </div>
    )
}

export default Header