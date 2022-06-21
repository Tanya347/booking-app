import './searchItem.css'

const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img
                src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                alt=""
                className='siImg'
            />

            <div className="siDesc">
                <h1 className="siTitle">Green Park</h1>
                <span className="siDistance">500cm from center</span>
                <span className='siTaxiOp'>Free airport taxi</span>
                <span className='siSubtitle'>Studio Apartment with Air Conditioning</span>
                <span className="siFeatures">Entire studio • 1 bathroon • 21m² 1 full bed</span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$112</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem