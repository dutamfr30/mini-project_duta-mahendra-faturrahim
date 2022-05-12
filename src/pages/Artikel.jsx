import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Artikel() {
    const [data, setData] = useState('');
    useEffect(() => {
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
              setData(response.data);
          }).catch(function (error) {
              console.error(error);
          });
        } , [])
    

  return (
    <>
        <Navbar />
        <div className="container">
            <div className="text-center">
            <h1 className="mt-3 homeH1">Artikel</h1>
            <h3 className="homeH3">Daftar Spesies Ikan Aquarium Air Tawar</h3>
            </div>
        </div>
        <div className='container mt-5'>
            <hr className='lineArtikel'/>
            {/* {data.data?.map((item, index) => (       
                    <div className='row' key={index}>
                        <div className='col-md-3'>
                            <img src={item.data.imageURL} alt="" className='imgListArtikel mt-3'/>
                        </div>
                        <div className='col-md-9'>
                            <a href={item.detailsUrl} className='linkArtikel'>
                                <h3 className='artikelH3'>{item.name}</h3>
                            </a>
                        </div>
                    </div>
            )
            )} */}
            <div className='row'>
                <div className='col-md-3'>
                    <img src={data[2].imageURL} alt="" className='imgListArtikel mt-3'/>
                </div>
                <div className='col-md-9'>
                    <a href={data[2].detailsUrl} className='linkArtikel'>
                        <h3 className='artikelH3'>{data[2].name}</h3>
                    </a>
                </div>
            </div>
            {/* <hr className='lineArtikel'/>
            <div className='row'>
                <div className='col-md-3'>
                    <img src={data[4].imageURL} alt="" className='imgListArtikel mt-3'/>
                </div>
                <div className='col-md-9'>
                    <a href={data[4].detailsUrl} className='linkArtikel'>
                        <h3 className='artikelH3'>{data[4].name}</h3>
                    </a>
                </div>
            </div>
            <hr className='lineArtikel'/>
            <div className='row'>
                <div className='col-md-3'>
                    <img src={data[5].imageURL} alt="" className='imgListArtikel mt-3'/>
                </div>
                <div className='col-md-9'>
                    <a href={data[5].detailsUrl} className='linkArtikel'>
                        <h3 className='artikelH3'>{data[5].name}</h3>
                    </a>
                </div>
            </div> */}
            
        </div>
        <Footer />
    </>
  )
}
