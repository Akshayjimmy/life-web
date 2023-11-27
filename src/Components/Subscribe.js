import react from 'react'
import '../Home.css'

import { StyleSheet, css } from 'aphrodite';

export function Subscribe(props) {
    return (
        <div className={css(Styles.container)}>
            <div className={css(Styles.contentContainer)}>
                <p className={css(Styles.title)}>Grab an extra 5% discount</p>
                <p className={css(Styles.descr)}>Subscribe to monthly newsletter. Get the latest product updates and special offers delivered right to your inbox.</p>
            </div>
            <div className={css(Styles.inputContainer)}>
                <input type='text' placeholder='Enter your email' className={css(Styles.inputBox)} />
                {/* we can make button as a common component becoz its using in main place in the site  */}
                <div className={css(Styles.button)}>
                    <p className={css(Styles.buttonText)}>Subscribe</p>
                </div>
            </div>
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
        backgroundImage: 'linear-gradient(to right, #C0378C 10% , #26328C)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: 449,
        textAlign: 'left',
    },
    title: {
        fontSize: 24,
        fontWeight: 700,
        color: '#ffffff',
        margin: 0,
        marginBottom: 20
    },
    descr: {
        fontSize: 16,
        fontWeight: 500,
        color: '#ffffff',
        margin: 0
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    inputBox: {
        height: 39,
        width: 300,
        marginRight:20
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 44,
        backgroundColor: '#C0378C'
    },
    buttonText: {
        textTransform: 'uppercase',
        color: '#ffffff',
        fontSize: 24,
        fontWeight: '600px',
        margin: 0,
    }

})
