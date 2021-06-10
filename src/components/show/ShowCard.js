import React from 'react'
import {Link} from 'react-router-dom'
import { StyledShowCard } from './ShowCard.styled';
import {Star} from '../styles'

const ShowCard = ({ id, image, name, summary, onStarClick, isStarred }) => {
  
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0,15).join(' ').replace(/<.+?>/g, "")}...`
    : 'No description';

  return (
    <StyledShowCard>
      <div className='img-wrapper'>
        <img src={image} alt="show"/>
      </div>

      <h1>{name}</h1>

      <p style={{fontWeight: 'normal'}}>{summaryAsText}</p><br/>

      <div className='btns'>
        <Link style={{textDecoration: 'none', marginRight: '25px'}} to={`/show/${id}`}>Read more</Link>
        <button style={{marginLeft: '45px'}}type="button" onClick={onStarClick}>
          <Star active={isStarred}/>
        </button>
      </div>
    </StyledShowCard>
  )
}

export default ShowCard
