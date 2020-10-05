import React from 'react'


//#region Local imports
import 'src/components/footer/index.scss'
const rwanda = '/static/assets/background/rwanda.png'
const android = '/static/assets/icons/android.png'
const ios = '/static/assets/icons/ios.jpeg'


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
                            <a href="#" className="footeras">You made a greate choose to work with us</a>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}

export default footer