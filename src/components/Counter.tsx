import React, { useState } from 'react';
import '../style/Counter.scss';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <div className="counter-value">{count}</div>
      <div className="counter-buttons">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;