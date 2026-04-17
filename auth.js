// auth.js - Firebase Auth for Go Hanoi (v8 compat)
const firebaseConfig = {
  apiKey: "AIzaSyC7JuajBmEX_wEWQmEYWzW0QhBA1PSSrGM",
  authDomain: "go-hanoi.firebaseapp.com",
  databaseURL: "https://go-hanoi-default-rtdb.firebaseio.com",
  projectId: "go-hanoi",
  storageBucket: "go-hanoi.firebasestorage.app",
  messagingSenderId: "459668307615",
  appId: "1:459668307615:web:8a1ca0c60e896efe042caa",
  measurementId: "G-547Z5GQWSK"
};


// Initialize only if not already (avoid duplicates)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const auth = firebase.auth();
const db = firebase.database();


// Register new user
function registerUser(fullname, email, password) {
  if (password.length < 6) {
    throw new Error('Mật khẩu phải ít nhất 6 ký tự');
  }
  return auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Store profile in DB
      return db.ref('users/' + user.uid).set({
        fullname: fullname,
        email: email,
        createdAt: firebase.database.ServerValue.TIMESTAMP
      }).then(() => {
        localStorage.setItem('user', JSON.stringify({uid: user.uid, fullname}));
        return user;
      });
    });
}


// Login user
function loginUser(email, password) {
  return auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Fetch profile
      return db.ref('users/' + user.uid).once('value').then(snapshot => {
        const profile = snapshot.val();
        localStorage.setItem('user', JSON.stringify({uid: user.uid, fullname: profile.fullname}));
        return user;
      });
    });
}


// Logout
function logoutUser() {
  return auth.signOut().then(() => {
    localStorage.removeItem('user');
  });
}


// Listen auth state
auth.onAuthStateChanged((user) => {
  if (user) {
    // User logged in
    console.log('User logged in:', user.uid);
  } else {
    // Logged out
    console.log('User logged out');
  }
});


 // Global functions ready for HTML scripts