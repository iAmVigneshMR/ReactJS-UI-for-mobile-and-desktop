import React, { Fragment } from 'react';
import "./css/task1.css";

const Task1 = () => {
    return (
        <Fragment>
            <div id="container1">
                <div className="contents1">
                    <div className="nav">
                        <div className="nav-con">
                            <h1>Lorem <br /> ipsum</h1>
                            <p>About</p>
                            <p>Services</p>
                            <p>Cuisine</p>
                            <p>Gallery</p>
                            <p>Content</p>
                            <p>Book</p>
                            <button>Cart</button>
                        </div>
                    </div>
                    <div className="main">
                        <div className="main-up">
                            <div className="up-left">
                                <h1>What are you <br /> having for lunch?</h1>
                            </div>
                            <div className="up-right">
                                <p>Lorem ipsum dolor sit, amet consectetur 
                                    adipisicing elit. Quisquam assumenda non harum 
                                     tempore omnis.</p>
                                     <div className="line"></div>
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
                                <div className="cards">
                                    <img src="https://cdn.pixabay.com/photo/2019/10/10/19/40/tacos-4540402__340.jpg" alt="img" />
                                    <p>Mexican texi</p>
                                </div>
                                <div className="cards">
                                    <img src="https://cdn.pixabay.com/photo/2019/10/10/19/40/tacos-4540402__340.jpg" alt="img" />
                                    <p>Mexican texi</p>
                                </div>
                                <div className="cards">
                                    <img src="https://cdn.pixabay.com/photo/2019/10/10/19/40/tacos-4540402__340.jpg" alt="img" />
                                    <p>Mexican texi</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Task1
