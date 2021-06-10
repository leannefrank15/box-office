import React, {useState} from 'react'
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid';
import {api_funct} from '../misc/config'
import { useLastQuery } from '../misc/custom-hooks';

const Home = () => {

  const [input_state, setInput] = useLastQuery(); //creating state object
  const [results, setResult] = useState(null); //creating state object for storing array of search results
  const [searchOption, setSearchOption] = useState('shows'); //creating state to store radio button result

  const isShowsChecked=searchOption;
  let checkedopt;

  if(isShowsChecked==='shows'){
    checkedopt=true;
  }
  else{
    checkedopt=false;
  }

  const onEventChange = (event_obj) => {
    setInput(event_obj.target.value); //updating the state
  }

  const onSearch = () => {

    api_funct(`/search/${searchOption}?q=${input_state}`).then(result => {
      setResult(result);
    })
  }

  const onKeyDown = (event_obj) => {   //to make sure we can search by pressing enter key
    if (event_obj.keyCode === 13){
       onSearch();
    }
  }
  const onRadioChange =(event_obj) => {
    setSearchOption(event_obj.target.value);

  }
  console.log(searchOption);

  console.log(results);

  const displayResult = () => {
    if (results && results.length === 0) {
      return "no results found";
    }
    if (results && results.length >0){

      return results[0].show ? (<ShowGrid data={results}/>) : (<ActorGrid data={results}/>)

    }

    return null;  // if neither of the conditions suffice , it'll return nothing
  }
  return (
  
    <MainPageLayout>
     <input type='text' onChange={onEventChange} value={input_state} onKeyDown={onKeyDown} placeholder="search for something" /> 
     <button type='button' onClick={onSearch}>Search</button>
     <div>
       <label htmlFor="shows-search">shows</label>
       <input id="shows-search" type="radio" value="shows" onChange={onRadioChange} checked={checkedopt}/>

       <label htmlFor="actors-search">actors</label>
       <input id="actors-search" type="radio" value="people" onChange={onRadioChange} checked={!checkedopt}/>
     </div>
     <div><h4>{displayResult()}</h4></div>
    </MainPageLayout>
    
  )
}

export default Home
