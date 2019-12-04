import React from "react";

export default function Login() {
  return (
    <div>
      <form>
        <h1>Nice to see you back !</h1>
        <input
          className="input"
          name="email"
          placeholder="alcoolique@picon.fr"
        />
        <input
          className="input"
          name="password"
          type="password"
          placeholder="♥☺♤♧♢☼♪"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
