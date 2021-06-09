import React from 'react'
import notfound from '../images/not-found.png'
import ShowCard from './ShowCard'

const ShowGrid = ({data}) => {
  return(
    
      data.map(({show}) => <ShowCard key={show.id} name={show.name} image= {show.image ? show.image.medium : notfound} summary={show.summary}/>)
    
);
};

export default ShowGrid
