import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const GetBarangFilter = gql`
query MyQuery {
    barang_rekomendasi(order_by: {id_barang: asc_nulls_first}, where: {kategori: {_eq: "filter"}}) {
      gambar_barang
      id_barang
      kategori
      nama_barang
    }
  }
`;
const GetBarangLampu = gql`
query MyQuery {
    barang_rekomendasi(order_by: {id_barang: asc_nulls_first}, where: {kategori: {_eq: "lampu"}}) {
      gambar_barang
      id_barang
      kategori
      nama_barang
    }
  }
`;

export default function Rekomendasi() {
    const {data: dataQuery, loading: loadingQuery, error} = useQuery(GetBarangFilter);
    const {data: dataQueryLampu, loading: loadingQueryLampu, error: errorLampu} = useQuery(GetBarangLampu);
    
    if (error) return <p>Error {console.error(error)}</p>;
    if (loadingQuery || loadingQueryLampu)
    return (
        <div className='loading d-flex justify-content-center'>
            <img src="https://firebasestorage.googleapis.com/v0/b/mini-project-ecc3a.appspot.com/o/Ellipsis-1s-200px%20(1).svg?alt=media&token=c57a0918-4b26-4ea6-9c34-94b25638bfff" alt="" />
        </div>
    )
    console.info("data", dataQuery);
    console.info("dataLampu", dataQueryLampu);

  return (
    <>
        <Navbar />
        <div className="container">
            <div className="text-center">
            <h1 className="mt-3 homeH1">Rekomendasi</h1>
            <h3 className="homeH3">Perlengkapan Tank/Aquarium</h3>
            </div>
            <div>
                <h4 className='homeH4 mt-5 mb-3'>Filter Aquarium:</h4>
                <div className='row d-flex justify-content-center'>
                    {dataQuery?.barang_rekomendasi.map((filter) => (
                        <div className='d-flex justify-content-center col-xl-3 col-lg-3 col-sm-12 mt-4'>
                            <div className="card cardBarang shadow p-3 bg-body rounded">
                            <h5 className="card-title text-center namaBarang">{filter.nama_barang}</h5>
                            <img src={filter.gambar_barang} className="card-img-top imgBarang" alt="..." />
                            <div className="card-body d-flex justify-content-between">
                                <Link to={`/rekomendasi/${filter.nama_barang}`} className="btn buttonBarang">Lihat</Link>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h4 className='homeH4 mt-5 mb-3'>Lampu Aquarium:</h4>
                <div className='row d-flex justify-content-center'>
                {dataQueryLampu?.barang_rekomendasi.map((lampu) => (
                    <div className='d-flex justify-content-center col-xl-3 col-lg-3 col-sm-12 mt-4'>
                        <div className="card cardBarang shadow p-3 bg-body rounded">
                        <h5 className="card-title text-center namaBarang">{lampu.nama_barang}</h5>
                        <img src={lampu.gambar_barang} className="card-img-top imgBarang" alt="..." />
                        <div className="card-body">
                            <Link to={`/rekomendasi/${lampu.nama_barang}`} className="btn buttonBarang">Lihat</Link>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}