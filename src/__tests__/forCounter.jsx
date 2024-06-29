import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Counter from '../components/Counter';

describe('Counter component', () => {
  test('renders correctly', () => {
    render(<Counter />);
    expect(screen.getByText(/0/)).toBeInTheDocument(); // проверка на начальное значение (0)
  });

  test('increments counter', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText(/1/)).toBeInTheDocument(); // проверка на увеличение на 1
  });

  test('decrements counter', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('-'));
    expect(screen.getByText(/-1/)).toBeInTheDocument(); // проверка на уменьшение на 1
  });
});