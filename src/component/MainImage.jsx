import React from 'react'
import image1 from '../Images/BackgroundImg.jpg'

const MainImage = () => {
    return (
        <div className="container-fluid px-0 custm-position bg-primary custom-h">
            <img src={image1} className="card-imgs h-100 w-100" />
            <div className='d-flex justify-content-between custm-position-top d-block d-sm-none'>
                <div className='text-light'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                </div>
                <button className='btn btn-outline-light'>Join Group</button>
            </div>
            <div className='custm-position-bottom-left text-light '>
                <h2>Computer Engineering</h2>
                <p>142,765 Computer Engineers follow this</p>
            </div>
            {/* <h1 className="d-block d-sm-none">hello wodl</h1> */}
            {/* <h1 className="d-none d-sm-block d-md-none">hello world</h1> */}
        </div>
        // position-absolute top-0 start-0
        // <div className='card bg-primary'>
        //     <img src={image1} className="card-imgs"  style={{width: '100%' , height:'440px'}}/>
        //     <div className="card-img-overlay">
        //         <h5 className="card-title">Card title</h5>
        //         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //         <p className="card-text"><small>Last updated 3 mins ago</small></p>
        //     </div>
        // </div>
        // <div className="card text-bg-dark" style={{width:'1440px', height:"440px"}}>
        //     <img src={image1} className="card-img"  style={{width: '100%' , height:'100%'}}/>
        //     <div className="card-img-overlay">
        //         <h5 className="card-title">Card title</h5>
        //         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //         <p className="card-text"><small>Last updated 3 mins ago</small></p>
        //     </div>
        // </div>
    )
}

export default MainImage
