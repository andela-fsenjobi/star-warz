import React from 'react';

const transformText = text => {
    const lines = text.split('\r');
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
}

const MovieIntro = ({text}) => transformText(text);

export default MovieIntro;
