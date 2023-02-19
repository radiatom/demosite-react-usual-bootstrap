import React from 'react';
// import Card from 'react-bootstrap/Card';
// import s from "./Home.module.css"
import img from "./../../img/foto-c4-grand-picasso_01.jpg"

const Home = (props) => {
      return (
            <div className="container text-center ">
                  <div className="row my-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                              <img src={img} alt="citroen c4 garnd picasso 1" />
                              <h1 className="fw-light">Citroen c4 garnd picasso 1</h1>
                              <p className="lead text-muted">The car was first presented at the Paris Motor Show in September 2006
                                    as a seven-seater, and
                                    in January
                                    2007 as a five-seater. </p>
                              <a href="https://uk.wikipedia.org/wiki/Citro%C3%ABn_C4_Picasso" >
                                    <button type="button" className="btn btn-warning">Wiki</button>
                              </a>
                        </div>
                  </div>
            </div>
      );
}

export default Home;
