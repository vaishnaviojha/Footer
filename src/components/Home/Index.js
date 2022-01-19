import React from "react";
import "./Home.css";
import { Player } from "video-react";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Player>
          <source
          className="home__video"
          src="https://www.pexels.com/video/rooftop-summer-friends-roof-4881727/" />
        </Player>
      </div>
    </div>
  );
}

export default Home;
