import React from "react";
import renderer from 'react-test-renderer';
import Home from "./Home";
import Quotes from './Quotes';
import Calculator from './Calculator';

describe('Rendering all pages', () => {
  it('Render Home page', () => {
    const nav = renderer
      .create(<Home />)
      .toJSON();
    expect(nav).toMatchSnapshot();
  });

  it('Render Quote page', () => {
    const quote = renderer
      .create(<Quotes />)
      .toJSON();
    expect(quote).toMatchSnapshot();
  });

  it ('Render Calculator', () => {
    const calc = renderer
      .create(<Calculator />)
      .toJSON();
    expect(calc).toMatchSnapshot();
  });
});