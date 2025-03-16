function login_google() {

    // const firebaseConfig = {
    //     apiKey: "AIzaSyCu5Y_8DK9NaEXwW-XM5zZVK1cTZCLnmeg",
    //     authDomain: "kandy-killer-game.firebaseapp.com",
    //     databaseURL: "https://kandy-killer-game-default-rtdb.firebaseio.com",
    //     projectId: "kandy-killer-game",
    //     storageBucket: "kandy-killer-game.appspot.com",
    //     messagingSenderId: "1050165731851",
    //     appId: "1:1050165731851:web:b32c9f313554da8171dd0e",
    //     measurementId: "G-G0W6DFNFQR"
    // };
    // firebase.initializeApp(firebaseConfig);

    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log("ext: Google login successful:", user);
        console.log("ext: Token:", token);
        // Call GameMaker async event with success
        // gml_Script_gmcallback_login_success(user.uid, user.displayName, user.email);
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("ext: Error logging in with Google:", errorCode, errorMessage);
        // Call GameMaker async event with failure
        // gml_Script_gmcallback_login_failure(errorCode, errorMessage);
    });
    return result;
}


function gmcallback_login_success() {
    // This function will be called from JavaScript when login is successful
    var uid = argument0;
    var displayName = argument1;
    var email = argument2;

    // You can store these details or use them as needed
    // global.user_logged_in = true;
    global.user_uid = uid;
    global.user_name = displayName;
    global.user_email = email;

    show_debug_message("ext: Login success: " + string(uid));
    show_debug_message("ext: global.user_uid: " + string(global.user_uid));

    // Trigger any necessary game logic for successful login
    // obj_firebase_database_controller.event_user(0);
}


function gmcallback_login_failure() {
    // This function will be called from JavaScript when login fails
    var errorCode = argument0;
    var errorMessage = argument1;

    // Handle the error as needed
    show_debug_message("ext: Login failed: " + string(errorCode) + " - " + errorMessage);

    // Trigger any necessary game logic for failed login
    // obj_firebase_database_controller.event_user(1);
}