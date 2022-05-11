import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function index() {
  return (
    <>
      <Navbar />
      <div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-6">
            <h1 className="mt-3 homeH1" >Welcome</h1>
            <h3 className="homeH3">Selamat datang di Aquatic</h3>
            <p className="mt-4 homeP">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error dolorum id facilis et culpa enim neque nobis sapiente fugit veritatis non beatae magnam omnis hic velit ratione saepe eaque voluptate esse, optio repudiandae repellat quasi tenetur. Velit eum commodi voluptatibus distinctio asperiores dolorum adipisci odit numquam, ipsa ad culpa facilis.</p>
            <a href="/"><button className="btn homeButton">Get Started</button></a>
          </div>
          <div class="col-6">
            <img src="https://firebasestorage.googleapis.com/v0/b/mini-project-ecc3a.appspot.com/o/welcome.jpg?alt=media&token=2acef425-6de1-41e3-990b-30ede1944b8e" alt="" className="imgWelcome"/> 
          </div>
        </div>
        <div class="row justify-content-center mt-5">
          <div class="col-6">
            <img src="https://firebasestorage.googleapis.com/v0/b/mini-project-ecc3a.appspot.com/o/rekomendasi.jpg?alt=media&token=f5438dec-1691-49f2-8196-26123a63a093" alt="" className="imgRekomendasi"/> 
          </div>
          <div class="col-6">
            <h1 className="mt-3 homeH1">Rekomendasi</h1>
            <h3 className="homeH3">Perlengkapan Tank/Aquarium</h3>
            <p className="mt-4 homeP" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error dolorum id facilis et culpa enim neque nobis sapiente fugit veritatis non beatae magnam omnis hic velit ratione saepe eaque voluptate esse, optio repudiandae repellat quasi tenetur. Velit eum commodi voluptatibus distinctio asperiores dolorum adipisci odit numquam, ipsa ad culpa facilis.</p>
            <a href="/rekomendasi"><button className="btn homeButton">Get Started</button></a>
          </div>
        </div>
        <div class="row justify-content-center mt-5">
          <div class="col-6">
            <h1 className="mt-3 homeH1">Artikel</h1>
            <h3 className="homeH3">Perawatan Ikan Kesayangan</h3>
            <p className="mt-4 homeP">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error dolorum id facilis et culpa enim neque nobis sapiente fugit veritatis non beatae magnam omnis hic velit ratione saepe eaque voluptate esse, optio repudiandae repellat quasi tenetur. Velit eum commodi voluptatibus distinctio asperiores dolorum adipisci odit numquam, ipsa ad culpa facilis.</p>
            <a href="/artikel"><button className="btn homeButton">Get Started</button></a>
          </div>
          <div class="col-6">
            <img src="https://firebasestorage.googleapis.com/v0/b/mini-project-ecc3a.appspot.com/o/artikel.jpg?alt=media&token=5cddd667-bd0b-4e3f-ac36-fce101111fba" alt="" className="imgArtikel"/> 
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
