import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Artikel() {
  return (
    <>
        <Navbar />
        <div className="container">
            <div className="text-center">
            <h1 className="mt-3 homeH1">Artikel</h1>
            <h3 className="homeH3">Perawatan Ikan Kesayangan</h3>
            </div>
        </div>
        <div className='container mt-5'>
            <hr className='lineArtikel'/>
            <div className='row'>
                <div className='col-md-3'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/mini-project-ecc3a.appspot.com/o/feeding-fish-A1GP97.jpg?alt=media&token=c1391d5c-272b-4992-b19a-5e025fa15ff3" alt="" className='imgListArtikel mt-3'/>
                </div>
                <div className='col-md-9'>
                    <h3 className='artikelH3'>Tips Memberi Pakan Yang Baik Untuk Ikan Agar Ikan Selalu Sehat </h3>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
