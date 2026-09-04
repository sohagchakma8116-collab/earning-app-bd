'use client'
import { useState } from 'react';

export default function Home() {
  const [points, setPoints] = useState(0);
  const [lastEarned, setLastEarned] = useState(0);

  const tasks = [
    { id: 1, name: "YouTube ভিডিও দেখো", reward: 5 },
    { id: 2, name: "অ্যাপ ইনস্টল করো", reward: 10 },
    { id: 3, name: "রেফার করো", reward: 20 }
  ];

  const handleCompleteTask = (reward) => {
    setPoints(points + reward);
    setLastEarned(reward);
  };

  return (
    <main style={{ padding: '20px', fontFamily: 'Arial', background: '#f0f0f0', minHeight: '100vh' }}>
      <div style={{ background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        <h1>💰 Earning App BD</h1>
        <h2>তোমার ব্যালেন্স: {points} পয়েন্ট</h2>
        {lastEarned > 0 && <p style={{ color: 'green' }}>+{lastEarned} পয়েন্ট যোগ হয়েছে!</p>}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>টাস্ক সম্পন্ন করো:</h3>
        {tasks.map(task => (
          <div key={task.id} style={{ background: 'white', padding: '15px', margin: '10px 0', borderRadius: '8px' }}>
            <p>{task.name}</p>
            <button 
              onClick={() => handleCompleteTask(task.reward)}
              style={{ background: '#0070f3', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', width: '100%' }}
            >
              সম্পন্ন করো +{task.reward} পয়েন্ট
            </button>
          </div>
        ))}
      </div>
    </main>
  );
                }
