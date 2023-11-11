import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Container, Row} from "react-bootstrap";
import Error404 from "./components/errors/Error404";
import Index from "./components/no-auth/Index";
import PublicRoute from "./auth/PublicRoute";
import SignIn from "./components/no-auth/SignIn";
import SignUp from "./components/no-auth/SignUp";
import UserRoute from "./auth/UserRoute";
import Home from "./components/user-auth/Home";
import Navigation from "./components/navigation/Navigation";
import News from "./components/no-auth/News";
import Item from "./components/no-auth/Item";
import ResetPassword from "./components/no-auth/ResetPassword";
import NewPassword from "./components/no-auth/NewPassword";
import ConfirmEmailAddress from "./components/no-auth/ConfirmEmailAddress";
import Admin from "./components/admin-auth/Admin";
import AdminRoute from "./auth/AdminRoute";
import Profile from "./components/user-auth/Profile";
import Account from "./components/user-auth/Account";
import Leaderboard from "./components/user-auth/Leaderboard";
import Missions from "./components/user-auth/Missions";
import MissionsStatistics from "./components/user-auth/MissionsStatistics";
import Followers from "./components/user-auth/Followers";
import Weapons from "./components/user-auth/Weapons";
import UsernameChecker from "./auth/UsernameChecker";
import Search from "./components/user-auth/Search";
import AdminMissions from "./components/admin-auth/Missions";
import Statistics from "./components/admin-auth/Statistics";

function App() {

  return (
      <BrowserRouter forceRefresh={true}>
          <Navigation/>
          <Container className={"mt-3"}>
              <Row>
                  <Routes>
                      {/*No Auth Required*/}
                      <Route exact path={"/"} element={<PublicRoute><Index/></PublicRoute>}/>
                      <Route exact path={"/news"} element={<PublicRoute><News/></PublicRoute>}/>
                      <Route exact path={"/item/:id"} element={<PublicRoute><Item/></PublicRoute>}/>
                      <Route exact path={"/sign-in"} element={<PublicRoute><SignIn/></PublicRoute>}/>
                      <Route exact path={"/sign-up"} element={<PublicRoute><SignUp/></PublicRoute>}/>

                      <Route exact path={"/confirm/:token"} element={<PublicRoute><ConfirmEmailAddress/></PublicRoute>}/>
                      <Route exact path={"/reset"} element={<PublicRoute><ResetPassword/></PublicRoute>}/>
                      <Route exact path={"/new/:token"} element={<PublicRoute><NewPassword/></PublicRoute>}/>

                      {/*User Auth Required*/}
                      <Route exact path={"/u/"} element={<UserRoute><Home/></UserRoute>}/>

                      <Route exact path={"/u/:username"} element={<UserRoute><UsernameChecker componentToRender={<Profile/>}/></UserRoute>}/>
                      <Route exact path={"/u/:username/weapons"} element={<UserRoute><UsernameChecker componentToRender={<Weapons/>}/></UserRoute>}/>
                      <Route exact path={"/u/:username/followers"} element={<UserRoute><UsernameChecker componentToRender={<Followers/>}/></UserRoute>}/>
                      <Route exact path={"/u/:username/following"} element={<UserRoute><UsernameChecker componentToRender={<Followers/>}/></UserRoute>}/>

                      <Route exact path={"/u/search/:username"} element={<UserRoute><Search/></UserRoute>}/>

                      <Route exact path={"/u/missions"} element={<UserRoute><Missions/></UserRoute>}/>
                      <Route exact path={"/u/missions/:name"} element={<UserRoute><MissionsStatistics/></UserRoute>}/>

                      <Route exact path={"/u/leaderboard"} element={<UserRoute><Leaderboard/></UserRoute>}/>
                      <Route exact path={"/u/account"} element={<UserRoute><Account/></UserRoute>}/>

                      {/*Admin Auth Required*/}
                      <Route exact path={"/a/"} element={<AdminRoute><Admin/></AdminRoute>}/>
                      <Route exact path={"/a/statistics"} element={<AdminRoute><Statistics/></AdminRoute>}/>
                      <Route exact path={"/a/missions"} element={<AdminRoute><AdminMissions/></AdminRoute>}/>

                      {/*Errors*/}
                      <Route path={"*"} element={<Error404/>}/>
                  </Routes>
              </Row>
          </Container>
      </BrowserRouter>
  );
}
export default App;