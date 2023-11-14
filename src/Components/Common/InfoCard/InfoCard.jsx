import React from 'react';
import './InfoCard.scss'

const InfoCard = (props) => {
    const {id, title, body, number, user, created_at, isDetailCard = false} = props
    return (
        <div key={id} className="content-card-container">
            <div className="card-header">{title || body || ''}</div>
            {isDetailCard ? <div className='details-body'>{body}</div>  : null}
            <div className="card-info">
                <div>{`#${number} by ${user?.login} on ${created_at}`}</div>
            </div>
        </div>
    )
}

export default InfoCard