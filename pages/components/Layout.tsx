import React from 'react'
import Footer from './Footer'
import InterfaceLayout from '../../utilities/interfaces/interfaceLayout'
import styles from "../../styles/Layout.module.css"
import Header from './Header'

const Layout: React.FC<InterfaceLayout> = ({children}) => {
  return (
    <>
    <Header/>
    <div className={styles.layout}>
        {children}
    </div>
    Hey I am using fid
    <Footer/>
    </>
  )
}

export default Layout
