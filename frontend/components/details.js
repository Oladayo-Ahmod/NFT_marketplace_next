import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext,useEffect, useState } from 'react';
import { TransactionContext } from "../context/TransactionContext"

const NftDetails =()=>{
    const {buyNft,getNft,singleData,account} = useContext(TransactionContext)
    const router = useRouter()
    const {tokenId} = router.query;

    useEffect(()=>{
    getNft(tokenId)
    })

    
    return (
        
        <>
        {singleData ? (
            // <h1>jee</h1>
            <div>
        <div className="rn-breadcrumb-inner ptb--30">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h5 className="title text-center text-md-start">Product Details</h5>
                        {/* <button onClick={getNft(1)}></button> */}
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <ul className="breadcrumb-list">
                            <li className="item"><Link href="index.html">Home</Link></li>
                            <li className="separator"><i className="feather-chevron-right"></i></li>
                            <li className="item current">Product Details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-details-area rn-section-gapTop">
        <div class="container">
            <div class="row g-5">

                <div class="col-lg-7 col-md-12 col-sm-12">
                    <div class="product-tab-wrapper rbt-sticky-top-adjust">
                        <div class="pd-tab-inner">
                            <div class="tab-content rn-pd-content" id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <div class="rn-pd-thumbnail">
                                        <Image width={421} height={421}  loader={()=>singleData.image} src={singleData.image}alt="Nft_Profile" />
                                    </div>
                                    {
                                            Number(account) == Number(singleData.seller)  || account == singleData.owner ? 
                                            <button className='btn btn-danger btn-md' disabled>
                                            Owned by you
                                          </button>
                                            :
                                            <button style={{width:'100%'}} class='btn btn-primary my-2' onClick={()=>buyNft(singleData.tokenId,singleData.price)}>
                                            Buy
                                          </button>
                                           
                                        }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                 {/* product image area end */}

                <div class="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                    <div class="rn-pd-content-area">
                        <div class="pd-title-area">
                            <h4 class="title">{singleData.name}</h4>
                            <div class="pd-react-area">
                                <div class="heart-count">
                                    <i data-feather="heart"></i>
                                    <span>33</span>
                                </div>
                                <div class="count">
                                    <div class="share-btn share-btn-activation dropdown">
                                        <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                                            </svg>
                                        </button>

                                        <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                                            <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                                Share
                                            </button>
                                            <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                                Report
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <span class="bid">Height bid <span class="price">{singleData.price }ETH</span></span>
                        <h6 class="title-name">
                           {singleData.description}
                        </h6>
                        <div class="catagory-collection">
                            <div class="catagory">
                                <span>Royalties <span class="color-body">
                                        {singleData.royalty} royalties</span></span>
                            </div>
                           
                        </div>
                        {/* <Link class="btn btn-primary-alta" href="#">Unlockable content included</Link> */}
                        <div class="rn-bid-details">
                            <div class="tab-wrapper-one">
                                <nav class="tab-button-one">
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button class="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="true">Details</button>
                                        <small></small>
                                    </div>
                                </nav>
                                <div class="tab-content rn-bid-content" id="nav-tabContent">
                                    <div class="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                        {/* <!-- single creator --> */}
                                        <div class="top-seller-inner-one">
                                            <div class="top-seller-wrapper">
                                                <div class="thumbnail">
                                                    <Link href="#"><Image  width={42} height={42} src="/images/client/client-3.png" alt="Nft_Profile" /></Link>
                                                </div>
                                                <div class="top-seller-content">
                                                    <span>0.11wETH by <Link href="#">Allen Waltker</Link></span>
                                                    <span class="count-number">
                                                        1 hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single creator -->
                                        <!-- single creator --> */}
                                        <div class="top-seller-inner-one">
                                            <div class="top-seller-wrapper">
                                                <div class="thumbnail">
                                                    <Link href="#"><Image  width={42} height={42} src="/images/client/client-4.png" alt="Nft_Profile" /></Link>
                                                </div>
                                                <div class="top-seller-content">
                                                    <span>0.09wETH by <Link href="#">Joe Biden</Link></span>
                                                    <span class="count-number">
                                                        1.30 hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single creator -->
                                        <!-- single creator --> */}
                                        <div class="top-seller-inner-one">
                                            <div class="top-seller-wrapper">
                                                <div class="thumbnail">
                                                    <Link href="#"><Image  width={42} height={42} src="/images/client/client-5.png" alt="Nft_Profile" /></Link>
                                                </div>
                                                <div class="top-seller-content">
                                                    <span>0.07wETH by <Link href="#">Sonial mridha</Link></span>
                                                    <span class="count-number">
                                                        1.35 hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single creator -->
                                        <!-- single creator --> */}
                                        <div class="top-seller-inner-one">
                                            <div class="top-seller-wrapper">
                                                <div class="thumbnail">
                                                    <Link href="#"><Image  width={42} height={42} src="/images/client/client-6.png" alt="Nft_Profile" /></Link>
                                                </div>
                                                <div class="top-seller-content">
                                                    <span>0.07wETH by <Link href="#">Tribute Dhusra</Link></span>
                                                    <span class="count-number">
                                                        1.55 hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single creator -->
                                        <!-- single creator --> */}
                                        <div class="top-seller-inner-one">
                                            <div class="top-seller-wrapper">
                                                <div class="thumbnail">
                                                    <Link href="#"><Image  width={42} height={42} src="/images/client/client-7.png" alt="Nft_Profile" /></Link>
                                                </div>
                                                <div class="top-seller-content">
                                                    <span>0.07wETH by <Link href="#">Sonia Sobnom</Link></span>
                                                    <span class="count-number">
                                                        2 hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single creator -->
                                        <!-- single creator --> */}
                                        <div class="top-seller-inner-one">
                                            <div class="top-seller-wrapper">
                                                <div class="thumbnail">
                                                    <Link href="#"><Image  width={42} height={42} src="/images/client/client-8.png" alt="Nft_Profile" /></Link>
                                                </div>
                                                <div class="top-seller-content">
                                                    <span>0.02wETH by <Link href="#">Sadia Rummon</Link></span>
                                                    <span class="count-number">
                                                        2.5 hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single creator --> */}
                                    </div>
                                    <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        {/* <!-- single --> */}
                                        <div class="rn-pd-bd-wrapper">
                                            <div class="top-seller-inner-one">
                                
                                                <h6 class="name-title">
                                                    Owner's Address
                                                </h6>
                                                <div class="top-seller-wrapper">
                                                    <div class="thumbnail">
                                                        <Link href="#"><Image  width={42} height={42} src="/images/client/client-1.png" alt="Nft_Profile" /></Link>
                                                    </div>
                                                    <div class="top-seller-content">
                                                        <Link href="#">
                                                            <h6 class="name">
                                                            {singleData.owner ? `${singleData.owner.slice(0,6)}...${singleData.owner.slice(singleData.owner.length -4)}` : ''}
                                                            </h6>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- single --> */}
                                            <div class="rn-pd-sm-property-wrapper">
                                                <h6 class="pd-property-title">
                                                    Property
                                                </h6>
                                                <div class="property-wrapper">
                                                    {/* <!-- single property --> */}
                                                    <div class="pd-property-inner">
                                                        <span class="color-body type">SIZE</span>
                                                        <span class="color-white value">{singleData.size}</span>
                                                    </div>
                                                    {/* <!-- single property End -->
                                                    <!-- single property --> */}
                                                    <div class="pd-property-inner">
                                                        <span class="color-body type">PROPERTIES</span>
                                                        <span class="color-white value">{singleData.properties}</span>
                                                    </div>
                                          
                                                    
                                                    {/* <!-- single property End --> */}
                                                </div>
                                            </div>
                                            {/* <!-- single --> */}
                             
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                      
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
     )
     : <h1>Loading ....</h1> 
     }
        </>
    )
}

export default NftDetails