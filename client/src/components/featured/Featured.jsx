import './featured.css'

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1602532769631-f27de70308ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVuaWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="featuredTitles">
                    <h1>Venice</h1>
                    <h2>140 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1518620121781-adab13a3d1ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFkcmlkfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="featuredTitles">
                    <h1>Madrid</h1>
                    <h2>223 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1563789809870-81e0437b2b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwZSUyMHRvd258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="featuredTitles">
                    <h1>Cape Town</h1>
                    <h2>80 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured