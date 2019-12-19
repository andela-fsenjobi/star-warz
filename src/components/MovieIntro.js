import React from "react";

const transformText = text => {
  const lines = text.split("\r");
  let index = 0;
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4 text-center">
        <p>
          {lines.map(line => (
            <span key={`line${index++}`}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

const MovieIntro = ({ text }) => transformText(text);

export default MovieIntro;
