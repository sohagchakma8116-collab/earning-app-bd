'use client'
import { useState } from 'react'

export default function Home() {
  const [points, setPoints] = useState(0)

  const earnPoint = () => {
    setPoints(points + 10)
    alert('অভিনন্দন! 10 পয়েন্ট পেয়েছো 🎉')
  }

  return (
    <main style={{padding: '20px', textAlign: 'center', fontFamily: 'sans-serif'}}>
      <h1>স্বাগতম Earning App BD তে!</h1>
      <h2>তোমার পয়েন্ট: {points}</h2>
      <p>প্রতি ক্লিকে 10 পয়েন্ট</p>
      <button 
        onClick={earnPoint}
        style={{padding: '15px 30px', fontSize: '18px', background: 'green', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer'}}
      >
        পয়েন্ট আর্ন করুন
      </button>
    </main>
  )
}
