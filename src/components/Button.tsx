import React from 'react';
import Counter from './Counter.tsx';
import '../style/Button.scss';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      {children}
      <Counter />
    </div>
  );
};

export default Button;
