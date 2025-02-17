import React, { Children } from 'react'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div>
            <main>{Children}</main>
            <Footer />
        </div>
    )
}

export default Layout
