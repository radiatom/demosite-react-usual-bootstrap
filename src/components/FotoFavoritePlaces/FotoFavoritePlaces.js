import React from 'react';
import s from './FotoFavoritePlaces.module.css'
import img1 from './../../img/fotoFavoritePlaces/1.jpeg'
import img2 from './../../img/fotoFavoritePlaces/2.jpg'
import img3 from './../../img/fotoFavoritePlaces/3.jpg'
import img4 from './../../img/fotoFavoritePlaces/4.jpg'
import img5 from './../../img/fotoFavoritePlaces/5.jpg'
import img6 from './../../img/fotoFavoritePlaces/6.jpeg'
import img7 from './../../img/fotoFavoritePlaces/7.jpg'
import img8 from './../../img/fotoFavoritePlaces/8.jpg'
import img9 from './../../img/fotoFavoritePlaces/9.jpg'



const FotoFavoritePlaces = (props) => {
      return (

            <div className={s.fotoFavoritePlaces}>

                  <div id="carouselExampleAutoplaying" class="carousel slide " data-bs-ride="carousel">
                        <div class="carousel-inner ">
                              <div class="carousel-item active">
                                    <img src={img1} class="d-block w-100" alt="..." />
                              </div>
                              <div class="carousel-item">
                                    <img src={img2} class="d-block w-100" alt="..." />
                              </div>
                              <div class="carousel-item">
                                    <img src={img3} class="d-block w-100" alt="..." />
                              </div>
                              <div class="carousel-item">
                                    <img src={img4} class="d-block w-100" alt="..." />
                              </div>
                              <div class="carousel-item">
                                    <img src={img5} class="d-block w-100" alt="..." />
                              </div>
                              <div class="carousel-item">
                                    <img src={img6} class="d-block w-100" alt="..." />
                              </div>
                              <div class="carousel-item">
                                    <img src={img7} class="d-block w-100" alt="..." />
                              </div>
                              <div class="carousel-item">
                                    <img src={img8} class="d-block w-100" alt="..." />
                              </div>
                              <div class="carousel-item">
                                    <img src={img9} class="d-block w-100" alt="..." />
                              </div>
                              {/* в окремий компонент не винести бо треба щоб тут був class="carousel-item active", 
                        тому скоротити можн абуде 1 строчку замість одної строчки, тому це не логічно */}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                        </button>
                  </div>
            </div>
      );
}

export default FotoFavoritePlaces;
