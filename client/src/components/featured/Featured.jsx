import './featured.css'
import useFetch from '../../hooks/useFetch'

const Featured = () => {
    const { data, loading } = useFetch("/hotels/countByCity?cities=Venice,Madrid,Paris")

    return (
        <div className="featured">
            {loading ? ("loading please wait") : (
                <>
                    <div className="featuredItem">
                        <img src="https://images.unsplash.com/photo-1602532769631-f27de70308ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVuaWNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="featuredTitles">
                            <h1>Venice</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src="https://images.unsplash.com/photo-1518620121781-adab13a3d1ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFkcmlkfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="featuredTitles">
                            <h1>Madrid</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src="https://images.unsplash.com/photo-1526893381913-e311045b8064?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="featuredTitles">
                            <h1>Paris</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Featured