import Image from "next/image"
import { useEffect } from "react"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

var setting = {
    infinite: true,
    slidesToShow : 3,
    slidesToScroll : 3
}

const Banner =()=>{
    useEffect(()=>{
        require('bootstrap/dist/js/bootstrap.bundle')
    },[])
    return (
        <>
          {/* <!-- start banner area --> */}
    <div className="banner-area pt--25">
        <div className="container-fluid">
            <div className="row">
                <div className="slider-style-2 container slick-activation-01 slick-arrow-style-one slick-arrow-between">

                    {/* <!-- Start Single Portfolio  --> */}
                    <Slider {...setting}>
                    <div className="single-slide">
                        <div className="inner">
                            <div className="thumbnail">
                                <a href="product-details.html"><Image src="/images/banner/banner-01.jpg" width={385} height={385} alt="NFT_portfolio" /></a>
                            </div>
                            <div className="banner-read-thumb">
                                <h4><a href="product-details.html">Cubic Bazier</a></h4>
                                <span>John Lee</span>
                            </div>
                        </div>
                    </div>
    
                    {/* <!-- Start Single Portfolio  --> */}

                    {/* <!-- Start Single Portfolio  --> */}

                    <div className="single-slide">
                        <div className="inner">
                            <div className="thumbnail">
                                <a href="product-details.html"><Image src="/images/banner/banner-02.jpg" width={385} height={385} alt="NFT_portfolio" /></a>
                            </div>
                            <div className="banner-read-thumb">
                                <h4><a href="product-details.html">Faminho24</a></h4>
                                <span>Mr.Alamin</span>
                            </div>
                        </div>
                    </div>
            
                    {/* <!-- Start Single Portfolio  --> */}

                    {/* <!-- Start Single Portfolio  --> */}
      
                    <div className="single-slide">
                        <div className="inner">
                            <div className="thumbnail">
                                <a href="product-details.html"><Image src="/images/banner/banner-03.jpg" width={385} height={385} alt="NFT_portfolio" /></a>
                            </div>
                            <div className="banner-read-thumb">
                                <h4><a href="product-details.html">Tzniistan</a></h4>
                                <span>Ms.maybin</span>
                            </div>
                        </div>
                    </div>
          
                    {/* <!-- Start Single Portfolio  --> */}

                    {/* <!-- Start Single Portfolio  --> */}
        
                    <div className="single-slide">
                        <div className="inner">
                            <div className="thumbnail">
                                <a href="product-details.html"><Image src="/images/banner/banner-04.jpg" width={385} height={385} alt="NFT_portfolio" /></a>
                            </div>
                            <div className="banner-read-thumb">
                                <h4><a href="product-details.html">Bazier</a></h4>
                                <span>Ms.Dhoni</span>
                            </div>
                        </div>
                    </div>
                    </Slider>
                    {/* <!-- Start Single Portfolio  --> */}

                </div>
            </div>
        </div>
    </div>
    {/* <!-- End banner area -- */}
        </>
    )
}

export default Banner