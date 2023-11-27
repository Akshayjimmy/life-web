import react from 'react'
import '../Home.css'

export function ProductTile(props) {
    console.log('prop:',props)
    return (
        <div key={props.product.id} className='productTile'>
            <div className='productImage'>
                {props.product.tag &&
                    <div className='productTag'>
                        <p className='productTagText'>Sale</p>
                    </div>
                }
                <img src={props.product.image}
                    className='tileImage'
                    alt='Hightlights Image' />
            </div>
            <p className='productTitle'>{props.product.title}</p>
            <p className='productDescr'>{props.product.description}</p>
            <p className='productPrize'>{props.product.price}</p>
        </div>

    );
}