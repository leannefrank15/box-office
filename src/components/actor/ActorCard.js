import React from 'react'

const ActorCard = ({ image, name, gender, country, birthday }) => {
  return (
    <div>
      <div>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name}
      </h1>
      <p style={{fontWeight: 'normal', fontSize: '15px'}}>{gender ? `${gender}` : null}<br/><br/>
      {country ? `Comes from ${country}` : 'No country known'}<br/><br/>
      {birthday ? `Born on : ${birthday}` : 'date of birth not known'}</p>
      
      
    </div>
  );
};

export default ActorCard
