import React from "react";
import LoginScreen from "./LoginScreen";

var LoginState = false;

// function LoginConditionalRender() {
//   if (LoginState === true) {
//     return <h1>You are already Logged In</h1>;
//   } else {
//     return <LoginScreen />;
//   }
// }

// Condition ? Do this if true : Do this if not true
// //ternery operator condition ? exprIfTrue : exprIfFalse
function App() {
  return (
    <div className="container">
      {LoginState === true ? (
        <h1>You are already Logged In</h1>
      ) : (
        <LoginScreen />
      )}
    </div>
  );
}

export default App;
