
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

var firebaseConfig = {
    apiKey: "AIzaSyD_b8qyBMUSeecbWWOe6QtSnS3VPm0TKxE",
  authDomain: "otp-project-94cf9.firebaseapp.com",
  projectId: "otp-project-94cf9",
  storageBucket: "otp-project-94cf9.appspot.com",
  messagingSenderId: "557255395666",
  appId: "1:557255395666:web:38b22375b320655bf4528b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase