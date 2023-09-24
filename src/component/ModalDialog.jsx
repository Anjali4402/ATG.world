import React, { useState } from 'react'
import Signup from './Signup'

const ModalDialog = () => {

    const [show, setShow] = useState('signUp');
    const currentShow = (whatShow)=>{
        setShow(whatShow)
    }

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="text-success d-none d-md-block">
                            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                        </h6>
                        <h2 className="d-block d-md-none">
                            {show == 'signUp' ? 'Create Account': "Sing In" }
                        </h2>

                        <button type="button" className="btn-close d-none d-md-block position-absolute" 
                            style={{top: '-5%', right:'5%' }} 
                            data-bs-dismiss="modal" aria-label="Close">
                        </button>
                        <button type="button" className="btn-close d-block d-md-none" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <Signup currentShow={currentShow}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDialog
