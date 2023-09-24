import React from 'react'
import image1 from '../Images/HotWeather.jpg'
const Card = () => {
    return (
        <div className="card col-lg-4 col-sm-12" style= {{width: '692pxs'}} >
            <img src={image1} style={{height: '220px'}}  className="card-img-top" alt="..."/>
            <div className="card-body">
                <p>✍️ Article</p>
                <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <h5>What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                        </div>
                        <div className="col-2">
                            <div className="dropdown">
                                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ...
                                </a>

                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Edit</a></li>
                                    <li><a className="dropdown-item" href="#">Report</a></li>
                                    <li><a className="dropdown-item" href="#">Option 3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                </div>

                <div className="container text-center">
                    <div className="row">
                        <div className="col-6">
                            <p>innovation pvt Ltd</p>
                        </div>
                        <div className="col-6">
                            <p>Noida india</p>
                        </div>
                    </div>
                </div>

                <p>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                {/* <p className="card-textsss">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}

                <button type="button" className="btn btn-lg btn-block btn-outline-secondary">Add website</button>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <p>Sara valr</p>
                        </div>
                        <div className="col-4">
                            <p>1.4k views</p>
                        </div>
                        <div className="col-2">
                            <p>()</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
