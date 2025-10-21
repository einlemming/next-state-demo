'use client'
import { useState, useEffect } from 'react';

interface CounterProps {
  title: string;
  storageKey: string;
}

const PersistentCounter: React.FC<CounterProps> = ({ title, storageKey }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setCount(parseInt(saved));
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, count.toString());
  }, [count, storageKey]);

  return (
    <div className="p-6 rounded-lg shadow-md bg-yellow-100 text-center">
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

export default PersistentCounter;
