
import './App.css';
import React, { useState  } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { FaCopy } from 'react-icons/fa';


function App() {
  return (
    <div style={{backgroundColor: 'darkgrey'}} className="App">
      <Header/>
      
      <div className='App-margin-container'></div>
        
      <Sentence/>
       
      <div className='App-margin-container'></div>
       
      <Footer/>
    </div>
  );
}

export default App;


function Sentence() {

  //set a random Index for each word when page is loaded for the first time

  const [verbIndex, setVerbIndex] = useState(chooseRandomNumber(4));
  const [prepIndex, setprepIndex] = useState(chooseRandomNumber(4));
  const [adjectiveIndex, setAdjectiveIndex] = useState(chooseRandomNumber(4));
  const [nounIndex, setNounIndex] = useState(chooseRandomNumber(3));

  //list of possible verbs

  const firstVerb =[
    'Destroy',
    'Modulate',
    'Reverse',
    'Recalculate',
    'Activate'
  ];
  
  //list of possible prepositions

  const firstPreposition = [
    'the',
    'on',
    'below',
    'above',
    'after'

  ];
  
  //list of possible adjectives
  
  const firstAdjective = [
    'negative',
    'positive',
    'laser',
    'outer',
    'inner'
  ];
  
  //list of possible nouns

  const firstNoun = [
    'engine',
    'factor',
    'ship',
    'device'
  ];
  
   
  let verb = firstVerb[verbIndex];
  let preposition = firstPreposition[prepIndex];
  let adjective = firstAdjective[adjectiveIndex];
  let noun = firstNoun[nounIndex];
  
  
  function chooseRandomNumber(max_value){
    return Math.floor(Math.random()*max_value);
  }
 

  function resetSentence(){
    setVerbIndex(0);
    setprepIndex(0);
    setAdjectiveIndex(0);
    setNounIndex(0);
  }



  function generateNewSentence(){
    setVerbIndex(chooseRandomNumber(4));
    setprepIndex(chooseRandomNumber(4));
    setAdjectiveIndex(chooseRandomNumber(4));
    setNounIndex(chooseRandomNumber(3));
  }


  function copySentence(){
    let sentence = firstVerb[verbIndex] + ' ' + firstPreposition[prepIndex] + ' ' + firstAdjective[adjectiveIndex] + ' ' + firstNoun[nounIndex];
    navigator.clipboard.writeText(sentence);
    alert("Sentence Copied!");
  }


  return (
    
    <div className='bg-dark'>
        
        {/* Show the current generated sentence */}

        <div className="container bg-dark ">
          <div className="row text-center ">
            <h1 className="col-md-2 text-light text-center p-3 m-4 text-wrap">
              {verb}
            </h1>

            <h1 className="col-md-2 text-light text-center p-3 m-4 text-wrap">
              {preposition}
            </h1>

            <h1 className="col-md-2 text-light text-center p-3 m-4 text-wrap">
              {adjective}
            </h1>

            <h1 className="col-md-2 text-light text-center p-3 m-4 text-wrap">
              {noun}
            </h1>

          </div>
        </div>


      <div className="container bg-dark ">

         {/* Buttons to generate a new word for each sentence element*/}

        <div className='row'>
          
          <button style= {{'word-wrap': 'break-word', 'max-width':'180px'}} className='btn btn-primary col-2 col-md-offset-2 p-3 m-2' onClick={() => setVerbIndex(chooseRandomNumber(4))}>
            New Verb
          </button>
          
          <button style= {{'word-wrap': 'break-word', 'max-width':'180px'}} className='btn btn-primary col-2 col-md-offset-2 p-3 m-2' onClick={() => setprepIndex(chooseRandomNumber(3))}>
            New Preposition
          </button>
          
          <button style= {{'word-wrap': 'break-word', 'max-width':'180px'}} className='btn btn-primary col-2 col-md-offset-2 p-3 m-2' onClick={() => setAdjectiveIndex(chooseRandomNumber(3))}>
            New Adjective
          </button>
          
          <button style= {{'word-wrap': 'break-word', 'max-width':'180px'}} className='btn btn-primary col-2 col-md-offset-2 p-3 m-2' onClick={() => setNounIndex(chooseRandomNumber(3))}>
            New Noun
          </button>

          <button style= {{'word-wrap': 'break-word', 'max-width':'180px'}} className='btn btn-success col-2 p-3 m-2' onClick={() => generateNewSentence()}>
            New Sentence
          </button>

        </div>
      </div>

      
      <div>

        {/* Button to reset each element in the sentece to index 0*/}

        <button className='btn btn-secondary btn-lg row-4 p-3 m-5' onClick={() => resetSentence()}>
              Reset All
        </button>


      </div>


      <div>

        {/* Button to copy the current sentence to the clipboard of the current user*/}

        <button className='btn btn-secondary btn-lg p-4 m-10'  onClick={() =>  copySentence()}>
              Copy Sentence <FaCopy/>
        </button>
      </div>
      

    </div>
  );
}



