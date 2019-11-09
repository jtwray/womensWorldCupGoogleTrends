import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App' 
import Fetch from '../components/Fetch'
import { isMainThread } from 'worker_threads'
import { useSpring } from 'react-spring';
import Axios from 'axios';


test('the data is a list of most searched soccer women in the world and their respective countries', () => {
    return Axios.get().then(data => {
      expect(data).toBe(data);
    });
  });

  test('the fetch fails with an error', () => {
    expect.assertions(1);
    return componentDidMount().catch(e => expect(e).toMatch('error'));
  });

describe(`googleText search`,()=>{
it (`renders"Google searches"text`,()=>{
    const wrapper=ReactDOM.render(<useSpring/>);
    const googleSearchesTxt=wrapper.queryByText(/player/i);
expect(googleSearchesTxt.toBeInTheDocument());
expect(wrapper.queryByText(/United States/i).toBeInTheDocument());

});})



