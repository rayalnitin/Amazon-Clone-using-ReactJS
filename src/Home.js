import React from 'react';
import Header from './Header';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
         <div className='home__container'>
             <img 
             className='home__image'
             src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'/>
             <div className='home__row'>
                  <Product
                  id="12321341"
                  title="A Touch of Eternity by Durjoy Datta: Book on Love by Durjoy Datta | Fictional Book for Young Adults"
                  price={199}
                  image="https://images-na.ssl-images-amazon.com/images/I/51ben7xI6ZL._SY344_BO1,204,203,200_.jpg"
                  rating={4} />     
                  <Product
                   id="49538094"
                   title="HealthSense Weight Machine for Body Weight, Digital Weighing Scale & Weighing Machines with Strong ABS Build Body, Large LCD Display with Backlight, Skid Proof, Ultra-Lite PS 126 (Grey)"
                   price={1499}
                   image="https://m.media-amazon.com/images/I/61+T+tuO3-L._SX522_.jpg"
                   rating={3}
                  />
             </div>
             <div className='home__row'>
                  <Product
                   id="4903850"
                   title="AOC E970SWHEN 18.5 inch HD LED Backlit Computer Monitor "
                   price={8230}
                   image="https://m.media-amazon.com/images/I/71OzJQcGZpL._SX450_.jpg"
                   rating={4}
                  />
                  <Product
                   id="23445930"
                   title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black) "
                   price={3499}
                   image="https://m.media-amazon.com/images/I/61WUqJd4dfS._SX679_.jpg"
                   rating={3}
                   />
                  <Product
                   id="3254354345"
                   title="Redmi 9A Sport (Coral Green) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery"
                   price={6999}
                   image="https://m.media-amazon.com/images/I/810KHyQ4WcL._SX425_.jpg"
                   rating={4}
                   />
             </div>
             <div className='home__row'>
                  <Product
                   id="98029332"
                   title="Samsung 27-Inch 240Hz, WQHD Curve Gaming Monitor with 1000R Curvature, 1ms Response time, QLED,HDR600, Low Input lag, G-Sync Compatible, HAS, (LC27G75TQSWXXL, Black) "
                   price={44997}
                   image="https://m.media-amazon.com/images/I/81aWxlUqU4L._SX522_.jpg"
                   rating={4}
                   />
             </div>
         </div>
    </div>
  )
}

export default Home;