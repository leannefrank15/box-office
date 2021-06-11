import React from 'react'
import Navs from './Navs'
import Title from './Title'

const MainPageLayout = ({children}) => {
  return (
    <div>
      
      <Title
      title="Movie Search"
      subtitle="Lookin for a movie or an actor?"
       />

      <Navs />

      {children}
    </div>
  )
}

export default MainPageLayout
