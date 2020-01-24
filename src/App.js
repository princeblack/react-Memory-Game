import React, { Component } from 'react'
import shuffle from 'lodash.shuffle';
import './App.css'
import GuessCount from './GuessCount';
import Card from './Card'
import HallOfFame, { FAKE_HOF } from './HallOfFame'


const SIDE = 6;
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿';
class App extends Component {
  cards = this.generateCards()

  generateCards() {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)    
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card,card,card)
    }
    return shuffle(result)
  }
  handleCardClick(card){
    console.log(card,'clicked');
  }
  render() {
    const won = new Date().getSeconds() % 2;

    return (
      <div className="memory">
        <GuessCount guesses={'013535'} />
        {this.cards.map((card,index)=>(
          <Card
          card={card} feedback= "visible" key = {index} onClick= {this.handleCardClick}
          />
        ))}
        {won && <HallOfFame entries={FAKE_HOF}/>}
        <wrapComponent/>
      </div>
    )
  }
}
export default App