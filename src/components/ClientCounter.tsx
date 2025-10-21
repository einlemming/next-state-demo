'use client'
import { useState } from 'react';

interface CounterProps {
  title: string;
}

const ClientCounter: React.FC<CounterProps> = ({ title }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="p-6 rounded-lg shadow-md bg-green-100 text-center">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-2xl mb-4">{count}</p>
      <div className="space-x-2">
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => setCount(count + 1)}>+</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => setCount(count - 1)}>-</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default ClientCounter;
