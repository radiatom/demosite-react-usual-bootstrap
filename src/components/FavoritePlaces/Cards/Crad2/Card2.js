import React from 'react';
import img from './../../../../img/kartinka-6.jpg'
import s from './Card2.module.css'



const Card2 = (props) => {
      return (
            <div className="col">
                  <div className={`card ${s.card}`}>
                        <img src={img} className="card-img-top" alt="Auto service"/>
                              <div className="card-body">
                                    <h5 className="card-title">Auto service</h5>
                                    <p className="card-text">Like the entire French auto industry, it often breaks down.</p>
                                    <a href="https://volyn-avto.ukravto.ua/autoservice-volyn-avto" 
                                          className="btn btn-primary">Site</a>
                                    <a href="https://www.google.com/search?q=%D0%B2%D0%BE%D0%BB%D0%B8%D0%BD%D1%8C+%D0%B0%D0%B2%D1%82%D0%BE&sxsrf=ALiCzsbLGVv8VlIomVEBGQNfXIgwKD_f7Q:1671548836659&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjqzojVvIj8AhUvmIsKHVWICWYQ_AUoAXoECAEQAw&biw=1366&bih=657&dpr=1"
                                          className="btn btn-warning">Fotos</a>
                              </div>
                  </div>
            </div>
      );
}

export default Card2;
