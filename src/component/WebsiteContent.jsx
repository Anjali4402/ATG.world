import React from 'react'
import Posts from './Posts'
import Details from './Details'
import Location from './Location'

const WebsiteContent = () => {
    return (
        <div className='mx-auto col-sm-10 my-4 py-4'>
            <div className="row">
                <div className="col-12">
                    <Details/>
                </div>
            </div>
            <div className="row py-4">
                <div className="col-md-8">
                    <Posts/>
                </div>
                <div className="col-md-3 col-sm-4 d-none d-md-block">
                    <Location/>
                </div>
            </div>

        </div>
    )
}

export default WebsiteContent
