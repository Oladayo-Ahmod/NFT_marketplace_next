import Image from "next/image"

const Footer =()=>{
    return (
        <>
             {/* <!-- Start Footer Area --> */}
    <div className="rn-footer-one rn-section-gap bg-color--1 mt--100 mt_md--80 mt_sm--80">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="widget-content-wrapper">
                        <div className="footer-left">
                            <div className="logo-thumbnail logo-custom-css">
                                <Link className="logo-light" href="index.html"><Image width={106} height={35} src="/images/logo/logo-white.png" alt="nft-logo" /></Link>
                                <Link className="logo-dark" href="index.html"><Image width={106} height={35} src="/images/logo/logo-dark.png" alt="nft-logo" /></Link>
                            </div>
                            <p className="rn-footer-describe">
                                Created with the collaboration of over 60 of the world's best Nuron Artists.
                            </p>
                        </div>
                        <div className="widget-bottom mt--40 pt--40">
                            <h6 className="title">Get The Latest Nuron Updates </h6>
                            <div className="input-group">
                                <input type="text" className="form-control bg-color--2" placeholder="Your username" aria-label="Recipient's username" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary-alta btn-outline-secondary" type="button">Subscribe</button>
                                </div>
                            </div>
                            <div className="newsletter-dsc">
                                <p>Email is safe. We don't spam.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--40">
                    <div className="footer-widget widget-quicklink">
                        <h6 className="widget-title">Nuron</h6>
                        <ul className="footer-list-one">
                            <li className="single-list"><Link href="#">Protocol Explore</Link></li>
                            <li className="single-list"><Link href="#">System Token</Link></li>
                            <li className="single-list"><Link href="#">Otimize Time</Link></li>
                            <li className="single-list"><Link href="#">Visual Checking</Link></li>
                            <li className="single-list"><Link href="#">Fadeup System</Link></li>
                            <li className="single-list"><Link href="#">Activity Log</Link></li>
                            <li className="single-list"><Link href="#">System Auto Since</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                    <div className="footer-widget widget-information">
                        <h6 className="widget-title">Information</h6>
                        <ul className="footer-list-one">
                            <li className="single-list"><Link href="#">Market Explore</Link></li>
                            <li className="single-list"><Link href="#">Ready Token</Link></li>
                            <li className="single-list"><Link href="#">Main Option</Link></li>
                            <li className="single-list"><Link href="#">Product Checking</Link></li>
                            <li className="single-list"><Link href="blog.html">Blog Grid</Link></li>
                            <li className="single-list"><Link href="about.html">About Us</Link></li>
                            <li className="single-list"><Link href="#">Fix Bug </Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                    <div className="footer-widget">
                        <h6 className="widget-title">Recent Sold Out</h6>
                        <ul className="footer-recent-post">
                            <li className="recent-post">
                                <div className="thumbnail">
                                    <Link href="product-details.html">
                                        <Image  src="/images/portfolio/portfolio-01.jpg" alt="Product Images" width={60} height={60}/>
                                    </Link>
                                </div>
                                <div className="content">
                                    <h6 className="title"><Link href="product-details.html">#21 The Wonder</Link></h6>
                                    <p>Highest bid 1/20</p>
                                    <span className="price">0.244wETH</span>
                                </div>
                            </li>
                            <li className="recent-post">
                                <div className="thumbnail">
                                    <Link href="product-details.html">
                                        <Image  src="/images/portfolio/portfolio-02.jpg" alt="Product Images" width={60} height={60}/>
                                    </Link>
                                </div>
                                <div className="content">
                                    <h6 className="title"><Link href="product-details.html">Diamond Dog</Link></h6>
                                    <p>Highest bid 1/20</p>
                                    <span className="price">0.022wETH</span>
                                </div>
                            </li>
                            <li className="recent-post">
                                <div className="thumbnail">
                                    <Link href="product-details.html">
                                        <Image  src="/images/portfolio/portfolio-03.jpg" alt="Product Images" width={60} height={60} />
                                    </Link>
                                </div>
                                <div className="content">
                                    <h6 className="title"><Link href="product-details.html">Morgan11</Link></h6>
                                    <p>Highest bid 1/20</p>
                                    <span className="price">0.892wETH</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Footer Area --> */}
        </>
    )
}
export default Footer