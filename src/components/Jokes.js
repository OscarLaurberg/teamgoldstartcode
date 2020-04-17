import React, { useState, useEffect } from 'react';
import facade from '../api/apiFacade';
import { apiUtils } from '../utils/apiUtils';

export default function Jokes() {
  const [jokes, setJokes] = useState({});
  useEffect(() => {
    // apiUtils.fetchData('/jokes')
    facade.fetchData('/jokes').then((json) => {
      setJokes(json);
    });
  }, []);
  return (
    <React.Fragment>
      <h1>Jokes</h1>
      <p>Joke1: {jokes.joke1}</p>
      <p>Joke1 Reference: {jokes.joke1Reference}</p>
      <br />
      <p>Joke2: {jokes.joke2}</p>
      <p>Joke2 Reference: {jokes.joke2Reference}</p>
    </React.Fragment>
  );
}
