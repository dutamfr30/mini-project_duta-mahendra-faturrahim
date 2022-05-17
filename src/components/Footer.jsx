import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import '../assets/css/index.modules.css';



export default function Footer() {
  return (
    <>
        <div className="footer container mt-5">
            <div className="row d-flex justify-content-center">
                <div className='col-xl-5 col-lg-5 col-sm-12'>
                    <a href="/" className='navbar-brand footerLogo'>
                        Aquatic
                    </a>
                    <p className='footerP'>
                        Aquatic merupakan sebuah website rekomendasi perlengkapan aquarium yang dibuat untuk memenuhi kebutuhan aquarium anda. Aquatic juga menyediakan informasi tentang spesies ikan yang ada di Indonesia.
                    </p>
                    <div className='mb-5'>
                        <a href="https://id-id.facebook.com/"><Icon.Facebook className='me-2 iconSocial'/></a>
                        <a href="https://www.instagram.com/"><Icon.Instagram className='me-2 iconSocial'/></a>
                        <a href="https://web.whatsapp.com/"><Icon.Whatsapp className='me-2 iconSocial'/></a>
                        <a href="https://twitter.com/"><Icon.Twitter className='iconSocial'/></a>
                    </div>
                </div>
                <div className="information col-xl-4 col-lg-4 col-sm-6">
                    <div className='d-block'>
                        <a href="https://www.google.com/maps/place/Kalimantan+Timur/@-0.1019986,117.4274439,8z/data=!4m13!1m7!3m6!1s0x2df14710964d9c91:0xc4abb01d2fe376d7!2sKalimantan+Timur!3b1!8m2!3d0.5386586!4d116.419389!3m4!1s0x2df14710964d9c91:0xc4abb01d2fe376d7!8m2!3d0.5386586!4d116.419389"><Icon.GeoAlt className='iconInformation me-2'/></a>
                        <span className='footerP'>Kalimantan Timur, Indonesia </span>
                    </div>
                    <div className='d-block'>
                        <a href="https://www.google.com/intl/id/gmail/about/"><Icon.Envelope className='iconInformation me-2'/></a>
                        <span className='footerP'>aquatic@email.com</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}
