import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

function Homepage() {

  const [typingStatus, setTypingStatus] = useState();

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>LAMA AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A voluptatum
          omnis reprehenderit fugiat dolor.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>

      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img src="/bot.png" alt="" />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human: We produce food for Mice",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Bot: We produce food for Hamsters",
                1000,
                "Human2: We produce food for Guinea Pigs",
                1000,
                "Bot: We produce food for Chinchillas",
                1000,
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
