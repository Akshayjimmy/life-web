import react from 'react'
import '../Home.css'
import { HomeData } from '../mockData';
import { ProductTile } from './ProductTile';

export function Products(props) {
    return (
        <div className='productsContainer'>
            <div className='productsContainerHeader'>
                <h2 className='productsHeaderTitle'>{props.title}</h2>
                <div className='allProductButton'>
                    <p className='allProductButtonText'>BROWSE ALL PRODUCTS</p>
                </div>
            </div>
            <div className='productsInnerContainer'>
                {props.data && props.data.slice(0, 5).map((item, index) => {
                    return (
                        <ProductTile product={item} />
                    )
                })}
            </div>
        </div>

    );
}