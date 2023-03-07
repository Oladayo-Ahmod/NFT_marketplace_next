import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect,useContext } from 'react'
import { TransactionContext } from "../context/TransactionContext"


const NewestItem =()=>{
    useEffect(()=>{
        require('bootstrap/dist/js/bootstrap.bundle')
    },[])

    const {AllUnsoldNfts,nftData} = useContext(TransactionContext)
    // console.log(nftData);
    var setting = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 1124,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 868,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                }
            }
        ]
    }
    function toggleIcon(){
        document.querySelector('.share-btn-setting').classList.toggle('share-btn-setting-toggle')
    }
    return (
              
    <div className="rn-new-items rn-section-gapTop">
         <style jsx>
            {
                `
                .share-btn-setting{
                    display : none;
                }
                .share-btn-setting-toggle{
                    display:block !important;
                }
                `
            }

        </style>
        <div className="container">
            <div className="row mb--50 align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h3 className="title mb--0">Newest Items</h3>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                    <div className="view-more-btn text-start text-sm-end">
                        <a className="btn-transparent" href="#">VIEW ALL<i data-feather="arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="row g-5">
                <div className='slider-style-2 slick-activation-01 slick-arrow-style-one slick-arrow-between'>
                {/* <!-- start single product --> */}
                <Slider {...setting}>
                    {
                        nftData?
                        nftData.map((nft,i)=>(
                            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12 p-3">
                            <div className="product-style-one no-overlay">
                                <div className="card-thumbnail">
                                    <a href="product-details.html"><Image loader={()=>nft.image} src={nft.image} width={339} height={339} alt="NFT_portfolio" /></a>
                                </div>
                                <div className="product-share-wrapper">
                                    {/* <div className="profile-share">
                                        <a href="author.html" className="avatar" ><Image src="/images/client/client-1.png"  width={26} height={26} alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar"><Image src="/images/client/client-2.png"  width={26} height={26} alt="Nft_Profile" /></a>
                                        <a href="author.html" className="avatar" ><Image src="/images/client/client-3.png"  width={26} height={26} alt="Nft_Profile" /></a>
                                        <a className="more-author-text" href="#">9+ Place Bit.</a>
                                    </div> */}
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" onClick={toggleIcon} aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                                            </svg>
                                        </button>
        
        
                                        {/* <div className="share-btn-setting dropdown-menu dropdown-menu-end d-none">
                                            <button type="button" className="btn-setting-text share-text">
                                                Share
                                            </button>
                                            <button type="button" className="btn-setting-text report-text">
                                                Report
                                            </button>
                                        </div> */}
        
                                    </div>
                                </div>
                                <a href="product-details.html"><span className="product-name">{nft.description}</span></a>
                                {/* <span className="latest-bid">Highest bid 1/20</span> */}
                                <div className="bid-react-area">
                                    <div className="last-bid">{nft.price}ETH</div>
                                    <div className="react-area">
                                        {/* <svg viewBox="0 0 17 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                            <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                                        </svg> */}
                                      <a className='btn btn-primary btn-md' href={`/buy-nft/${nft.tokenId}`}>
                                        Buy
                                      </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                        :
                        (
                            <div>
                                <h1>Loading ....</h1>
                            </div>
                        )
                    }
           
       

                </Slider>
               
            </div>
            </div>
        </div>
    </div>

        
    )
}

export default NewestItem