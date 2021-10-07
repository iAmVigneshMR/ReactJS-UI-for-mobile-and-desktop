import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "./home.css";

const Home = () => {
    return (
        <Fragment>
            <div id="container">
                <div className="contents">
                    <h1>UI design : </h1>
                    <button>
                        <Link className="lnk" to="task1">For Desktop</Link>
                    </button>
                    <button>
                        <Link className="lnk" to="task2">For Moblie</Link>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Home
