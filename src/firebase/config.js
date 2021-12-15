import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyASt3yaKbm8eI257Zl7LtoHI0-n9i_4ytY',
  authDomain: 'mymoney-79329.firebaseapp.com',
  projectId: 'mymoney-79329',
  storageBucket: 'mymoney-79329.appspot.com',
  messagingSenderId: '281967313065',
  appId: '1:281967313065:web:40adb0d9adb008e5b6e9b8',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }
