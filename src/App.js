import React, { useState } from "react";
import {
  FacebookShareButton, TwitterShareButton, WhatsappShareButton,
  FacebookIcon, TwitterIcon, WhatsappIcon
} from "react-share";
import "./styles.css";

const App = () => {
  const quotesArr = [
    "Whenever I'm about to do something, I think, 'Would an idiot do that?' and if they would, I do not do that thing.",
    "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.",
    "I talk a lot, so I’ve learned to tune myself out.",
    "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    "I’m not superstitious, but I am a little stitious.",
    "If I don’t have some cake soon, I might die.",
    "The worst thing about prison was the dementors.",
    "Identity theft is not a joke, Jim! Millions of families suffer every year.",
    "Today, smoking is going to save lives.",
    "I am running away from my responsibilities. And it feels good.",
    "I just want to lie on the beach and eat hot dogs. That’s all I’ve ever wanted.",
    "Sometimes the clothes at Gap Kids are too flashy, so I’m forced to go to the American Girl store and order clothes for large colonial dolls.",
    "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    "And I feel God in this Chili’s tonight.",
    "Me think, why waste time say lot word, when few word do trick.",
    "I’m glad Michael’s getting help. He has a lot of issues, and he’s stupid.",
    "A few years ago, my family was on a safari in Africa and my cousin, Mufasa, was um, he was trampled to death by a pack of wildebeests and um, we all took it really hard.",
    "No, I’m not going to tell them about the downsizing. If a patient has cancer, you don’t tell them.",
    "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    "Guess what, I have flaws. What are they? Oh I don’t know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I’ll hit somebody with my car. So sue me.",
    "I don’t talk trash, I talk smack. They’re totally different. Trash talk is hypothetical, like: Your mom is so fat she can eat the internet. But smack talk is happening like right now. Like You’re ugly and I know it for a fact ’cause I got the evidence right there.",
    "My roommate wants to meet everybody. Because I’m pretty sure he thinks I’m making Dwight up. He is very real.",
    "I wonder what people like about me. Probably my jugs.",
    "I don’t hate it. I just don’t like it at all and it’s terrible.",
    "Who is Justice Beaver?"
  ];
  const characterArr = ["Dwight Schrute", "Michael Scott", "Kelly Kappor", "Michael Scott", "Michael Scott", "Stanley Hudson", "Prison Mike", "Dwight Schrute", "Dwight Schrute", "Michael Scott", "Kevin Malone", "Angela Martin", "Michael Scott", "Pam Beesley",
    "Kevin Malone", "Phyllis Lapin-Vance", "Ryan Howard", "Michael Scott", "Michael Scott", "Michael Scott", "Kelly Kapoor", "Jim Halpert", "Phyllis Lapin-Valnce", "Michael Scott", "Dwight Schrute"]

  const [index, setIndex] = useState(0);
  const onRandomIndexClick = () => {
    setIndex(Math.floor(Math.random() * 25));
    console.log(index)
  }
  const quoteBoxString = `"${quotesArr[index]}" by ${characterArr[index]}`
  return (
    <div>
      <div className="container" id="quote-box">
        <h1>the office US</h1>
        <h2>Random Quote Machine</h2>
        <div>
          <h5>{quotesArr[index]}</h5>
          <p>by {characterArr[index]}</p>
        </div>
        <div id="btns">
          <button
            id="next-quote-btn"
            onClick={onRandomIndexClick}>
            NEXT QUOTE
        </button>
          <div id="shareBtns">
            <TwitterShareButton

              onClick={onRandomIndexClick}
              url={"https://poianakim.github.io/theofficequote/"}>
              <TwitterIcon className="share-btn" size={20} round={true} />
            </TwitterShareButton>
            <FacebookShareButton

              onClick={onRandomIndexClick}
              url={"https://poianakim.github.io/theofficequote/"}
              quote={quoteBoxString}>
              <FacebookIcon className="share-btn" size={20} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton

              onClick={onRandomIndexClick}
              url={"https://poianakim.github.io/theofficequote/"}
              children={quoteBoxString}>
              <WhatsappIcon className="share-btn" size={20} round={true} />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
      <footer>
        &copy; {new Date().getFullYear()} THE OFFICE RANDOM QUOTE MACHINE <br/>by POIANA KIM 
        <br/>dedicated to 
        <img src="https://static.wikia.nocookie.net/theoffice/images/2/2d/Dunder_Mifflin%2C_Inc_Long.jpg/revision/latest/scale-to-width-down/1000?cb=20180717195405" width="100" />
      </footer>
    </div>
  );
}

export default App;
