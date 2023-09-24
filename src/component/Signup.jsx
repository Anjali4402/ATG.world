import React, { useEffect, useState } from 'react';
import image from '../../public/SignUpImage.jpg'

const Signup = ({currentShow}) => {
  // what show sign Up or Sign In
  const [show, setShow] = useState('signUp');


  const changeshow = ()=>{
    if(show === 'signUp'){
      setShow('signIn')
    }
    else{
      setShow('signUp')
    }
  }

  // it will run when we change value of show.
  useEffect(()=>{
    currentShow(show)
  }, [show])

  return (
    <div>
      <div className="row px-2">
        <div className="col-12 col-md-6">
          <h3 className='my-lg-4 my-2 d-none d-md-block'>
            {show == 'signUp' ? 'Create Account': "Sing In" }
          </h3>
          <ul className="list-group">
          {
            show === 'signUp' ? 
                <ul className='list-group list-group-horizontal'>
                  <li className="list-group-item w-100 text-secondary">First Name</li>
                  <li className="list-group-item w-100 text-secondary">Last Name</li>
                </ul>:null
          }
          <li className="list-group-item text-secondary">Email</li>
          <li className="list-group-item text-secondary">Password</li>
          
          {
            show === 'signUp' ? 
              <li className="list-group-item text-secondary">Confirm password</li>
              : null
          }
          </ul>

          <div className=' mt-4'>
            <div className="row justify-content-md-center">
              <div className="col-6 col-md-12 d-grid">
                <button className='btn btn-primary rounded-pill'>
                  {show == 'signUp' ? 'Create Account': "Sing In" }
                </button>
              </div>
              <div className="col-6 d-block d-md-none text-end">
              {
                show === "signUp" ?
                <p className='text-end'>Or, <span 
                  onClick={()=>{changeshow()}} 
                  className='text-primary'
                > Sign In</span></p>
                :
                <p className='text-end'>Or, <span 
                  onClick={()=>{changeshow()}} 
                  className='text-primary'
                > Sign Up</span></p>
              }
              </div>
            </div>
          </div>

          <div className='d-grid mt-4 gap-2'>
            <button className='btn btn-outline-secondary'>Sign up with Facebook</button>
            <button className='btn btn-outline-secondary'>Sign up with Facebook</button>
          </div>
        </div>
        <div className="col-6 p-4 d-none d-md-block">
          {
            show === "signUp" ?
              <p className='text-end'>Already have an account? <span 
              onClick={()=>{changeshow()}} className='text-primary'>Sing In</span>
              </p>
            :
              <p className='text-end'>Don’t have an account yet? <span 
              onClick={()=>{changeshow()}} className='text-primary'>Create new!</span>
              </p>
          }
          <img src={image} className='w-100 h-80' alt="Image not found" />
          {
            show === "signUp" ?
            <p className='h6 d-none d-md-block'>By signing up, you agree to our Terms & conditions, Privacy policy</p>:
            null
          }
        </div>
      </div>
    </div>
  )
}

export default Signup
