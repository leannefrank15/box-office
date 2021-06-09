import React from 'react'
import {Link} from 'react-router-dom'

const ShowCard = ({ id, image, name, summary }) => {
  
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g, "")}...`
    : 'No description';

  return (
    <div>
      <div>
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p style={{fontWeight: 'normal'}}>{summaryAsText}</p>

      <div style={{marginBottom: '10px'}}>
        <Link style={{textDecoration: 'none'}} to={`/show/${id}`}>Read more</Link>
        <button style={{marginLeft: '10px', backgroundColor: 'lightgrey', fontWeight: 'bold'}} type="button">Star Me</button>
      </div>
    </div>
  );
};

export default ShowCard
