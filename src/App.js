import "./App.css";
import { getAuth, signInWithPopup } from "firebase/auth";
import firebaseApp from "./firebaseConfig/firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(firebaseApp);

function App() {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
