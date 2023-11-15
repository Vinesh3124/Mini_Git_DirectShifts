import React from 'react';
import { FormatTimeDateFn } from '../../../store/Constant/dashboardConstant';
import './InfoCard.scss'

const InfoCard = (props) => {
    const {id, title, body, number, user, created_at, isDetailCard = false, handleClicked = () => {}} = props

    return (
        <div key={id} className="content-card-container" onClick={() => handleClicked(props)}>
            <div className="card-header">{title || body || ''}</div>
            {isDetailCard ? <div className='details-body'>{body}</div>  : null}
            <div className="card-info">
                <div>{`#${number} by ${user?.login} on ${FormatTimeDateFn(created_at || '')}`}</div>
            </div>
        </div>
    )
}

export default InfoCard