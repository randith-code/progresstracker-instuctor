import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey : process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain : process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId : process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket : process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId : process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId : process.env.REACT_APP_FIREBASE_APPID,
    measurementId : process.env.REACT_APP_FIREBASE_MEASUREMENTID
}


export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const analytics = getAnalytics(app)
