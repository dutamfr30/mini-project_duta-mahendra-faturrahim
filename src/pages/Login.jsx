import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/userSlice';
import Navbar from '../components/NavbarLogin';
import '../assets/css/login.modules.css';

export default function Login () {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            alert('Username dan password harus diisi');
        } else {
            dispatch(
                login({
                    username: username,
                    password: password,
                })
            );
        }
    }
    
    return (
        <>
            <Navbar />
                <div className="login d-flex align-items-center">
                    <div className="row loginContent">
                        <div className="col-md-7 d-flex align-items-center">
                            <div className="mx-5">
                                <h1 className='loginH1'>Hello Para Penghobi Aquatic</h1>
                                <h3 className='loginH3'>Selamat datang di Aquatic</h3>
                                <p className='loginP'>
                                    Aquatic merupakan sebuah website dimana kalian bisa menemukan apa yang aquarium kalian butuhkan.
                                    Ayo tunggu apalagi??? Masuk dan temukan segala kebutuhan aquarium dan ikan kalian di sini. Rasakan pengalaman setting aquarium dengan peralatan yang telah direkomendasikan oleh kami.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                            <div className="card loginBox">
                                <div className='d-flex justify-content-center mt-3 loginH3'>
                                    <h3>Login</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleLogin}>
                                        <div className="form-group inputLogin">
                                            <label>Username</label>
                                            <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                        </div>
                                        <div className="form-group inputLogin">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div className="form-group d-flex justify-content-center">
                                            <button className="btn loginButton mt-4" type='submit'>Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}