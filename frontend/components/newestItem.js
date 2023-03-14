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

    const {AllUnsoldNfts,nftData,buyNft,account} = useContext(TransactionContext)
    // console.log(account);
    // console.log(AllUnsoldNfts);
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
   
    return (
              
    <div className="rn-new-items rn-section-gapTop">
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
                                    <a  href={`/nft-details/${nft.tokenId}`}><Image loader={()=>nft.image} src={nft.image} width={339} height={339} alt="NFT_portfolio" /></a>
                                </div>
                                <div className="product-share-wrapper">
                                   
                                    <div className="share-btn share-btn-activation dropdown">
                                        <button className="icon" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                                            </svg>
                                        </button>
        
        
                                     
        
                                    </div>
                                </div>
                                <a href={`/nft-details/${nft.tokenId}`}><span className="product-name">{nft.description}</span></a>
                                {/* <span className="latest-bid">Highest bid 1/20</span> */}
                                <div className="bid-react-area">
                                    <div className="last-bid">{nft.price}ETH</div>
                                    <div className="react-area">
                                        {
                                            Number(account) == Number(nft.seller)  || account == nft.owner ? 
                                            <button className='btn btn-danger btn-md' disabled>
                                            owned
                                          </button>
                                            :
                                            <button className='btn btn-primary btn-md' disabled>
                                            Buy
                                          </button>
                                           
                                        }
                                     
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