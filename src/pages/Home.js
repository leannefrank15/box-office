import React, {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {api_funct} from '../misc/config'

const Home = () => {

  const [input_state, setInput] = useState(''); //creating state object
  const [results, setResult] = useState(null); //creating state object for storing array of search results

  const onEventChange = (event_obj) => {
    setInput(event_obj.target.value); //updating the state
  }

  const onSearch = () => {

    api_funct(`/search/shows?q=${input_state}`).then(result => {
      setResult(result);
    })
  }

  const onKeyDown = (event_obj) => {   //to make sure we can search by pressing enter key
    if (event_obj.keyCode === 13){
       onSearch();
    }
  }

  const displayResult = () => {
    if (results && results.length === 0) {
      return "no results found";
    }
    if (results && results.length >0){

      return results.map((item) => <div key={item.show.id}>{item.show.name}</div>) 

    }

    return null;  // if neither of the conditions suffice , it'll return nothing
  }
  return (
    <MainPageLayout>
     <input type='text' onChange={onEventChange} value={input_state} onKeyDown={onKeyDown} /> 
     <button type='button' onClick={onSearch}>Search</button>
     <div><h4>{displayResult()}</h4></div>
    </MainPageLayout>
  )
}

export default Home
