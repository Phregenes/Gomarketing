import React from 'react';
import './styles.css';

import logo from '../../assents/img/logo.png';

const Home = () => 

<body>
  <div className="pimg1">
    <div className="ptext">
      <img src={logo}/>
    </div>
  </div>

  <section className="section section-1">
    <h2 className="purple">VIVA!</h2>
    <p>
      Sua agência de marketing 360º
    </p>
  </section>

  <div className="pimg2">
    <div className="ptext">
      <span className="border trans">
        Seguimento loja comum
      </span>
    </div>
  </div>

  <section className="section section-2">
    <h2>Conteudo</h2>
    <p>
      ALGUMA COISA ALGUMA COISA ALGUMA COISA ALGUMA COISA ALGUMA COISA ALGUMA COISA ALGUMA COISA ALGUMA COISA ALGUMA COISA
    </p>
  </section>

  <div className="pimg3">
    <div className="ptext">
      <span className="border trans">
        Seguimento loja carro
      </span>
    </div>
  </div>

  <section className="section section-3">
    <h2>Conteudo</h2>
    <p>
      ALGUMA COISA ALGUMA COISA ALGUMA COISA ALGUMA COISA ALGUMA COISA ALGUMA COISA ALGUMA COISA ALGUMA COISA ALGUMA COISA
    </p>
  </section>

  <div className="pimg1">
    <div className="ptext">
      <span className="border">
        Social Media
      </span>
    </div>
  </div>
</body>

export default Home;