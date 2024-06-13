import React from "react";
import Emojicard from "./EmojiCard";
import emojipedia from "../emojipedia";
//console.log("emojipedia", emojipedia);

function Card(props) {
  return (
    <Emojicard
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
}
function App() {
  console.log("emojipedia", emojipedia);
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(Card)} </dl>
    </div>
  );
}

export default App;
