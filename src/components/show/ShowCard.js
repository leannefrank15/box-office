import React from 'react'
import {Link} from 'react-router-dom'
import { StyledShowCard } from './ShowCard_styled';

const ShowCard = ({ id, image, name, summary }) => {
  
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g, "")}...`
    : 'No description';

  return (
    <StyledShowCard>
      <div>
        <img src={image} alt="show" className='img-wrapper'/>
      </div>

      <h1>{name}</h1>

      <p style={{fontWeight: 'normal'}}>{summaryAsText}</p><br/>

      <div className='btns'>
        <Link style={{textDecoration: 'none', marginRight: '25px'}} to={`/show/${id}`}>Read more</Link>
        <button style={{marginLeft: '40px'}}type="button">Star Me</button>
      </div>
    </StyledShowCard>
  )
}

export default ShowCard
