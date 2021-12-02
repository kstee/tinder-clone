import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Taylor"
        message="Hey! How are you 😉️"
        timestamp="35 seconds ago"
        profilePic="https://pbs.twimg.com/media/ECs3hM7UcAAIWGD.jpg"
      ></Chat>
      <Chat
        name="Ellen"
        message="Whats up ❤️"
        timestamp="55 seconds ago"
        profilePic="https://variety.com/wp-content/uploads/2020/04/ellen-degeneres.jpg?w=681&h=383&crop=1"
      ></Chat>
      <Chat
        name="Ariana"
        message="Ola"
        timestamp="3 days ago"
        profilePic="https://pbs.twimg.com/media/B0qeRNOIgAQ_k79.png"
      ></Chat>
      <Chat
        name="Gal"
        message="Oops there is he is... 🐕️"
        timestamp="1 week ago"
        profilePic="https://static.toiimg.com/photo/msid-79230116/79230116.jpg?399641"
      ></Chat>
    </div>
  );
}

export default Chats;
