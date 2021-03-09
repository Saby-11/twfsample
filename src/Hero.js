import React, { useState } from "react";

function Hero({ handleLogout }) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [fav, setFav] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    alert(`    Submitting Name: ${name}
    Submitting DOB: ${dob}
    Submitting Movie: ${fav}`);
    setName("")
    setDob("");
    setFav("");
  };

//   useEffect(() => {
//     setName();
//   },[setName])

  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <div><p style={{margin: "25px auto", color: "white", textAlign :"center"}}>Please fill the form below for us to serve you better</p></div>
      <div className="login">
        <form onSubmit={onSubmit} className="loginContainer">
          <label>Name</label>
          <input
            name="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Date of Birth</label>
          <input
            name="DOB"
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />

          <label>Place of Birth</label>
          <input
            name="Place of Birth"
            type="text"
            value={fav}
            onChange={(e) => setFav(e.target.value)}
          />

          <button style={{margin: "25px auto"}}  type="submit" value="Submit" className="btnContainer">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
