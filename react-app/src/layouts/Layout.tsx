import React, { FC, PropsWithChildren } from 'react'

import Footer from '../components/footer/Footer';
import './layout.css'
import NavBar from '../components/navBar/NavBar';
const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <NavBar />
            <div className='main'>
                {children}
            </div>
            <Footer />
        </>

    )
}
export default Layout;