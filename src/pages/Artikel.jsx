import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
              console.log(response);
              setData(response);
          }).catch(function (error) {
              console.error(error);
          });
        }, [])
    if (data === '')
    return (
        <div className='loading d-flex justify-content-center'>
            <img src="https://firebasestorage.googleapis.com/v0/b/mini-project-ecc3a.appspot.com/o/Ellipsis-1s-200px%20(1).svg?alt=media&token=c57a0918-4b26-4ea6-9c34-94b25638bfff" alt="" />
        </div>
    );

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
            {data?.data?.filter((item, index) => index >= 116 && index < 140 ).map((item) => (       
                    <>
                    <hr className='lineArtikel'/>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-xl-3 col-lg-3 col-sm-12'>
                            <img src={item.imageURL} alt="" className='imgListArtikel mt-3'/>
                        </div>
                        <div className='mt-4 mb-3 col-xl-9 col-lg-9 col-sm-12'>
                            <table>
                                <tr>
                                    <td>
                                        <p className='artikelP'>Name</p>
                                    </td>
                                    <td>
                                        <p className='artikelPIsi'>: {item.name}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className='artikelP'>Taxonomy</p>
                                    </td>
                                    <td>
                                        <p className='artikelPIsi'>: {item.taxonomy}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className='artikelP'>Size</p>
                                    </td>
                                    <td>
                                        <p className='artikelPIsi'>: {item.size}</p>
                                    </td>
                                </tr>
                            </table> 
                            <div className='d-flex justify-content-center'>
                                <a href={item.detailsUrl} className='btn artikelButton'>Artikel</a>
                            </div>                         
                        </div>
                    </div>
                    </>
            )
            )}
            
        </div>
        <Footer />
    </>
  )
}
