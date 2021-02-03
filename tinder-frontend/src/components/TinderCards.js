import { useEffect, useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from '../axios';

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/tinder-cards');
      setPeople(response.data);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelte) => {
    console.log("removing: " + nameToDelte);
    // setLastDirection(direction);
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  }

  return (
    <div className="tinder-cards">
      <div className="tinder-cards-container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>

            </div>

          </TinderCard>
        ))}
      </div>

    </div>
  );
}

export default TinderCards;