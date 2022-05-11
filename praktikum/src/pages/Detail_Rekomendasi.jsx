import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


// const GetComment = gql`
// query MyQuery($_eq1: String) {
//     comment_user(where: {id_barang: {_eq: $_eq1}}) {
//       comment
//       id_barang
//       id_user
//       username
//     }
//   }
// `;
const GetBarang = gql`
query MyQuery($_eq: String) {
    detail_rekomendasi(where: {id_barang: {_eq: $_eq}}) {
      gambar_barang
      id_detail
      id_barang
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
      id_barang
      id_user
      username
    }
  }
`;
const InsertComment = gql`
mutation MyMutation($comment: String, $id_barang: String, $username: String) {
    insert_comment_user(objects: {comment: $comment, username: $username, id_barang: $id_barang}) {
      affected_rows
      returning {
        comment
        id_barang
        id_user
        username
      }
    }
  }
`;
const DeleteComment = gql`
mutation MyMutation($id_user: Int) {
    delete_comment_user(where: {id_user: {_eq: $id_user}}) {
      returning {
        comment
        id_user
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
        id_user
        username
      }
    }
  }  
`; 

export default function Detail_Rekomendasi() {
    const {data: dataQueryBarang, loading: loadingQueryBarang, error} = useQuery(GetBarang);
    const {data: dataQueryComment, loading: loadingQueryComment, error: errorComment} = useQuery(GetComment);
    const [idDelete, setIdDelete] = useState(1);
    const [commentUpdate, setCommentUpdate] = useState(1);
    const [dataComment, setDataComment] = useState([{
        username: '',
        comment: '',
        editing: true,
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
        <p>
            Loading
        </p>
    )

    const handleChangeComment = (e) => {
        setDataComment({
            ...dataComment,
            [e.target.name]: e.target.value,
        });
        console.log(dataComment)
    };
    const handleSubmitComment = (e) => {
        e.preventDefault();
        if (dataComment.comment.trim() && dataComment.username.trim()) {
            insertComment({
                variables: {
                    username: dataComment.username,
                    comment: dataComment.comment,
                },
            });
            setDataComment({
                ...dataComment,
                username: '',
                comment: '',
            });
        }else{
            alert('Mohon isi username dan komentar anda');
        }
    };

    const handleDeleteComment = (id_user) => {
        if (id_user) {
            deleteComment({ variables: { id_user:id_user }
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
        if (comment) {
            updateComment({ variables: { _eq: comment, comment: commentUpdate }
            });
            setCommentUpdate("");
        } else {
            alert('Mohon pilih komentar yang akan diupdate');
        }
    };
    const handleBukaInput = () => {
        setDataComment({
            ...dataComment,
            editing: false,
        })
    };
    const handleTutupInput = () => {
        setDataComment({
            ...dataComment,
            editing: true,
        })
    };
    let viewMode = {}
    let editMode = {}

    if (dataComment.editing){
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    };

    const [nama_barang, setNama_barang] = useState('');
    useEffect(() => {
        return () => {
            const { nama_barang } = useParams();
        };
    }, [])
    console.log(nama_barang)

  return (
    <>
        <Navbar />
        <div className="container">
            <div className="text-center">
            <h1 className="mt-3 homeH1">Rekomendasi</h1>
            <h3 className="homeH3">Perlengkapan Tank/Aquarium</h3>
            </div>
            {/* {dataQueryBarang
                .filter((item) => item.nama_barang === nama_barang)
                .map((item) => (
                    <div className="row">
                        <div className="col-md-6">
                            <img src={item.gambar_barang} alt="gambar" className="detailFoto" />
                        </div>
                    </div>
                ))
            } */}
            {/* <div className='row mt-5'>
                <div className='col-6'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/mini-project-ecc3a.appspot.com/o/filter-aquarium-2.jpg?alt=media&token=882693bb-36f2-4cdb-8fc8-9468392d09d7" alt="" className='detailFoto'/>
                </div>
                <div className='col-6'>
                    <h4 className='homeH4'>Hang On Filter</h4>
                    <p className='detailP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat a massa consectetur interdum. Praesent metus metus, vulputate tristique leo eu, convallis congue elit. Integer consectetur libero augue. Curabitur laoreet turpis sed dapibus convallis. Integer dignissim purus tellus, at finibus justo sollicitudin ac. Praesent pellentesque molestie libero sit amet condimentum. Donec accumsan pretium libero, vitae rutrum enim ullamcorper et. In condimentum purus eget enim tempor tempor. Maecenas orci sem, mattis nec nibh sed, placerat eleifend nibh.</p>
                    <h6 className='homeH6'> 
                        Spesifikasi:
                    </h6>
                    <ul>
                        <li>Ukuran : 30 x 45 cm</li>
                        <li>Power : 3 watt</li>
                        <li>F max : 250 liter</li>
                        <li>Filter : Foam biofil hitam</li>
                        <li>Full body : Transparant</li>
                    </ul>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-5 '>
                <a href="#" className="btn buttonBarang">Link Pembelian</a>
            </div> */}
            <hr className='line my-5' />
            <div className='row d-flex justify-content-center'>
            <div className='col-5 me-5 comment'>
                    <p className='commentP'>Comment</p>
                    <form action="" onSubmit={handleSubmitComment}>
                        <input type="text" placeholder='Username...' className='d-block mb-3 inputComment' value={dataComment.username} name="username" onChange={handleChangeComment}/>
                        <textarea id="" cols="30" rows="10" placeholder='Type your comment...' className='inputComment typeComment' value={dataComment.comment} name="comment" onChange={handleChangeComment} ></textarea>
                        <div className='m-2 d-flex justify-content-end'>
                            <button className="btn buttonComment" onClick={handleSubmitComment}>Send</button>
                        </div>
                    </form>
                </div>
            <div className='col-5 ms-5 comment'>
                    <p className='commentP'>Last Comment</p>
                    <div className='commentItem'>
                    {dataQueryComment?.comment_user.map((user) => (
                        <div className='p-2 mt-3 commentList d-block'>
                        <p className='commentListUser'>{user.username}</p>
                        <p className='commentListText'>{user.comment}</p>
                        <div onSubmit={handleUpdateComment} style={viewMode}>
                            <input type="text" placeholder='Comment...' onChange={update} className='me-4' required
                            />
                            <button className='btn buttonHapus me-1' onClick={() => handleUpdateComment(user.comment)}>Ubah</button>
                            <button className='btn buttonHapus me-1' onClick={() => handleDeleteComment(user.id_user)}>Hapus</button>
                            <button className='btn buttonHapus' onClick={handleTutupInput}>Selesai</button>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button className='btn buttonHapus me-1' style={editMode} onClick={handleBukaInput}>Edit</button>
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
