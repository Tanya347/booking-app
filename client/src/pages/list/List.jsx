import "./list.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns";
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"

const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle white">Search</h1>
                        <div className="lsItem">
                            <label className="white">Destination</label>
                            <input type="text" placeholder={destination} />
                        </div>
                        <div className="lsItem">
                            <label className="white">Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date} />}
                        </div>
                        <div className="lsItem">
                            <label className="white">Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <div className="lsOptionText white">
                                        Min price<small>per night</small>
                                    </div>
                                    <input type="number" min={40} className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <div className="lsOptionText white">
                                        Max price<small>per night</small>
                                    </div>
                                    <input type="number" min={100} className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <div className="lsOptionText white">
                                        Adult
                                    </div>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                                </div>
                                <div className="lsOptionItem">
                                    <div className="lsOptionText white">
                                        Children
                                    </div>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                                </div>
                                <div className="lsOptionItem">
                                    <div className="lsOptionText white">
                                        Room
                                    </div>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                                </div>
                            </div>

                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default List