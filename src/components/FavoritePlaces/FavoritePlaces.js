import React from 'react';
import Card1 from './Cards/Card1/Card1';
import Card3 from './Cards/Card3/Card3';
import Card2 from './Cards/Crad2/Card2';

const FavoritePlaces = () => {
      return (
            <div className="container my-5">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                        <Card1/>
                        <Card3/>
                        <Card2/>
                  </div>
            </div>
      );
}

export default FavoritePlaces;
