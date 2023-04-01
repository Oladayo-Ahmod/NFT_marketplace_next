import Image from 'next/image'
import Link from 'next/link'

const Service =()=>{
    return (
        <>
              {/* <!-- start service area --> */}
    <div className="rn-service-area rn-section-gapTop">
        <div className="container">
            <div className="row">
                <div className="col-12 mb--50">
                    <h3 className="title" >Create and sell your NFTs</h3>
                </div>
            </div>
            <div className="row g-5">
                {/* <!-- start single service --> */}
                <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="rn-service-one color-shape-7">
                        <div className="inner">
                            <div className="icon">
                                <Image  src="/images/icons/shape-7.png" alt="Shape" width={75} height={84} />
                            </div>
                            <div className="subtitle">Step-01</div>
                            <div className="content">
                                <h4 className="title"><Link href="#">Set up your wallet</Link></h4>
                                <p className="description">Powerful features and inclusions, which makes Nuron standout,
                                    easily customizable and scalable.</p>
                                <Link className="read-more-button" href="#"><i className="feather-arrow-right"></i></Link>
                            </div>
                        </div>
                        <Link className="over-link" href="#"></Link>
                    </div>
                </div>
                {/* <!-- End single service --> */}
                {/* <!-- start single service --> */}
                <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="rn-service-one color-shape-1">
                        <div className="inner">
                            <div className="icon">
                                <Image  src="/images/icons/shape-1.png" width={75} height={84}  alt="Shape" />
                            </div>
                            <div className="subtitle">Step-02</div>
                            <div className="content">
                                <h4 className="title"><Link href="#">Create your collection</Link></h4>
                                <p className="description">A great collection of beautiful website templates for your need.
                                    Choose the best suitable template.</p>
                                <Link className="read-more-button" href="#"><i className="feather-arrow-right"></i></Link>
                            </div>
                        </div>
                        <Link className="over-link" href="#"></Link>
                    </div>
                </div>
                {/* <!-- End single service --> */}
                {/* <!-- start single service --> */}
                <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="rn-service-one color-shape-5">
                        <div className="inner">
                            <div className="icon">
                                <Image  src="/images/icons/shape-5.png" width={75} height={84} alt="Shape" />
                            </div>
                            <div className="subtitle">Step-03</div>
                            <div className="content">
                                <h4 className="title"><Link href="#">Add your NFT's</Link></h4>
                                <p className="description">We've made the template fully responsive, so it looks great on
                                    all devices: desktop, tablets and.</p>
                                <Link className="read-more-button" href="#"><i className="feather-arrow-right"></i></Link>
                            </div>
                        </div>
                        <Link className="over-link" href="#"></Link>
                    </div>
                </div>
                {/* <!-- End single service --> */}
                {/* <!-- start single service --> */}
                <div className="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="rn-service-one color-shape-6">
                        <div className="inner">
                            <div className="icon">
                                <Image  src="/images/icons/shape-6.png" width={75} height={84} alt="Shape" />
                            </div>
                            <div className="subtitle">Step-04</div>
                            <div className="content">
                                <h4 className="title"><Link href="#">Sell Your NFT's</Link></h4>
                                <p className="description">I throw myself down among the tall grass by the stream as I
                                    lie close to the earth NFT's.</p>
                                <Link className="read-more-button" href="#"><i className="feather-arrow-right"></i></Link>
                            </div>
                        </div>
                        <Link className="over-link" href="#"></Link>
                    </div>
                </div>
                {/* <!-- End single service --> */}
            </div>
        </div>
    </div>
    {/* <!-- End service area --> */}
        </>
    )
}

export default Service