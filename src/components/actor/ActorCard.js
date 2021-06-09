import React from 'react'
import { StyledActorCard } from './ActorCard.style';


const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
  return (
    <StyledActorCard>
      <div className='img-wrapper'>
        <img src={image} alt="actor"/>
      </div>
      <h1>
        {name}
      </h1>
      <p style={{fontWeight: 'normal'}}>{gender ? `${gender}` : null}<br/><br/>
      {country ? `Comes from ${country}` : 'No country known'}<br/><br/>
      {birthday ? `Born on : ${birthday}` : 'date of birth not known'}</p>
      <p className='deathday'>
        {deathday ? `Died on : ${deathday}` : null}
      </p>
      
    </StyledActorCard>
  )
}

export default ActorCard
