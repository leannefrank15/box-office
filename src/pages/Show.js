import React from 'react'
import {useParams} from 'react-router-dom' //useparams is a hook
import Cast from '../components/show/Cast';
import Details from '../components/show/Details';
import Seasons from '../components/show/Seasons';
import ShowMainData from '../components/show/ShowMainData';
import { InfoBlock, ShowPageWrapper } from './Show.Styled';
import {useShow} from '../misc/custom-hooks'




const Show = () => {

  const {id} = useParams();
  const {show, isLoading, error} = useShow(id)

  if(isLoading){
    return <div>data is being loaded...</div>
  }
  if(error){
    return <div>oops! error occourred </div>
  }
  return (
  
    <ShowPageWrapper>
      <ShowMainData image={show.image} name={show.name} rating={show.rating} summary={show.summary} tags={show.genres ? show.genres : null}/>

      <InfoBlock>
        <h2><u>Details:</u></h2>
        <Details status={show.status} network={show.network} premiered={show.premiered}/>
      </InfoBlock>

      <InfoBlock>
        <h2><u>Seasons:</u></h2>
        <Seasons seasons={show._embedded.seasons}/>
      </InfoBlock>

      <InfoBlock>
        <h2><u>Cast:</u></h2>
        <Cast cast={show._embedded.cast}/>
      </InfoBlock>

    </ShowPageWrapper>
    
  )
}

export default Show
