import React from "react";
import logo from "../spotify-logo.svg";

class TopBar extends React.Component {
    render() {
        return(
          <div className={"top-bar"}>
              <div className={"bar-content"}>
                  <div className={"brand-logo"}>
                      <img src={logo} className="app-log" alt="logo" />
                  </div>
              </div>
          </div>
        );
    }
}

export default TopBar;