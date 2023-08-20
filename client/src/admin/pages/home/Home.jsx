// import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";

const Home = () => {
  return (
    <div className="home">
      {/* <Sidebar /> */}
      <div className="AdminHomeContainer">
        <Navbar />
        <div className="heroImage">
          <img src={process.env.PUBLIC_URL + "/Assets/hero.png"} alt="" />
        </div>
        <div className="widgets">
          <div className="container">
            <Widget type="user" />
            <Widget type="hotel" />
            <Widget type="room" />
          </div>
          {/* <Widget type="balance" /> */}
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="AdminListContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
