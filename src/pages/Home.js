import React, {useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {

  const [input_state, setInput] = useState(''); //creating state object

  const onEventChange = (event_obj) => {
    setInput(event_obj.target.value); //updating the state
  }

  const onSearch = () => {
    fetch(`http://api.tvmaze.com/search/shows?q=${input_state}`).then(r => r.json()).then(result => {
      console.log(result);
    })
  }

  const onKeyDown = (event_obj) => {   //to make sure we can search by pressing enter key
    if (event_obj.keyCode === 13){
       onSearch();
    }
  }
  return (
    <MainPageLayout>
     <input type='text' onChange={onEventChange} value={input_state} onKeyDown={onKeyDown} /> 
     <button type='button' onClick={onSearch}>Search</button>
    </MainPageLayout>
  )
}

export default Home
