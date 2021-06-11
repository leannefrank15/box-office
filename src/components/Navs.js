import React, {memo} from 'react'
import {NavList, LinkStyled } from './show/Navs.styled'
import {useLocation} from 'react-router-dom'



  const links = [
    { to: "/", text: "Home"},
    { to: "/starred", text: "Starred"}
  ];

  const Navs = () => {

    const location = useLocation()


  return (

    <div>
      <NavList>
        {links.map(item => <li key={item.to}><LinkStyled to={item.to} className={item.to === location.pathname ? 'active' : ''}>{item.text}</LinkStyled></li>)}
      </NavList>
    </div>
  )
}

export default memo(Navs)
