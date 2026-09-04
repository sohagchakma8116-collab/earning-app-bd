import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCuzEnJ1M-N2qaUzIggkmHHCgz8lBo2PKo",
  authDomain: "earning-app-bd-3123e.firebaseapp.com",
  projectId: "earning-app-bd-3123e",
  storageBucket: "earning-app-bd-3123e.firebasestorage.app",
  messagingSenderId: "1025465839037",
  appId: "1:1025465839037:web:3d3386370c64089760b6d4",
  measurementId: "G-Q8HK1GBNDK"
}

const app =!getApps().length? initializeApp(firebaseConfig) : getApps()[0]
export const auth = getAuth(app)
export const db = getFirestore(app)
