import './App.css';
import React from "react";
import Slider from "react-slick";
import "./Projetos.css"; // Para o CSS personalizado

import Conteudo from './Conteudo';
import Home from './Home';
import Projetos from './Projetos';

// Em App.js ou index.js
import "slick-carousel/slick/slick.css";        // Estilo básico do carrossel
import "slick-carousel/slick/slick-theme.css";  // Estilo do tema do carrossel


function App() {
  return (
    <div className="App">
        {/* CABEÇALHO */}
        <Home /> {/* TROCAR POR HOME */}
        <Conteudo /> {/* TROCAR POR SERVIÇOS */}
        {/* SECTION FRASE E IMAGEM DE COMPROMETIMENTO */}
        <Projetos />
        {/* COMENTARIOS */}
        {/* RODAPE */}
    </div>
  );
}

export default App;
