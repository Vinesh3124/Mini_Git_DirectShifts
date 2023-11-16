import React from 'react';
import { FormatTimeDateFn } from '../../../store/Constant/dashboardConstant';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './InfoCard.scss'

const InfoCard = (props) => {
    const {id, title, body, number, user, created_at, isDetailCard = false, handleClicked = () => {}, showExtIcon = false} = props

    return (
        <div key={id} className="content-card-container" onClick={() => handleClicked(props)}>
            <div className='card-header-container'>
                <div className="card-header">{title || body || ''}</div>
                {showExtIcon ? <div className='external-link-icon'>
                    <OpenInNewIcon style={{}} />
                </div> :  null}
            </div>
            {isDetailCard ? <div className='details-body'>{body}</div>  : null}
            <div className="card-info">
                <div>{`#${number} by ${user?.login} on ${FormatTimeDateFn(created_at || '')}`}</div>
            </div>
        </div>
    )
}

export default InfoCard