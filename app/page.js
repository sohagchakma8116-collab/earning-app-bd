'use client'
import { useState, useEffect } from 'react'
import { auth, db } from './lib/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'

export default function Home() {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [points, setPoints] = useState(0)

  useEffect(() => {
    onAuthStateChanged(auth, async (u) => {
      if(u) {
        setUser(u)
        const snap = await getDoc(doc(db, "users", u.uid))
        if(snap.exists()) setPoints(snap.data().points || 0)
      }
    })
  }, [])

  const signup = async () => {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    await setDoc(doc(db, "users", res.user.uid), {email, points: 0})
  }

  if(!user) return (
    <div style={{padding:20, maxWidth:400, margin:'auto'}}>
      <h1>Earning App BD</h1>
      <input style={{width:'100%', padding:10, margin:5}} placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
      <input style={{width:'100%', padding:10, margin:5}} placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)}/>
      <button style={{width:'100%', padding:10}} onClick={signup}>Signup</button>
      <button style={{width:'100%', padding:10}} onClick={()=>signInWithEmailAndPassword(auth, email, password)}>Login</button>
    </div>
  )

  return (
    <div style={{padding:20, textAlign:'center'}}>
      <h1>স্বাগতম!</h1>
      <h2>তোমার পয়েন্ট: {points}</h2>
      <button onClick={()=>signOut(auth)}>Logout</button>
    </div>
  )
    }
