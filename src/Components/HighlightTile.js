import react from 'react'
import '../Home.css'

export function HighlightTile(props) {
    return (
        <div key={props.data.id} className='highlightsTile'>
            <div className='overlay'></div>
            <div className='highlightImages'>
                <img src={props.data.image}
                    className='tileImage'
                    alt='Hightlights Image' />
            </div>
            <p className='highlightsTileTitle'>{props.data.title}</p>
        </div>

    );
}