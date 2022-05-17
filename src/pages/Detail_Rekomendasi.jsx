import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import htmr from 'htmr';


const GetBarang = gql`
query MyQuery {
    detail_rekomendasi {
      gambar_barang
      id_detail
      link_pembelian
      nama_barang
      spesifikasi_barang
    }
  }
  
`;
const GetComment = gql`
query MyQuery {
    comment_user {
      comment
      id_comment
      nama_barang
      username
    }
  }
`;
const InsertComment = gql`
mutation MyMutation($nama_barang: String, $comment: String, $username: String) {
    insert_comment_user(objects: {comment: $comment, username: $username, nama_barang: $nama_barang}) {
      affected_rows
      returning {
        comment
        id_comment
        nama_barang
        username
      }
    }
  }
`;
const DeleteComment = gql`
mutation MyMutation($id_comment: Int) {
    delete_comment_user(where: {id_comment: {_eq: $id_comment}}) {
      returning {
        comment
        id_comment
        username
      }
    }
  }
`; 
const UpdateComment = gql`
mutation MyMutation($_eq: String, $comment: String) {
    update_comment_user(where: {comment: {_eq: $_eq}}, _set: {comment: $comment}) {
      affected_rows
      returning {
        comment
        id_comment
        username
      }
    }
  }  
`; 

export default function Detail_Rekomendasi() {
    const params  = useParams();
    console.log(params)
    const {data: dataQueryBarang, loading: loadingQueryBarang, error} = useQuery(GetBarang);
    const {data: dataQueryComment, loading: loadingQueryComment, error: errorComment} = useQuery(GetComment);
    const [idDelete, setIdDelete] = useState(1);
    const [commentUpdate, setCommentUpdate] = useState(1);
    const [dataComment, setDataComment] = useState([{
        username: '',
        comment: '',
        editing: false,
    }]);
    const [insertComment, { loading: loadingComment }] = useMutation(InsertComment, {
        refetchQueries: [GetComment],
    });
    const [deleteComment, { loading: loadingDelete }] = useMutation(DeleteComment, {
        refetchQueries: [GetComment],
    });
    const [updateComment, { loading: loadingUpdate }] = useMutation(UpdateComment, {
        refetchQueries: [GetComment],
    });

    if (error) return <p>Error {console.error(error)}</p>;
    if (loadingQueryBarang || loadingQueryComment || loadingComment || loadingDelete || loadingUpdate)
    return (
        <div className='loading d-flex justify-content-center'>
            <img src="https://firebasestorage.googleapis.com/v0/b/mini-project-ecc3a.appspot.com/o/Ellipsis-1s-200px%20(1).svg?alt=media&token=c57a0918-4b26-4ea6-9c34-94b25638bfff" alt="" />
        </div>
    );

    const handleChangeComment = (e) => {
        setDataComment({
            ...dataComment,
            [e.target.name]: e.target.value,
        });
        console.log(dataComment)
    };
    const handleSubmitComment = (e) => {
        e.preventDefault();
        if (dataComment.comment.length > 0 && dataComment.username.length > 0) {
            insertComment({
                variables: {
                    nama_barang: params.nama_barang,
                    comment: dataComment.comment,
                    username: dataComment.username,
                }
            });
            setDataComment({
                username: '',
                comment: '',
                editing: false,
            });
        } else{
            alert('Mohon isi username dan komentar anda terlebih dahulu');
        }
    };

    const handleDeleteComment = (id_comment) => {
        if (id_comment) {
            deleteComment({ variables: { id_comment:id_comment }
            });
            setIdDelete("");
        } else {
            alert('Mohon pilih komentar yang akan dihapus');
        }
    };
      
    const update = (e) => {
        setCommentUpdate(e.target.value);
    };
    const handleUpdateComment = (comment) => {
        if (commentUpdate.length > 0) {
            updateComment({ variables: { _eq: comment, comment: commentUpdate }
            });
            setCommentUpdate("");
        } else {
            alert('Mohon isi komentar anda terlebih dahulu');
        }
    };
    const handleBukaInput = () => {
        setDataComment({
            ...dataComment,
            editing: true,
        })
    };
    const handleTutupInput = () => {
        setDataComment({
            ...dataComment,
            editing: false,
        })
    };
    let viewMode = {}
    let editMode = {}

    if (dataComment.editing){
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    };

  return (
      <>
        <Navbar />
        <div className="container">
            <div className="text-center">
            <h1 className="mt-3 homeH1">Rekomendasi</h1>
            <h3 className="homeH3">Perlengkapan Tank/Aquarium</h3>
            </div>
            <div>
                {console.log(dataQueryBarang)}
                
            {dataQueryBarang?.detail_rekomendasi.filter(barang => barang.nama_barang === params.nama_barang).map(barang => (
                <>
                {console.log("ini barang=",barang.nama_barang)}
                {console.log("paramsnya=",params.nama_barang)}
                    <div className='row mt-3'>
                        <div className='col-xl-6 col-lg-6 col-sm-12 mt-3'>
                            <img src={barang.gambar_barang} alt="" className='detailFoto'/>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-sm-12 mt-3'>
                            <h4 className='homeH4'>{barang.nama_barang}</h4>
                            <p className='detailP'>{htmr(barang.spesifikasi_barang)}</p>
                            {/* <h6 className='homeH6'> 
                            Spesifikasi:
                            </h6>
                            <ul>
                                <li>Ukuran : 30 x 45 cm</li>
                                <li>Power : 3 watt</li>
                                <li>F max : 250 liter</li>
                                <li>Filter : Foam biofil hitam</li>
                                <li>Full body : Transparant</li>
                            </ul> */}
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-5 '>
                        <a href={barang.link_pembelian} className="btn buttonBarang">Link Pembelian</a>
                    </div>
                </>
            ))}
            </div>

            <hr className='line my-5' />
            <div className='row container d-flex justify-content-evenly'>
                <div className='col-xl-5 col-lg-5 col-sm-12 mt-3 comment'>
                        <p className='commentP'>Comment</p>
                        <form action="" onSubmit={handleSubmitComment}>
                            <input type="text" placeholder='Username...' className='d-block mb-3 inputComment' value={dataComment.username} name="username" onChange={handleChangeComment}/>
                            <textarea id="" cols="30" rows="10" placeholder='Type your comment...' className='inputComment typeComment' value={dataComment.comment} name="comment" onChange={handleChangeComment} ></textarea>
                            <div className='m-2 d-flex justify-content-end'>
                                <button className="btn buttonComment" onClick={handleSubmitComment}>Send</button>
                            </div>
                        </form>
                    </div>
                <div className='col-xl-5 col-lg-5 col-sm-12 mt-3 comment'>
                        <p className='commentP'>Last Comment</p>
                        <div className='commentItem'>
                        {dataQueryComment?.comment_user.filter(comment => comment.nama_barang === params.nama_barang).map((comment) => (
                            <div className='p-2 mt-3 commentList d-block'>
                            <p className='commentListUser'>{comment.username}</p>
                            <p className='commentListText'>{comment.comment}</p>
                            <div onSubmit={handleUpdateComment} style={editMode}>
                                <input type="text" placeholder='Comment...' onChange={update} className='me-3' required
                                />
                                <a onClick={handleTutupInput}>
                                    <button className='btn buttonEdit me-1' onClick={() => handleUpdateComment(comment.comment)}>Ubah</button>
                                </a>
                                <button className='btn buttonEdit me-1' onClick={() => handleDeleteComment(comment.id_comment)}>Hapus</button>
                                <button className='btn buttonEdit' onClick={handleTutupInput}>Selesai</button>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button className='btn buttonEdit me-1' style={viewMode} onClick={handleBukaInput}>Edit</button>
                            </div>
                        </div>
                        ))}
                        </div>
                    </div>
                </div>
        </div>
        <Footer />
    </>
  )
}
