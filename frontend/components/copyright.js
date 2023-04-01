import Link from "next/link"
const CopyRight =()=>{
    return (
        <>
             <div className="copy-right-one ptb--20 bg-color--1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="copyright-left">
                                <span>©2023 NFT MARKETPLACE, Inc. All rights reserved.</span>
                                <ul className="privacy">
                                    <li><Link href="terms-condition.html">Terms</Link></li>
                                    <li><Link href="privacy-policy.html">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="copyright-right">
                                <ul className="social-copyright">
                                    <li><Link href="#"><i></i></Link></li>
                                    <li><Link href="#"><i ></i></Link></li>
                                    <li><Link href="#"><i ></i></Link></li>
                                    <li><Link href="#"><i></i></Link></li>
                                    <li><Link href="#"><i></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CopyRight