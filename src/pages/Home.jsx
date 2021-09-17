import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "./home.css";

const Home = () => {
    return (
        <Fragment>
            <div id="container">
                <div className="contents">
                    <h1>Inkoop Task : </h1>
                    <button>
                        <Link className="lnk" to="task1">Task 1</Link>
                    </button>
                    <button>
                        <Link className="lnk" to="task2">Task 2</Link>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Home
