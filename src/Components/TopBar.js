import React from "react";
import logo from "../spotify-logo.svg";
import HomeTest from "./HomeTest";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class TopBar extends React.Component {
    render() {
        return(
            <Router>
                <div className={"top-bar"}>
                    <div className={"bar-content"}>
                        <div className={"brand-logo"}>
                            <Link to={"/"}>
                                <img src={logo} className="app-log" alt="logo" />
                            </Link>

                        </div>
                        <div className={"desktop-control"}>
                            <ul>

                                <li>
                                    <Link to={"/premium"}>Premium</Link>
                                </li>
                                {/*<li>*/}
                                {/*    <Link to={"/dukungan"}>Dukungan</Link>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <Link to={"/download"}>Download</Link>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route exact path={"/premium"}>
                        <HomeTest />
                    </Route>
                    {/*<Route path="/dukungan">*/}
                    {/*    <About />*/}
                    {/*</Route>*/}
                    {/*<Route path="/download">*/}
                    {/*    <Dashboard />*/}
                    {/*</Route>*/}
                </Switch>
            </Router>
        );
    }
}

// function Home() {
//     return (
//         <div>
//             <h2>Home</h2>
//         </div>
//     );
// }
//
// function About() {
//     return (
//         <div>
//             <h2>About</h2>
//         </div>
//     );
// }
//
// function Dashboard() {
//     return (
//         <div>
//             <h2>Dashboard</h2>
//         </div>
//     );
// }


export default TopBar;