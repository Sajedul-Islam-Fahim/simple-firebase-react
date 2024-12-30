import React, { useState } from "react";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
const Login = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
    .then( result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      
      setUser(loggedInUser);
    })
    .catch( error => {
      console.log("error", error.message);
    })
  }
  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
       <div>
          <button onClick={handleLogin}>Login with Google</button>
          <button onClick={handleGithubLogin}>Github Login</button>
       </div>
      )}
      {user && (
        <div>
          <h2>Welcome {user.displayName}</h2>
          <img src={user.photoURL} alt={user.displayName} />
        </div>
      )}
    </div>
  );
};

export default Login;
