import React from "react";

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

const MovieIntro = ({ opening_crawl, episode_id, title }) => (
  <div className="row">
    <div className="col-md-4 offset-md-4 text-center intro-container">
      <div className="intro-content">
        <h6 className="intro-episode">Episode {episode_id}</h6>
        <h3 className="intro-title">{title}</h3>
        {transformText(opening_crawl)}
      </div>
    </div>
  </div>
);

export default MovieIntro;
