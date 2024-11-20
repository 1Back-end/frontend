import React from 'react';
import { Link } from 'react-router-dom';  // Importez Link au lieu de useNavigate

const Home = () => {
    return (
        <div className='container mt-5 pb-5'>
            <div className='col-md-6 col-sm-12 mb-3 mx-auto'>
                <div className='card shadow-sm border-0 p-3 text-center'>
                    <div className='mb-3'>
                        <h3 className='text-uppercase'>GESTION D'UNE BIBLIOTHÈQUE UNIVERSITAIRE</h3>
                        <p>
                            Une API pour la gestion d'une bibliothèque universitaire, incluant les fonctionnalités de gestion des utilisateurs, des livres, des catégories, des emprunts et des retours.
                        </p>
                        {/* Utilisation de Link pour transformer le bouton en un lien */}
                        <Link to="/superadmin/login" className="btn-primary py-3 text-uppercase font-12 shadow-none border-0">
                            Cliquer pour continuer  
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
