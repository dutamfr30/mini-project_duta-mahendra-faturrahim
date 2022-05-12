import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Artikel() {

    const options = {
    method: 'GET',
    url: 'https://list-of-freshwater-aquarium-fish-species.p.rapidapi.com/species',
    headers: {
        'X-RapidAPI-Host': 'list-of-freshwater-aquarium-fish-species.p.rapidapi.com',
        'X-RapidAPI-Key': '322542d429mshac63a7439f5ff5ep1c64afjsnb0ccbb262a11'
    }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
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
                    <img src={response.data[0].imageURL} alt="" className='imgListArtikel mt-3'/>
                </div>
                <div className='col-md-9'>
                    <Link to='/Detail_Artikel' className='linkArtikel'>
                        <h3 className='artikelH3'>Tips Memberi Pakan Yang Baik Untuk Ikan Agar Ikan Selalu Sehat </h3>
                    </Link>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
