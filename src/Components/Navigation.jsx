import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        React Multi-Page Website
          </Link>

                    <div>
                        <ul class="navbar-nav ml-auto">
                            <li
                                class={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/">
                                    Home
                  <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/signup" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/signup">
                                    Signup/Login
                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/profile" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/profile">
                                    Profile
                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/community" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/community">
                                    Community
                </Link>
                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);