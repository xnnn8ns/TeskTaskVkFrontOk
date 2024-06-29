import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('Button component', () => {
  test('renders correctly with Counter', () => {
    render(<Button />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2); // Проверить, что количество кнопок соответствует ожидаемому (т.е. 2)
    expect(screen.getByText(/0/)).toBeInTheDocument(); // текст внутри по умолчанию 0
  });
});