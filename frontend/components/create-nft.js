import Image from 'next/image'
import { useContext } from 'react'
import { TransactionContext } from "../context/TransactionContext"

const Create =()=>{
const {setFormData,CreateNft,formData,AllUnsoldNFTs} = useContext(TransactionContext)

    return (
        <>
               
    <div className="rn-breadcrumb-inner ptb--30">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12">
                    <h5 className="title text-center text-md-start">Create a New File</h5>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <ul className="breadcrumb-list">
                        <li className="item"><a href="index.html">Home</a></li>
                        <li className="separator"><i className="feather-chevron-right"></i></li>
                        <li className="item current">Crete a New File</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="create-area rn-section-gapTop">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
                    {/* <!-- file upload area --> */}
                    <div className="upload-area">

                        <div className="upload-formate mb--30">
                            <h6 className="title">
                                Upload file
                            </h6>
                            <p className="formate">
                                Drag or choose your file to upload
                            </p>
                        </div>

                        <div className="brows-file-wrapper">
                            {/* <!-- actual upload which is hidden --> */}
                            <input name="createinputfile" id="createinputfile" type="file" className="inputfile" onChange={e => setFormData({...formData, file : e.target.files[0]  })} />
                            <Image id="createfileImage" src="/images/portfolio/portfolio-05.jpg" alt="" width={50} height={50} />
                            {/* <!-- our custom upload button --> */}
                            <label for="createinputfile" title="No File Choosen">
                                <i className="feather-upload"></i>
                                <span className="text-center">Choose a File</span>
                                <p className="text-center mt--10">PNG, GIF, WEBP, MP4 or MP3. <br />    Max 1Gb.</p>
                            </label>
                        </div>
                    </div>
                    {/* <!-- end upoad file area --> */}

                    <div className="mt--100 mt_sm--30 mt_md--30 d-none d-lg-block">
                        <h5> Note: </h5>
                        <span> Service fee : <strong>2.5%</strong> </span> <br />
                        <span> You will receive : <strong>25.00 ETH $50,000</strong></span>
                    </div>

                </div>

                <div className="col-lg-7">
                    <div className="form-wrapper-one">
                        <form className="row" action="#">

                            <div className="col-md-12">
                                <div className="input-box pb--20">
                                    <label for="name" className="form-label">Product Name</label>
                                    <input id="name" placeholder="e. g. `Digital Awesome Game`" onChange={e => setFormData({...formData, name : e.target.value  })} />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="input-box pb--20">
                                    <label for="Discription" className="form-label">Description</label>
                                    <textarea onChange={e => setFormData({...formData, description : e.target.value  })} id="Discription" rows="3" placeholder="e. g. “After purchasing the product you can get item...”"></textarea>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="input-box pb--20">
                                    <label for="dollerValue" className="form-label">Item Price</label>
                                    <input id="dollerValue" placeholder="e. g. `20ETH`" onChange={e => setFormData({...formData, price : e.target.value  })} />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="input-box pb--20">
                                    <label for="Size" className="form-label">Size</label>
                                    <input id="Size" placeholder="e. g. `Size`" onChange={e => setFormData({...formData, size : e.target.value  })} />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="input-box pb--20">
                                    <label for="Propertie" className="form-label">Properties</label>
                                    <input id="Propertie" placeholder="e. g. `Propertie`" onChange={e => setFormData({...formData, properties : e.target.value  })} />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="input-box pb--20">
                                    <label for="Royality" className="form-label">Royality</label>
                                    <input id="Royality" placeholder="e. g. `20%`" onChange={e => setFormData({...formData, royalty : e.target.value  })}/>
                                </div>
                            </div>


                            <div className="col-md-12 col-xl-8 mt_lg--15 mt_md--15 mt_sm--15">
                                <div className="input-box">
                                    <button className="btn btn-primary btn-large w-100" type='button' onClick={CreateNft}>Submit Item</button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>

                <div className="mt--100 mt_sm--30 mt_md--30 d-block d-lg-none">
                    <h5> Note: </h5>
                    <span> Service fee : <strong>2.5%</strong> </span> <br />
                    <span> You will receive : <strong>25.00 ETH $50,000</strong></span>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Create