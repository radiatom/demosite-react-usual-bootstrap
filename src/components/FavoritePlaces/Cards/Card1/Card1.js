import React from 'react';
import img from './../../../../img/1645837417_5-kartinkin-net-p-kartinki-chernoe-more-6.jpg'
import s from './Card1.module.css'

const Card1 = (props) => {
      return (
            <div className="col">
                  <div className={`card ${s.card}`} >
                        <img src={img} className="card-img-top" alt="Black sea"/>
                        <div className="card-body">
                                    <h5 className="card-title">Black sea</h5>
                                    <p className="card-text">The Black Sea is a marginal mediterranean sea of the Atlantic
                                          Ocean lying between Europe and Asia, east of the Balkans, south of the East
                                          European Plain, west of the Caucasus, and north of Anatolia. It is bounded by
                                          Bulgaria, Georgia, Romania, Russia, Turkey, and Ukraine.</p>
                                    <a href="https://en.wikipedia.org/wiki/Black_Sea" 
                                          className="btn btn-primary">Wiki</a>
                                    <a href="https://www.google.com/search?q=Black+sea&sxsrf=ALiCzsb49rkgsMxgi59ZD52c1jDrvZ1PVg:1671548760376&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj70tiwvIj8AhWMuosKHZpzBK4Q_AUoAnoECAEQBA&biw=1366&bih=657&dpr=1"
                                           className="btn btn-warning">Fotos</a>

                        </div>
                  </div>
            </div>
      );
}

export default Card1;
