import React, { useState, useEffect } from "react";

const transformText = (text) => {
  const lines = text.split("\r");
  let index = 0;
  return (
    <p>
      {lines.map(line => (
        <span key={`line${index++}`}>
          {line}
          <br />
        </span>
      ))}
    </p>
  );
};

const MovieIntro = ({ opening_crawl, episode_id, title }) => {
  const [animate, restartAnimation] = useState();

  useEffect(
    () => {
      restartAnimation(false);
      setTimeout(() => restartAnimation(true), 1);
    },
    [episode_id]
  );

  return (
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center intro-container">
        {
          animate &&
          <div className="intro-content">
            <h6 className="intro-episode">Episode {episode_id}</h6>
            <h3 className="intro-title">{title}</h3>
            {transformText(opening_crawl)}
          </div>
        }
      </div>
    </div>
  );
};

export default MovieIntro;
