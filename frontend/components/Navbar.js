
import Image from "next/image"
import { TransactionContext } from "../context/TransactionContext"
import React, { useEffect } from "react";
import {ethers} from 'ethers'

const Navbar =()=>{
    const {connectWallet,account,CreateNft}= React.useContext(TransactionContext)
    return (
        <div>
            <header className="rn-header haeder-default header--sticky">
        <div className="container">
            <div className="header-inner">
                <div className="header-left">
                    <div className="logo-thumbnail logo-custom-css">
                        <a className="logo-light" href="index.html"><Image src="/images/logo/logo-white.png" width={100} height={100} alt="nft-logo" /></a>
                        <a className="logo-dark" href="index.html"><Image src="/images/logo/logo-dark.png" width={100} height={100} alt="nft-logo" /></a>
                    </div>
                    <div className="mainmenu-wrapper">
                        <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
                            {/* <!-- Start Mainmanu Nav --> */}
                            <ul className="mainmenu">
                                <li className="has-droupdown has-menu-child-item">
                                    <a href="index.html">Home</a>
                                    <ul className="submenu">
                                        <li><a href="index.html">Home page - 01 <i className="feather-home"></i></a></li>
                                       
                                    </ul>
                                </li>
                                <li><a href="about.html">About</a>
                                </li>
                                <li className="has-droupdown has-menu-child-item">
                                    <a href="#">Explore</a>
                                    <ul className="submenu">
                                        <li><a href="explore-one.html">Explore Filter<i className="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-two.html">Explore Isotop<i className="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-three.html">Explore Carousel<i className="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-four.html">Explore Simple<i className="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-five.html">Explore Place Bid<i className="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-six.html">Place Bid With Filter<i className="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-seven.html">Place Bid With Isotop<i className="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-eight.html">Place Bid With Carousel<i className="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-list-style.html">Explore Style List<i className="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-list-column-two.html">Explore List Col-Two<i className="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-left-filter.html">Explore Left Filter<i className="feather-fast-forward"></i></a></li>
                                        <li><a className="live-expo" href="explore-live.html">Live Explore</a></li>
                                        <li><a className="live-expo" href="explore-live-two.html">Live Explore Carousel</a></li>
                                        <li><a className="live-expo" href="explore-live-three.html">Live With Place Bid</a></li>
                                    </ul>
                                </li>
                                <li className="with-megamenu">
                                    <a href="#">Pages</a>
                                    <div className="rn-megamenu">
                                        <div className="wrapper">
                                            <div className="row row--0">
                                                <div className="col-lg-3 single-mega-item">
                                                    <ul className="mega-menu-item">
                                                        <li>
                                                            <a href="create.html">Create NFT<i data-feather="file-plus"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="upload-variants.html">Upload Type<i data-feather="layers"></i></a>
                                                        </li>
                                                        <li><a href="activity.html">Activity<i data-feather="activity"></i></a></li>
                                                        <li>
                                                            <a href="creator.html">Creators<i data-feather="users"></i></a>
                                                        </li>
                                                        <li><a href="collection.html">Our Collection<i data-feather="package"></i></a></li>
                                                        <li><a href="upcoming_projects.html">Upcoming Projects<i data-feather="loader"></i></a></li>
                                                        <li><a href="create-collection.html">Create Collection<i data-feather="edit-3"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 single-mega-item">
                                                    <ul className="mega-menu-item">
                                                        <li><a href="login.html">Log In <i data-feather="log-in"></i></a></li>
                                                        <li><a href="sign-up.html">Registration <i data-feather="user-plus"></i></a></li>
                                                        <li><a href="forget.html">Forget Password <i data-feather="key"></i></a></li>
                                                        <li>
                                                            <a href="author.html">Author/Profile(User) <i data-feather="user"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="connect.html">Connect to Wallet <i data-feather="pocket"></i></a>
                                                        </li>
                                                        <li><a href="privacy-policy.html">Privacy Policy <i data-feather="file-text"></i></a></li>
                                                        <li><a href="newsletter.html">Newsletter<i data-feather="book-open"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 single-mega-item">
                                                    <ul className="mega-menu-item">

                                                        <li><a href="product.html">Product<i data-feather="folder"></i></a></li>
                                                        <li><a href="product-details.html">Product Details <i data-feather="layout"></i></a></li>
                                                        <li><a href="ranking.html">NFT Ranking<i data-feather="trending-up"></i></a></li>
                                                        <li><a href="edit-profile.html">Edit Profile<i data-feather="edit"></i></a></li>
                                                        <li><a href="blog-details.html">Blog Details<i data-feather="book-open"></i></a></li>
                                                        <li><a href="404.html">404 <i data-feather="alert-triangle"></i></a></li>
                                                        <li><a href="forum-community.html">Forum & Community<i data-feather="message-circle"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3 single-mega-item">
                                                    <ul className="mega-menu-item">
                                                        <li><a href="about.html">About Us<i data-feather="award"></i></a></li>
                                                        <li><a href="contact.html">Contact <i data-feather="headphones"></i></a></li>
                                                        <li><a href="support.html">Support/FAQ <i data-feather="help-circle"></i></a></li>
                                                        <li><a href="terms-condition.html">Terms & Condition <i data-feather="list"></i></a></li>
                                                        <li><a href="coming-soon.html">Coming Soon <i data-feather="clock"></i></a></li>
                                                        <li><a href="maintenance.html">Maintenance <i data-feather="cpu"></i></a></li>
                                                        <li><a href="forum-details.html">Forum Details <i data-feather="message-circle"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="has-droupdown has-menu-child-item">
                                    <a className="down" href="blog.html">Blog</a>
                                    <ul className="submenu">
                                        <li><a href="blog-single-col.html">Blog Single Column<i className="feather-fast-forward"></i></a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                            {/* <!-- End Mainmanu Nav --> */}
                        </nav>
                    </div>
                </div>
                <div className="header-right">
                    <div className="setting-option d-none d-lg-block">
                        <form className="search-form-wrapper" action="#">
                            <input type="search" placeholder="Search Here" aria-label="Search" />
                            <div className="search-icon">
                                <button><i className="feather-search"></i></button>
                            </div>
                        </form>
                    </div>
                    {/* <div className="setting-option rn-icon-list d-block d-lg-none">
                        <div className="icon-box search-mobile-icon">
                            <button><i className="feather-search"></i></button>
                        </div>
                        <form id="header-search-1" action="#" method="GET" className="large-mobile-blog-search">
                            <div className="rn-search-mobile form-group">
                                <button type="submit" className="search-button"><i className="feather-search"></i></button>
                                <input type="text" placeholder="Search ..." />
                            </div>
                        </form>
                    </div> */}

                    <div className="setting-option header-btn rbt-site-header" id="rbt-site-header">
                        <div className="icon-box">
                            <button id="connectbtn" onClick={connectWallet} className="btn btn-primary-alta btn-small" href="#">
                               {account ? `${account.slice(0,6)}...${account.slice(account.length -4)}` : 'connect wallet'}
                                </button>
                              
                        </div>
                    </div>

                    <div className="setting-option rn-icon-list notification-badge">
                        <div className="icon-box">
                            <a href="activity.html"><i className="feather-bell"></i><span className="badge">6</span></a>
                        </div>
                    </div>

                    <div className="header_admin" id="header_admin">
                        <div className="setting-option rn-icon-list user-account">
                            <div className="icon-box">
                                <a href="author.html"><Image src="/images/icons/boy-avater.png" fill alt="Images" /></a>
                                <div className="rn-dropdown">
                                    <div className="rn-inner-top">
                                        <h4 className="title"><a href="product-details.html">Christopher William</a></h4>
                                        <span><a href="#">Set Display Name</a></span>
                                    </div>
                                    <div className="rn-product-inner">
                                        <ul className="product-list">
                                            <li className="single-product-list">
                                                <div className="thumbnail">
                                                    <a href="product-details.html"><Image src="/images/portfolio/portfolio-07.jpg" width={50} height={50} alt="Nft Product Images" /></a>
                                                </div>
                                                <div className="content">
                                                    <h6 className="title"><a href="product-details.html">Balance</a></h6>
                                                    <span className="price">25 ETH</span>
                                                </div>
                                                <div className="button"></div>
                                            </li>
                                            <li className="single-product-list">
                                                <div className="thumbnail">
                                                    <a href="product-details.html"><Image src="/images/portfolio/portfolio-01.jpg" width={50} height={50} alt="Nft Product Images" /></a>
                                                </div>
                                                <div className="content">
                                                    <h6 className="title"><a href="product-details.html">Balance</a></h6>
                                                    <span className="price">25 ETH</span>
                                                </div>
                                                <div className="button"></div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="add-fund-button mt--20 pb--20">
                                        <a className="btn btn-primary-alta w-100" href="connect.html">Add Your More Funds</a>
                                    </div>
                                    <ul className="list-inner">
                                        <li><a href="author.html">My Profile</a></li>
                                        <li><a href="edit-profile.html">Edit Profile</a></li>
                                        <li><a href="connect.html">Manage funds</a></li>
                                        <li><a href="login.html">Sign Out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="setting-option mobile-menu-bar d-block d-xl-none">
                        <div className="hamberger">
                            <button className="hamberger-button">
                                <i className="feather-menu"></i>
                            </button>
                        </div>
                    </div>

                    <div id="my_switcher" className="my_switcher setting-option">
                        <ul>
                            <li>
                                <a href="javascript: void(0);" data-theme="light" className="setColor light">
                                    <Image className="sun-image" src="/images/icons/sun-01.svg" alt="Sun images" width={50} height={50}/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript: void(0);" data-theme="dark" className="setColor dark">
                                    <Image className="Victor Image" src="/images/icons/vector.svg" alt="Vector Images" width={50} height={50}/>
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    </header>
        </div>
    )
 
}
export default Navbar