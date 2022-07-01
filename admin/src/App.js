import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import NewUser from "./pages/newUser/NewUser";
import NewHotel from "./pages/newHotel/NewHotel"
import NewRoom from "./pages/newRoom/NewRoom"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, userColumns, roomColumns } from "./datatablesource";
import { userInputs, hotelInputs, roomInputs } from "./formSource"

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />
    }
    else {
      return children;
    }
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />

            <Route index element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
            />
            <Route path="users">
              <Route index element={
                <ProtectedRoute>
                  <List column={userColumns} name="User" />
                </ProtectedRoute>
              }
              />
              <Route path=":userId" element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              } />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewUser inputs={userInputs} title="Add New User" />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="hotels">
              <Route index element={
                <ProtectedRoute>
                  <List column={hotelColumns} name="Hotel" />
                </ProtectedRoute>
              } />
              <Route path=":hotelId" element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              } />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewHotel inputs={hotelInputs} title="Add New Hotel" />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="rooms">
              <Route index element={
                <ProtectedRoute>
                  <List column={roomColumns} name="Room" />
                </ProtectedRoute>
              } />
              <Route path=":roomId" element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              } />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewRoom inputs={roomInputs} title="Add New Room" />
                  </ProtectedRoute>
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
