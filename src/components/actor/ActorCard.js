import React from 'react'
import { StyledActorCard } from './ActorCard_styled';

const ActorCard = ({ image, name, gender, country, birthday }) => {
  return (
    <StyledActorCard>
      <div>
        <img src={image} alt="actor" className='img-wrapper'/>
      </div>
      <h1>
        {name}
      </h1>
      <p style={{fontWeight: 'normal'}}>{gender ? `${gender}` : null}<br/><br/>
      {country ? `Comes from ${country}` : 'No country known'}<br/><br/>
      {birthday ? `Born on : ${birthday}` : 'date of birth not known'}</p>
      
      
    </StyledActorCard>
  );
};

export default ActorCard
