const firebaseConfig = {
    apiKey: "AIzaSyDcr9CKg9uYF_CYqCVI8bXPUlL4EFT6a80",
    authDomain: "smares1-d408b.firebaseapp.com",
    databaseURL: "https://smares1-d408b-default-rtdb.firebaseio.com",
    projectId: "smares1-d408b",
    storageBucket: "smares1-d408b.appspot.com",
    messagingSenderId: "1054578763993",
    appId: "1:1054578763993:web:9e2b72371498f9de6b76c8"
  };
  firebase.initializeApp(firebaseConfig);
  var hotelDB = firebase.database().ref('hotel');
  document.getElementById('hotel').addEventListener('Signup',Signupform);
  function Signupform(e){
    e.preventDefault();
    
  }
const database = getDatabase(app);
const auth = getAuth(app);

document.getElementById("SignUp").addEventListener('click',(e) => {

  var email = document.getElementById('email').value;
  var password = document.getElementById('psw').value;
  var username = document.getElementById('username').value;


  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('user created');
    window.location.href="donate.html"; 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
})