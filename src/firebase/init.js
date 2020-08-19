import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBwmLwH-XREdjQXysJWn4HWC9FoWRqlxRQ',
  authDomain: 'twitter-clone-716ff.firebaseapp.com',
  databaseURL: 'https://twitter-clone-716ff.firebaseio.com',
  projectId: 'twitter-clone-716ff',
  storageBucket: 'twitter-clone-716ff.appspot.com',
  messagingSenderId: '620468527572',
  appId: '1:620468527572:web:2c244b0b20c7ee76e8f641',
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
export const auth = firebaseApp.auth()
