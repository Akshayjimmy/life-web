import react from 'react'
import '../Home.css'

import { StyleSheet, css } from 'aphrodite';

export function Rating(props) {
    return (
        <div className={css(Styles.container)}>
            <div className={css(Styles.ratingContainer)}>
                <p className={css(Styles.title)}>Our Rating</p>
                <div className={css(Styles.ratingImage)}>
                    <img src={require('../Assets/Images/our-rating.png')}
                        className={css(Styles.img)}
                        width={132} height={24} alt='rating image' />
                </div>
                <p className={css(Styles.review)}>Based on 2303 reviews</p>
            </div>
            {props.item && props.item.map((item, index) => {
                return (
                    <div className={css(Styles.ratingContainer)}>
                        <div className={css(Styles.ratingImage)}>
                            <img src={item.image}
                                className={css(Styles.img)}
                                width={132} height={24} alt='rating image' />
                        </div>
                        <p className={css(Styles.title)}>{item.title}</p>
                        <p className={css(Styles.review)}>{item.review}</p>
                        <p className={css(Styles.userAndDate)}>{item.user} {item.date}</p>
                    </div>
                )
            })}
        </div>

    );
}

const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        width: '100%',
        height: 243,
        flexDirection: 'row',
        gap: 20
    },
    ratingContainer: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left'
    },
    ratingImage: {
        width: 132,
        height: 24,
        marginBottom: 10
    },
    img: {
        width: '100%',
        height: '100%'
    },
    title: {
        color: '#26328C',
        fontSize: 20,
        fontWeight: 700,
        margin:0,
        marginBottom:10
    },
    review: {
        color: '#26328C',
        fontSize: 16,
        fontWeight: 500,
        margin:0,
        marginBottom:10
    },
    userAndDate: {
        color: '#26328C',
        fontSize: 14,
        fontWeight: 400,
        margin:0,
    },


})
