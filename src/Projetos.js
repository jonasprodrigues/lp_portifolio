
import React from "react";
import Slider from "react-slick";
import "./Projetos.css"; // Para o CSS personalizado

const Projetos = () => {
    const portfolioItems = [
        { id: 1, title: "Projeto 1", image: "/p1.jpg" },
        { id: 2, title: "Projeto 2", image: "/p2.jpg" },
        { id: 3, title: "Projeto 3", image: "/p3.png" },
        { id: 4, title: "Projeto 4", image: "/p4.png" },
        { id: 5, title: "Projeto 5", image: "/p5.jpg" },
    ];

    const settings = {
        dots: true,  // Mostra os pontos de navegação
        infinite: true,  // Loop infinito dos slides
        speed: 500,  // Velocidade de transição
        slidesToShow: 3,  // Quantos slides exibir ao mesmo tempo
        slidesToScroll: 1,  // Quantos slides rolar por vez
        autoplay: true,  // Rolar automaticamente
        autoplaySpeed: 2000,  // Tempo entre cada slide
        pauseOnHover: true,  // Pausar quando passar o mouse
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
          <div className="carousel-container">
              <Slider {...settings}>  {/* Uso do Slider aqui */}
                  {portfolioItems.map((item) => (
                      <div key={item.id} className="card">
                          <img src={item.image} alt={item.title} className="card-image" />
                          <h3 className="card-title">{item.title}</h3>
                      </div>
                  ))}
              </Slider>
          </div>
      );

};



export default Projetos;