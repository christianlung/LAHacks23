import Navbar from './navbar'
import Footer from './footer'
import styles from './layout.module.css';


function Layout({ children }) {
  return (
    <div styles={{backgroundcolor:"black"}}>
      <div className={styles.container}>
      <Navbar />
          <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
    
  )
}

export default Layout;