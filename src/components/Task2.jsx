import React, { Fragment } from 'react';
import "./css/task2.css";

const Task2 = () => {
    return (
        <Fragment>
            <div id="app">
                <div className="nav">
                <i class="fas fa-bars"></i>
                <p>Lorem</p>
                <i class="fas fa-shopping-cart"></i>
                </div>
            <h1>What are you <br /> having for lunch?</h1>
            <div className="main-down">
            <div className="cards">
                <img src="https://cdn.pixabay.com/photo/2019/10/10/19/40/tacos-4540402__340.jpg" alt="img" />
                <p>Mexican texi</p>
            </div>
            <div className="cards">
                <img src="https://cdn.pixabay.com/photo/2019/10/10/19/40/tacos-4540402__340.jpg" alt="img" />
                <p>Mexican texi</p>
            </div>
            </div>
            <div className="main-down">
            <div className="cards">
                <img src="https://cdn.pixabay.com/photo/2019/10/10/19/40/tacos-4540402__340.jpg" alt="img" />
                <p>Mexican texi</p>
            </div>
            <div className="cards">
                <img src="https://cdn.pixabay.com/photo/2019/10/10/19/40/tacos-4540402__340.jpg" alt="img" />
                <p>Mexican texi</p>
            </div>
            </div>
            <div className="up-right">
                <p>Lorem ipsum dolor sit, amet consectetur 
                    adipisicing elit. Quisquam assumenda non harum 
                    empore omnis.</p>
                <div className="line"></div>
            </div>
            </div>
        </Fragment>
    )
}

export default Task2
