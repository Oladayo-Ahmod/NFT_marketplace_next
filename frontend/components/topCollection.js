import Image from 'next/image'

const TopCollection=()=>{
    return (
        <>
        <div>
        <style jsx>
            {
            `
            .test-some{
                border-radius: 5px;
    object-fit: cover;
    width: 100%;
    height: auto;
    transition: var(--transition);
            }
            `
            }
            
        </style>
        </div>
               {/* <!-- collection area Start --> */}
    <div className="rn-collection-area rn-section-gapTop">
        <div className="container">
            <div className="row mb--50 align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h3 className="title mb--0">Top Collection</h3> 
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                    <div className="view-more-btn text-start text-sm-end">
                        <a className="btn-transparent" href="#">VIEW ALL<i data-feather="arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <div className="row g-5">
                 {/* <!-- start single collention --> */}
                <div  className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                    <a href="product-details.html" className="rn-collection-inner-one">
                        <div className="collection-wrapper">
                            <div className="collection-big-thumbnail">
                                <Image  src="/images/collection/collection-lg-01.jpg" className='test-some' alt="Nft_Profile" width={245} height={146} />
                            </div>
                            <div className="collenction-small-thumbnail">
                                <Image  src="/images/collection/collection-sm-01.jpg" alt="Nft_Profile" width={67} height={45} />
                                <Image  src="/images/collection/collection-sm-02.jpg" alt="Nft_Profile" width={67} height={45} />
                                <Image  src="/images/collection/collection-sm-03.jpg" alt="Nft_Profile" width={67} height={45} />
                            </div>
                            <div className="collection-profile">
                                <Image  src="/images/client/client-15.png" alt="Nft_Profile" width={70} height={70}/>
                            </div>
                            <div className="collection-deg">
                                <h6 className="title">Cubic Trad</h6>
                                <span className="items">27 Items</span>
                            </div>
                        </div>
                    </a>
                </div>
                 {/* <!-- End single collention --> */}
                 {/* <!-- start single collention --> */}
                <div   className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                    <a href="product-details.html" className="rn-collection-inner-one">
                        <div className="collection-wrapper">
                            <div className="collection-big-thumbnail">
                                <Image  src="/images/collection/collection-lg-03.jpg" className='img-fluid' fill  alt="Nft_Profile" />
                            </div>
                            <div className="collenction-small-thumbnail">
                                <Image  src="/images/collection/collection-sm-04.jpg" alt="Nft_Profile" fill />
                                <Image  src="/images/collection/collection-sm-05.jpg" alt="Nft_Profile" fill />
                                <Image  src="/images/collection/collection-sm-06.jpg" alt="Nft_Profile" fill />
                            </div>
                            <div className="collection-profile">
                                <Image  src="/images/client/client-12.png" alt="Nft_Profile" fill />
                            </div>
                            <div className="collection-deg">
                                <h6 className="title">Diamond Dog</h6>
                                <span className="items">20 Items</span>
                            </div>
                        </div>
                    </a>
                </div>
                 {/* <!-- End single collention --> */}
                 {/* <!-- start single collention --> */}
                <div   className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                    <a href="product-details.html" className="rn-collection-inner-one">
                        <div className="collection-wrapper">
                            <div className="collection-big-thumbnail">
                                <Image  src="/images/collection/collection-lg-02.jpg" alt="Nft_Profile" fill />
                            </div>
                            <div className="collenction-small-thumbnail">
                                <Image  src="/images/collection/collection-sm-07.jpg" alt="Nft_Profile" fill />
                                <Image  src="/images/collection/collection-sm-08.jpg" alt="Nft_Profile" fill />
                                <Image  src="/images/collection/collection-sm-09.jpg" alt="Nft_Profile" fill />
                            </div>
                            <div className="collection-profile">
                                <Image  src="/images/client/client-13.png" alt="Nft_Profile" fill />
                            </div>
                            <div className="collection-deg">
                                <h6 className="title">Morgan11</h6>
                                <span className="items">15 Items</span>
                            </div>
                        </div>
                    </a>
                </div>
                 {/* <!-- End single collention --> */}
                 {/* <!-- start single collention --> */}
                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
                    <a href="product-details.html" className="rn-collection-inner-one">
                        <div className="collection-wrapper">
                            <div className="collection-big-thumbnail">
                                <Image  src="/images/collection/collection-lg-04.jpg" alt="Nft_Profile" fill />
                            </div>
                            <div className="collenction-small-thumbnail">
                                <Image  src="/images/collection/collection-sm-10.jpg" alt="Nft_Profile" fill />
                                <Image  src="/images/collection/collection-sm-11.jpg" alt="Nft_Profile" fill />
                                <Image  src="/images/collection/collection-sm-12.jpg" alt="Nft_Profile" fill />
                            </div>
                            <div className="collection-profile">
                                <Image  src="/images/client/client-14.png" alt="Nft_Profile" fill />
                            </div>
                            <div className="collection-deg">
                                <h6 className="title">Orthogon#720</h6>
                                <span className="items">10 Items</span>
                            </div>
                        </div>
                    </a>
                </div>
                 {/* <!-- End single collention --> */}
            </div>
        </div>
    </div>
    {/* <!-- collection area End --> */}
    {/* </a> */}
        </>
    )
}

export default TopCollection