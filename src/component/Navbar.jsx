import React from 'react';
import image from '../../public/atgLogo.png'


const Navbar = () => {
    return (
        <div className='container-fluid border p-4  '>
            {/* Display in large screen */}
            <div className="d-none d-sm-block px-xl-4 ">
                <div className="d-flex justify-content-xxl-around justify-content-between align-items-sm-center">
                    <div className='align-content-center'>
                        <h5>
                            <span className='text-success'>ATG.</span>
                            <span>W</span>
                            <img src= {image} width='15px' height='15px' alt="Company Logo"/>
                            <span>RLD</span>
                        </h5>
                    </div>
                    <div>
                        <div className="custom-border">
                        <form className="form-inline my-2 my-lg-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                            <input style={{outline:'none', border: 'none', paddingLeft:'6px', backgroundColor:'rgba(102, 105, 108, 0.080)'}} className=" mr-sm-2" type="search" placeholder="Search for your favorite group in ATG" aria-label="Search"/>
                        </form>
                        </div>
                    </div>
                    <div className='d-none d-md-block'>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className='h5' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Create account.</span>
                                    <span className='h5 text-success'> It's free</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* display in small screen */}
            <div className='d-block d-sm-none'>
                    <div className='d-flex gap-2 justify-content-end'>
                    <div className="rounded bg-secondary custom-dimens"></div>
                    <div className="rounded-circle bg-secondary custom-dimens"></div>
                    <div className="rounded custom_triangle" style={{cursor:'pointer'}} data-bs-toggle="modal" data-bs-target="#staticBackdrop"></div>
                    </div>
            </div>
    </div>       
    )
}

export default Navbar
