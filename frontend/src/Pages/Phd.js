import React from 'react'
import InstituteGlance from '../Components/Prateek/InstituteGlance'
import Footer from '../Components/Nirnay/Footer'
import CommonBanner from '../Components/Nirnay/CommonBanner'
import ProgPhd from '../Components/Nirnay/ProgPhd'
import PhdHighlight from '../Components/Nirnay/PhdHighlight'
import GoToTop from '../Components/Nirnay/GoToTop'
import PhdStart from '../Components/Nirnay/PhdStart'

const Phd = () => {
    return (
        <div>
            <CommonBanner />
            <PhdStart />
            <ProgPhd />
            <PhdHighlight />
            <InstituteGlance />
            <GoToTop />
            <Footer />
        </div>
    )
}

export default Phd;