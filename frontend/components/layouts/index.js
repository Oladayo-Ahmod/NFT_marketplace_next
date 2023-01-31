import Navbar from '../Navbar'
import Footer from '../footer'
import CopyRight from '../copyright'
const Layout =({children})=>{
    return (
        <div className='content'>
            <Navbar />
            {children}
            <Footer />
            <CopyRight />
        </div>
    )
}
export default Layout