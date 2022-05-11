import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import '../assets/css/index.modules.css';



export default function Footer() {
  return (
    <>
        <div className="footer container mt-5">
            <div className="row justify-content-center">
                <div className='col-5'>
                    <a href="/" className='navbar-brand footerLogo'>
                        Aquatic
                    </a>
                    <p className='footerP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum, eros in maximus vestibulum, eros elit molestie dui, ac ullamcorper ex ligula a arcu. Donec sit amet ullamcorper mauris. Nulla dictum turpis erat, ac interdum lectus interdum sed.</p>
                    <div className='mb-5'>
                        <Icon.Facebook className='me-2 iconSocial'/>
                        <Icon.Instagram className='me-2 iconSocial'/>
                        <Icon.Whatsapp className='me-2 iconSocial'/>
                        <Icon.Twitter className='iconSocial'/>
                    </div>
                </div>
                <div className="information col-4">
                    <div className='d-block'>
                        <Icon.GeoAlt className='iconInformation me-2'/>
                        <span className='footerP'>Kalimantan Timur, Indonesia </span>
                    </div>
                    <div className='d-block'>
                        <Icon.Envelope className='iconInformation me-2'/>
                        <span className='footerP'>aquatic@email.com</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}
