import "./styles.css";
import React, { useState } from "react";

var leagueDictionary = {
  England: [
    {
      name: "Chelsea",
      KnownAs: "Blues",
      majorTrophies: "33"
    },
    {
      name: "Manchester United",
      KnownAs: "Red Devils",
      majorTrophies: "66"
    },
    {
      name: "Liverpool",
      KnownAs: "The Reds",
      majorTrophies: "65"
    }
  ],
  Germany: [
    {
      name: "Bayern Munich",
      KnownAs: "Bavarians",
      majorTrophies: "80"
    },
    {
      name: "Borussia Dortmund",
      KnownAs: "Borussians",
      majorTrophies: "22"
    },
    {
      name: "Schalke 04",
      KnownAs: "The Royal Blues",
      majorTrophies: "15"
    }
  ],
  Spain: [
    {
      name: "Real Madrid",
      KnownAs: "Los Blancos",
      majorTrophies: "95"
    },
    {
      name: "Barcelona",
      KnownAs: "Blaugrana",
      majorTrophies: "97"
    },
    {
      name: "Atletico Madrid",
      KnownAs: "Colchoneros",
      majorTrophies: "34"
    }
  ]
};

var league = Object.keys(leagueDictionary);

export default function App() {
  var [selectedLeague, setSelectedLeague] = useState("England");

  function buttonClickHandler(league) {
    setSelectedLeague(league);
  }

  return (
    <div className="App">
      <h1>Best Clubs In Europe's Top Leagues</h1>
      <h2>Select a European Country</h2>
      <div>
        {league.map(function (league) {
          return (
            <button key={league} onClick={() => buttonClickHandler(league)}>
              {league}
            </button>
          );
        })}
      </div>
      <hr />

      <div className="section">
        {leagueDictionary[selectedLeague].map(function (club) {
          return (
            <ul key={club.name}>
              <li className="list" key={club.name}>
                Club Name: {club.name}
              </li>
              <li className="list" key={club.KnownAs}>
                Populary Known As: {club.KnownAs}
              </li>
              <li className="list" key={club.majorTrophies}>
                Trophies: {club.majorTrophies}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
