import React from 'react';

interface CounterProps {
  title: string;
  count?: number;
}

const ServerCounter: React.FC<CounterProps> = ({ title, count = 4711 }) => {
  return (
    <div className="p-6 rounded-lg shadow-md bg-blue-100 text-center">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-2xl mb-4">{count}</p>
      <p className="text-gray-600 text-sm">Server Counter – reset on refresh/restart</p>
    </div>
  );
};

export default ServerCounter;
