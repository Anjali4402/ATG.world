import React from 'react';
import data from '../data.json';
import df from './../../public/clouds.png'
// import one from '../public/clouds.png'/
import img2 from '../Images/window.jpg'
import img3 from '../Images/car.png';

const Posts = () => {

    return (
        <>
            {
                data.map((val,index)=>{
                    return(
                        
                            <div key={index} className="card" >
            
                                {
                                    // (val.Image === 'one')?
                                    // <img src= {'public/clouds.png'} style={{height: '220px'}}  className="card-img-top" alt="..."/>
                                    // : 
                                    (val.Image) ?
                                    <img src= {val.Image} style={{height: '220px'}}  className="card-img-top" alt="..."/>
                                    // :
                                    // (val.Image === 'three') ?
                                    // <img src= '/public/clouds.png' style={{height: '220px'}}  className="card-img-top" alt="..."/>
                                    : null
                                }
                                <div className="card-body">
                                    {
                                        (val.Title)?
                                        <h5 className='my-4'>{val.Title}</h5>
                                        : null
                                    }

                                    <div className="row">
                                        <div className="col-10">
                                            {
                                                (val.Main_heading)?
                                                <h4>{val.Main_heading}</h4>
                                                : null
                                            }
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


                                    <div className="row">
                                        <div className="col-12">
                                            {
                                                (val.sub_heading)?
                                                <p className='my-2'>{val.sub_heading}</p>
                                                : null
                                            }
                                        </div>
                                    </div>

                                <div className="row my-2">
                                    <div className="col-6 col-lg-4">
                                        {
                                            (val.Date)?
                                            <p>{val.Date}</p>
                                            : null
                                        }
                                    </div>

                                    <div className="col-6 col-lg-6">
                                        {
                                            (val.Place)?
                                            <p>{val.Place}</p>
                                            : null
                                        }
                                    </div>
                                </div>

                                <div className="row my-2">
                                    <div className="col-12 d-grid">
                                    <button type="button" className="btn btn-lg btn-block btn-outline-secondary">Add website</button>
                                    </div>
                                </div>

                
                                <div className="row">
                                    <div className="col-2">
                                        {
                                            (val.persion_image)?
                                                        <img className='rounded rounded-pill' src={val.persion_image} style={{width:'50px', height:'50px'}} alt="" />
                                            : null
                                        }
                                    </div>

                                    <div className="col-6">
                                        <p>Sara valr</p>
                                    </div>

                                    <div className="col-2">
                                        <p>1.4k views</p>
                                    </div>

                                    <div className="col-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                                        </svg>
                                    </div>

                                </div>
                            </div>

                        </div>
                        
                    )
                })
            }
        </>
    )
}

export default Posts;
