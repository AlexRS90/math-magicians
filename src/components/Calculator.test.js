import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calcuator Button clicks', () => {
  test('Button 1', () => {
    const component = render(<Calculator />);
    const button1 = component.getByText('1');
    fireEvent.click(button1);
  });

  test('Button 2', () => {
    const component = render(<Calculator />);
    const button2 = component.getByText('2');
    fireEvent.click(button2);
  });

  test('Button 3', () => {
    const component = render(<Calculator />);
    const button3 = component.getByText('3');
    fireEvent.click(button3);
  });

  test('Button 4', () => {
    const component = render(<Calculator />);
    const button4 = component.getByText('4');
    fireEvent.click(button4);
  });

  test('Button 5', () => {
    const component = render(<Calculator />);
    const button5 = component.getByText('5');
    fireEvent.click(button5);
  });

  test('Button 6', () => {
    const component = render(<Calculator />);
    const button6 = component.getByText('6');
    fireEvent.click(button6);
  });

  test('Button 7', () => {
    const component = render(<Calculator />);
    const button7 = component.getByText('7');
    fireEvent.click(button7);
  });

  test('Button 8', () => {
    const component = render(<Calculator />);
    const button8 = component.getByText('8');
    fireEvent.click(button8);
  });

  test('Button 9', () => {
    const component = render(<Calculator />);
    const button9 = component.getByText('9');
    fireEvent.click(button9);
  });
});

