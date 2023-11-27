import react from 'react'
import '../Home.css'

import { StyleSheet, css } from 'aphrodite';

export function OfferTile(props) {
    return (
        <div key={props.item.id} className={css(Styles.offerTile ,props.spaceStyle)}>
            <div className={css(Styles.overLay)}></div>
            <div className={css(Styles.offerImage)}>
                <img src={props.item.image}
                    className={css(Styles.offerTileImage)}
                    alt='OfferOne Image' />

            </div>
            <div className={css(Styles.offerContentConatiner)}>
                <div className={css(Styles.offerContent)}>
                    <p className='offerTitle'>{props.item.title}</p>
                    <p className='descrText'>Upto</p>
                    <p className='offerDiscountText'>{props.item.discountValue}</p>
                    <p className='descrText'>{props.item.descr}</p>
                </div>

                {props.item.logo &&
                    <div className={css(Styles.offerLogo)}>
                        <img src={props.item.logo}
                            className='tileImage'
                            alt='OfferOne Image' />
                    </div>}
            </div>
        </div>

    );
}

const Styles = StyleSheet.create({
    offerTile: {
        display: 'flex',
        flexDirection: 'row',
        height: '320px',
        width: '1040px',
        marginTop: '50px',
        marginBottom: '50px',
        position: 'relative'
    },
    offerImage: {
        height: '320px',
        width: '100%',
        position: 'relative'
    },
    offerTileImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    offerContentConatiner: {
        display: 'flex',
        flex: 1,
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        zIndex: 99999
    },
    offerContent: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        padding: '20px 50px 0px 50px',
        textAlign: 'left'
        /* z-index: 9999px; */
    },
    offerLogo: {
        display: 'flex',
        alignItems: 'center',
        width: '119px',
        height: '209px',
        padding: 50
    },
    overLay: {
        display: 'flex',
    position: 'absolute',
    // backgroundColor: '#00000080',
    backgroundImage: 'linear-gradient(to right, #00000080 50% , #00000000)',
    zIndex: 998,
    height: '100%',
    width: '100%',
    //opacity: '50%',
    }

})



// .offerLogo {
//     width: 119px;
//     height: 209px;
// }

// .offerTitle {
//     font-size: 48px;
//     color: #FF64C4;
//     font-weight: 700px;
//     margin: 5px;
// }

// .descrText {
//     font-size: 24px;
//     font-weight: 600px;
//     color: #ffffff;
//     margin: 5px;
// }

// .offerDiscountText {
//     font-size: 96px;
//     color: #FF64C4;
//     font-weight: 700px;
//     margin: 5px;
// }