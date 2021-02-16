import React from 'react';
import House from './components/House'
import house1 from './house1.png'
import house2 from './house2.png'
import house3 from './house3.png'
import guest1 from './guest1.png'
import guest2 from './guest2.png'
import guest3 from './guest3.png'
import './App.css';

class App extends React.Component {

  state = {
    houses : [
      {id: 1, houseimg: house1, star: 5, guestImg: guest1, guestName: "Cherly", guestFrom:"United States", review:"Gary was such a great host during our time in Brighton. He made us feel at home and was helpful with any questions we had about directions or things to do. The room he has..."},
      {id: 2, houseimg: house2, star: 2, guestImg: guest2, guestName: "Charlie", guestFrom:"Gana", review: "Very accommodating with my booking and welcoming to all of us. Thanks!"},
      {id: 3, houseimg: house3, star: 3, guestImg: guest3, guestName: "John Wayne", guestFrom:"Canada", review: "Wow... Alyson is turly an amazing person.1st class accommodation and we got the difficult news that a loved has passed the morning we were schedule to leave. Alyson.."}
    ]
  }

  render () {
    const eachHouse = this.state.houses.map((house) => {
      return <House key={house.id} houseimg={house.houseimg} star={house.star} 
      guestName={house.guestName} guestImg= {house.guestImg} guestFrom={house.guestFrom} review={house.review}/>
    });

  return (
    <div className="App" class="main">
        {eachHouse}
    </div>
  );

}}

export default App;
