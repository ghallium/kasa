import React from 'react';
import '../../Pages/Error/Error.css';
import Header from '../../components/Header/header';

function Error() {
  return <div>
          <Header />

          <h1 className="error_title">404</h1>
          <p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
          <a className="error_back" href="#">Retourner sur la page d'accueil</a>
          </div>;
          
}

export default Error;