import React, { useEffect, useState } from 'react';
import classes from './UseRender.module.css'

const UseRender = () => {
  const [renderEffect, setRenderEffect] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => setRenderEffect(json));
  }, []);

  return (
    <div className={classes.container}>
      {renderEffect.map((item) => {
        return (
          <div className={classes.cards}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p className={classes.url}>{item.url}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UseRender;
