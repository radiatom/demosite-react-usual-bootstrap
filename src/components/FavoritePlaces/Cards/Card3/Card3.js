import React from 'react';
import img from './../../../../img/karp-14215.jpg'
import s from './Card3.module.css'




const Card3 = (props) => {
      return (
            <div className="col">
                  <div className={`card ${s.card}`}>
                        <img src={img} className="card-img-top" alt="Carpathian Mountains"/>
                              <div className="card-body">
                                    <h5 className="card-title">Carpathian Mountains</h5>
                                    <p className="card-text">Carpathians are a range of mountains forming an arc across
                                          Central Europe. Roughly 1,500 km (930 mi) long, it is the third-longest
                                          European mountain range after the Urals at 2,500 km (1,600 mi) and the
                                          Scandinavian Mountains at 1,700 km (1,100 mi).</p>
                                    <a href="https://en.wikipedia.org/wiki/Carpathian_Mountains" 
                                          className="btn btn-primary">Wiki</a>
                                    <a href="https://www.google.com/search?q=Carpathian+Mountains&sxsrf=ALiCzsYtAZsytKjpU8sHKIEGzmRKeLy0IQ:1671548802697&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjD4e_EvIj8AhVwlYsKHYv4Ci0Q_AUoAXoECAEQAw&biw=1366&bih=657&dpr=1"
                                           className="btn btn-warning">Fotos</a>
                              </div>
                  </div>
            </div>
      );
}

export default Card3;
