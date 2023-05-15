// import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Players() {
  const [players, setPlayers] = useState([]);

  // const apiUrl = 'https://api.chess.com/pub/player/lilsluggerr/stats'

  // function pullJson() {
  //   fetch(apiUrl)
  //   .then(res => res.json())
  //   .then(resData => {
  //     displayData = resData.map(function(players))
  //   })
  // }
  useEffect(() => {
    fetch('https://api.chess.com/pub/player/lilsluggerr/stats')
      .then( res => res.json())
      .then(json => setPlayers(json))
      .catch( err => console.log(err));
  }, [])

  // useEffect(() => {
  //   axios.get('https://api.chess/pub/player/GM')
  //     .then( res => {
  //       setPlayers(res.data);
  //     })
  //     .catch( err => {
  //       console.log(err)
  //     });
  // }, []);


      // useEffect(() => {
      //   fetch('https://api/chess.com/pub/player/lilsluggerr/stats', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type' : 'pllication/json'
      //     },
      //     body: JSON.stringify({"id": 1})
      //   })
      //   .then(res => console.log(res.status))
      // })

  return (
    // <ul>
    // {players.map(player => (
    //   <li key={player.id}>{player.win}</li>
    // ))}
    // </ul>
    <div>
      {players ? <pre>{JSON.stringify(players, null, 2)}</pre> : 'Loading...'}
    </div>
  )
}