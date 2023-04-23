import Navbar from './navbar'
import Footer from './footer'
import styles from './layout.module.css';


function Layout({ children }) {
  return (
    <div className={styles.container}>
    <Navbar />
        <main>{children}</main>
      {/* <Footer /> */}
    </div>
    
  )
}

export default Layout;