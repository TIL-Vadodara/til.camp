import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDNCeb6hbGape7PwaN-OPO-2cLvM242mIk",
  authDomain: "til-camp.firebaseapp.com",
  databaseURL: "https://til-camp.firebaseio.com",
  projectId: "til-camp",
  storageBucket: "til-camp.appspot.com",
  messagingSenderId: "458250524141"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()
const database = firebase.database()

export {
  auth,
  database,
}
