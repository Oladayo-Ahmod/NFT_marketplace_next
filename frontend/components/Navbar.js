
import Image from "next/image"
import { TransactionContext } from "../context/TransactionContext"
import React, { useEffect } from "react";
import {ethers} from 'ethers'
import { useRouter } from "next/router";

const Navbar =()=>{
    const router = useRouter()
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
                                <li><a href='/create-nft'>Create NFTs</a>
                                </li>
                          
                                <li><a href="/my-nfts">My NFTs</a></li>
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