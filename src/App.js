import "./App.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import firebaseApp from "./firebaseConfig/firebaseConfig";
import { useState } from "react";

const auth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };

  const handleEmailOnBlur = (event) => {
    console.log(event.target.value);
  };
  const handlePasswordOnBlur = (event) => {
    console.log(event.target.value);
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      });
  };

  return (
    <div className="App">
      {user.uid ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
        </div>
      )}

      {user.uid && (
        <section className="user">
          <h2>Username: {user.displayName}</h2>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </section>
      )}
      <form onSubmit={handleRegister}>
        <input
          onBlur={handleEmailOnBlur}
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
        />
        <br />
        <input
          onBlur={handlePasswordOnBlur}
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
        />
        <br />
        agree to our terms and conditions
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
