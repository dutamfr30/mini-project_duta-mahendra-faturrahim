import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function index() {
  return (
    <>
      <Navbar />
      <div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-6 col-sm-12">
            <h1 className="mt-3 homeH1" >Welcome</h1>
            <h3 className="homeH3">Selamat datang di Aquatic</h3>
            <p className="mt-4 homeP">
              Selamat datang di Aquatic, Aquatic merupakan website yang menyediakan informasi tentang rekomendasi alat aquarium terbaik di Indonesia yang membantu kalian dalam membuat aquarium menjadi lebih indah. Aquatic juga menyediakan informasi tentang spesies ikan yang ada di Indonesia.
            </p>
            <a href="/"><button className="btn homeButton"><span>Get Started </span></button></a>
          </div>
          <div class="col-xl-6 col-lg-6 col-sm-12 mt-3">
            <img src="https://firebasestorage.googleapis.com/v0/b/mini-project-ecc3a.appspot.com/o/welcome.jpg?alt=media&token=2acef425-6de1-41e3-990b-30ede1944b8e" alt="" className="imgWelcome"/> 
          </div>
        </div>
        <div class="row justify-content-center mt-5">
          <div class="col-xl-6 col-lg-6 col-sm-12">
            <img src="https://firebasestorage.googleapis.com/v0/b/mini-project-ecc3a.appspot.com/o/rekomendasi.jpg?alt=media&token=f5438dec-1691-49f2-8196-26123a63a093" alt="" className="imgRekomendasi"/> 
          </div>
          <div class="col-xl-6 col-lg-6 col-sm-12 mt-3">
            <h1 className="mt-3 homeH1">Rekomendasi</h1>
            <h3 className="homeH3">Perlengkapan Tank/Aquarium</h3>
            <p className="mt-4 homeP" >
              Temukan alat-alat aquarium yang cocok untuk anda gunakan. Aquatic menyediakan alat aquarium yang cocok untuk anda gunakan.
            </p>
            <a href="/rekomendasi"><button className="btn homeButton"><span>Get Started </span></button></a>
          </div>
        </div>
        <div class="row justify-content-center mt-5">
          <div class="col-xl-6 col-lg-6 col-sm-12">
            <h1 className="mt-3 homeH1">Artikel</h1>
            <h3 className="homeH3">Daftar Spesies Ikan Aquarium Air Tawar</h3>
            <p className="mt-4 homeP">
              Temukan spesies ikan yang ada di Indonesia. Aquatic menyediakan informasi tentang spesies ikan yang ada di Indonesia.
            </p>
            <a href="/artikel"><button className="btn homeButton"><span>Get Started </span></button></a>
          </div>
          <div class="col-xl-6 col-lg-6 col-sm-12 mt-3">
            <img src="https://firebasestorage.googleapis.com/v0/b/mini-project-ecc3a.appspot.com/o/artikel.jpg?alt=media&token=5cddd667-bd0b-4e3f-ac36-fce101111fba" alt="" className="imgArtikel"/> 
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
