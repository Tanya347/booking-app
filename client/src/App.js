import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

//booking pages
import Home from "./main/pages/home/Home";
import List from "./main/pages/list/List";
import Hotel from "./main/pages/hotel/Hotel";
import Login from "./main/pages/login/Login";

//admin pages
import AdminHome from "./admin/pages/home/Home";
import AdminLogin from "./admin/pages/login/Login"
import AdminList from "./admin/pages/list/List"
import Single from "./admin/pages/single/Single";
import NewUser from "./admin/pages/newUser/NewUser";
import NewHotel from "./admin/pages/newHotel/NewHotel"
import NewRoom from "./admin/pages/newRoom/NewRoom"

import "./admin/style/dark.scss";
import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext";
import { hotelColumns, userColumns, roomColumns } from "./admin/datatablesource";
import { userInputs, hotelInputs, roomInputs } from "./admin/formSource"


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/login" element={<Login />} />

          {/* admin routes */}
          <Route path="/admin">
            <Route path="login" element={<AdminLogin />} />

            <Route index element={<AdminHome />} />
            <Route path="users">
              <Route index element={
                <AdminList column={userColumns} name="User" />
              } />

              <Route path=":userId" element={
                <Single />
              } />

              <Route
                path="new" element={
                  <NewUser inputs={userInputs} title="Add New User" />
                } />
            </Route>


            <Route path="hotels">
              <Route index element={
                <AdminList column={hotelColumns} name="Hotel" />
              } />

              <Route path=":hotelId" element={
                <Single />
              } />

              <Route
                path="new" element={
                  <NewHotel inputs={hotelInputs} title="Add New Hotel" />
                } />
            </Route>

            <Route path="rooms">
              <Route index element={
                <AdminList column={roomColumns} name="Room" />
              } />

              <Route path=":roomId" element={
                <Single />
              } />

              <Route
                path="new" element={
                  <NewRoom inputs={roomInputs} title="Add New Room" />
                }
              />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
