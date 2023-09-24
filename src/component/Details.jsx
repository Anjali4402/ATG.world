import React from 'react';

const Details = () => {
    return (
        <div>
        
        <div className='d-none d-sm-block '>
            <div className="d-flex justify-content-between">
                <div className='d-flex gap-4'>
                    <h5 className='text-dark'>All Posts(32)</h5>
                    <h5 className='text-secondary d-md-block d-none'>Article</h5>
                    <h5 className='text-secondary d-md-block d-none'>Event</h5>
                    <h5 className='text-secondary d-md-block d-none'>Education</h5>
                    <h5 className='text-secondary d-md-block d-none'>Job</h5>
                </div>
                <div className='d-flex  gap-md-4 gap-2'>
                    <div className="dropdown d-lg-block d-none">
                        <button className="btn btn-secondary px-4 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Write a post
                        </button>
                    </div>
                    <button className='btn btn-primary text-light'>

                        <span className='d-flex align-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                            <span className='px-lg-2 px-1'>Join Group</span>
                        </span>

                    </button>
                </div>
            </div>
        </div>


        <div className="d-block d-sm-none">
            <div className="d-flex justify-content-between px-4 align-items-center">
                <h5>Posts(368)</h5>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle px-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Filter: All
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
        </div>
        
        
        <hr />



        </div>
    )
}

export default Details
