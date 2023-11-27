import react from 'react'
import { StyleSheet, css } from 'aphrodite';

export function Header(props) {
    return (
        <div className={css(Styles.container)}>
            
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


})
