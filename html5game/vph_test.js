const firebaseConfig = {
  apiKey: "AIzaSyCu5Y_8DK9NaEXwW-XM5zZVK1cTZCLnmeg",
  authDomain: "kandy-killer-game.firebaseapp.com",
  databaseURL: "https://kandy-killer-game-default-rtdb.firebaseio.com",
  projectId: "kandy-killer-game",
  storageBucket: "kandy-killer-game.appspot.com",
  messagingSenderId: "1050165731851",
  appId: "1:1050165731851:web:b32c9f313554da8171dd0e",
  measurementId: "G-G0W6DFNFQR"
};

firebase.initializeApp(firebaseConfig);

function login_google() {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().signInWithPopup(provider)
      .then((result) => {
          var token = result.credential.accessToken;
          var user = result.user;
          console.log("GM: Google login successful:", user);
          // Return success to GameMaker
          return true;
      }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.error("GM: Error logging in with Google:", errorCode, errorMessage);
          // Return failure to GameMaker
          return false;
      });
}