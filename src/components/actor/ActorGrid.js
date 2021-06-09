import React from 'react'
import ActorCard from './ActorCard'
import notfound from '../images/not-found.png'
import { FlexGrid } from '../styled'

const ActorGrid = ({data}) => {
  return (
    <FlexGrid>
      {data.map(({person}) => (
      <ActorCard key={person.id} 
      name={person.name} 
      image= {person.image ? person.image.medium : notfound}
      country={person.country ? person.country.name : null}
      birthday={person.birthday}
      gender={person.gender}
      />))}
      </FlexGrid>
  )
}

export default ActorGrid
