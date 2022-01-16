import * as firebase from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: 'AIzaSyBo2uAmFwbZQ2e_VjL1ATOuusVKLNbPFYo',
    authDomain: 'vision-hunt-decree.firebaseapp.com',
    projectId: 'vision-hunt-decree',
    storageBucket: 'vision-hunt-decree.appspot.com',
    messagingSenderId: '102741712371',
    appId: '1:102741712371:web:4c0e2f18c9bce162da0686',
    measurementId: 'G-PXQ2JW08E6',
}

const firebaseApp = !firebase.getApps().length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.getApp()

// Auth
export const auth = getAuth(firebaseApp)
auth.useDeviceLanguage()
export const googleAuthProvider = new GoogleAuthProvider()

// Cloud Firestore
export const firestore = getFirestore(firebaseApp)

// Storage
export const storage = getStorage(firebaseApp)
export const getFile = (file: string) => {
    const fileRef = ref(storage, file)
    return getDownloadURL(fileRef)
}

// Analytics
export const analytics = getAnalytics(firebaseApp)
