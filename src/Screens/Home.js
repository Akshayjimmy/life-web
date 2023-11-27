import react, { useEffect, useState } from 'react'
import { Banner } from './Banner';
import { HomeData } from '../mockData'
import '../Home.css'
import { HighlightTile } from '../Components/HighlightTile';
import { Products } from '../Components/Products';
import { OfferTile } from '../Components/OfferTile';
import { StyleSheet } from 'aphrodite';
import { Subscribe } from '../Components/Subscribe';
import { Rating } from '../Components/Rating';

export function Home() {

const [product , setProduct] = useState()

const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json()
    //   console.log(data);
      setProduct(data)
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(()=> {
        fetchData()
    },[])

    return (
        <div>
        {console.log('product',product)}
            <Banner />
            <div className='innerContainer'>
                <div className='highlightsTileContainer'>
                    {HomeData.Highlights.map((item, index) => {
                        return (
                            <HighlightTile data={item} />
                        )
                    })}
                </div>
                <div className='divider'></div>
                <Products title='New Products!' data={product}/>
                <OfferTile item={HomeData.offerOne} />
                <Products title='Category Higlights' data={product}/>
                {/* second Offer section */}
                <div className='offerSecondContainer'>
                    {HomeData.offerSecond.map((item, index) => {
                        return(
                        <OfferTile item={item} spaceStyle={Styles.offerTileStyle}/>
                        )
                    })}
                </div>
            </div>
            <Subscribe/>
            <div className='innerContainer'>
                <Rating item={HomeData.rating}/>
                <div className='divider'></div>
            </div>
        </div>
    );
}

const Styles = StyleSheet.create({
    offerTileStyle: {
        marginRight: '20px'
    }
})