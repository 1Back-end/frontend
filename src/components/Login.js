import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Utiliser useNavigate pour la redirection
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [phone_number, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();  // Hook pour la redirection

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Vérifiez si les champs sont remplis
        if (!phone_number || !password) {
            setError('Veuillez remplir tous les champs');
            return;
        }

        // Effectuer l'appel API
        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/auth/login/super_admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone_number,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Si la connexion est réussie, rediriger vers le Dashboard
                navigate('/superadmin/dashboard');
            } else {
                // Si l'API retourne une erreur, afficher le message d'erreur
                setError(data.detail || 'Numéro de téléphone ou mot de passe incorrect');
            }
        } catch (error) {
            // Si une erreur réseau se produit
            setError('Une erreur s\'est produite lors de la connexion');
        }
    };

    return (
        <div className="container mt-5">
            <div className="col-md-5 col-sm-12 mx-auto">
                <div className="card shadow-sm p-4 border-0">
                    <h3 className="">Se connecter à son compte</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Numéro de téléphone</label>
                            <input 
                                type="text" 
                                id="phoneNumber" 
                                className="form-control shadow-none py-2"
                                value={phone_number}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Mot de passe</label>
                            <input 
                                type="password" 
                                id="password" 
                                className="form-control shadow-none py-2"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className='d-flex align-items-center justify-content-between mb-3'>
                            <div className='me-auto'>
                                <div className='form-check'>
                                    <input 
                                        type="checkbox" 
                                        className="form-check-input"
                                        id="rememberMe"
                                    />
                                    <label className="form-check-label" htmlFor="rememberMe">
                                        Se souvenir de moi
                                    </label>
                                </div>
                            </div>

                            <div className='ms-auto'>
                                <Link to="#" className="text-primary text-decoration-none">
                                    Mot de passe oublié?
                                </Link>
                            </div>
                        </div>

                        {error && <div className="text-danger mb-3">{error}</div>}

                        <button type="submit" className="btn-primary w-100 mb-3">Se connecter</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
