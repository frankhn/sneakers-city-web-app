import React from 'react'


//#region Local imports
import 'src/components/common/footer/index.scss'


const footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <>
            <div className="container-div">
                <hr id="mid-separahrefr" />
                <div className="terms-of-use col-md-12 col-sm-12">
                    <div> <strong>Sneakers City </strong> | All rights reserved &copy; {currentYear}.</div>
                    <div className='__notice__as' style={{ display: "flex"}}>
                        <div>
                            <span className="footeras">You made a greate choose to work with us</span>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}

export default footer