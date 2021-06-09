import React from 'react'
import notfound from '../images/not-found.png'
import { FlexGrid } from '../styles'
import ShowCard from './ShowCard'


const ShowGrid = ({data}) => {
  return(
    <FlexGrid>
      {data.map(({show}) => (
      <ShowCard 
      key={show.id} 
      id={show.id}
      name={show.name} 
      image= {show.image ? show.image.medium : notfound} 
      summary={show.summary}/>
      ))}
</FlexGrid>
  )
}

export default ShowGrid
