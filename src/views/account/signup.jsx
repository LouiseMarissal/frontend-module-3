import React from "react";

export default function Signup() {
  return (
    <div>
      <form className="form">
        <h1>Register to get</h1>
        <input
          className="input"
          name="companyName"
          placeholder="Picon & Friends ©"
        />
        <input className="input" name="barName" placeholder="Le Bar Foo Baz" />
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
        <input
          className="input"
          name="website"
          placeholder="http://lebonrougequitache.com/"
        />
        <input name="photo" type="file" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
