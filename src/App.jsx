// App.jsx (modificado)
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Destino from './Destino';
import FormDestino from './FormDestino';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('Home');

  const renderPagina = () => {
	switch (paginaAtual) {
	  case 'Home':
		return <Home />;
	  case 'Destinos':
		return <Destinos />;
	  case 'Contato':
		return <Contato />;
	  default:
		return <Home />;
	}
  };


  return (
    <div className="App">
      <Header />
      
      <Footer />
    </div>
  );
}

export default App;