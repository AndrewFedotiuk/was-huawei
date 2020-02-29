import React, { useContext } from 'react'
import './index.scss'
import image1 from '../../assets/R_06.png'
import image2 from '../../assets/R_06_2.png'
import { I18nContext } from '../../layouts/base-layout'

const BannerSection = () => {
    const { bannerSection } = useContext(I18nContext)

    return (
        <section className='banner-section'>
            <div className="image-wrapper">
                <img style={{ top: '100px', right: '150px' }} className='earphone' src={image1} alt="Earphone" />
                <img style={{ top: '-20px', right: '0' }} className='earphone' src={image2} alt="Earphone" />
            </div>

            <div className="container">
                <div className="row">
                    <p className="col-3 logo">WAS</p>
                    <div className="col-md-7">
                        <p dangerouslySetInnerHTML={{ __html: bannerSection.text1 }} />
                        <p>
                            {bannerSection.text2}
                        </p>
                    </div>

                </div>
            </div>
        </section >
    )
}


export default BannerSection