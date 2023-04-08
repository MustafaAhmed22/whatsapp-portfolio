import React, { useState } from "react";
import "../components/home.css";
import "animate.css";
import { AiOutlineSend } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import sound from "../components/Whatsapp.mp3";
import sound2 from "../components/Kakak.mp3";
import img1 from "../components/avatar.jpg";
import img2 from "../components/peakpx.jpg";

function Home() {
  let currDate = new Date();
  let hoursMin = currDate.getHours() + ":" + currDate.getMinutes();
  const myStyle = {
    backgroundImage: `url(${img2})`,
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"
  };

  const [message, setMessage] = useState("");

  const [updated, setUpdated] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      new Audio(sound).play();
      setTimeout(() => {
        new Audio(sound2).play();
      }, 1000);

      const msg = [...updated, message];
      // 👇 Get input value
      setUpdated(msg);
      console.log(message);
    }
  };
  const handleclick = (event) => {
    new Audio(sound).play();
    // setTimeout(() => {
    new Audio(sound2).play();
    //}, 1000);
    const msg = [...updated, message];
    // 👇 Get input value
    setUpdated(msg);

    console.log(message);
  };

  function firstfunction() {
    return (
      <div className="first animate__animated animate__delay-1s animate__fadeIn">
        <p>Hello there 👋🏻</p>
        <p>My name is Mostafa Ahmed Saber</p>
        <p>I am a Software Engineer and Full Stack Developer 👨🏻‍💻📚</p>
        <p>
          I have experience around building and scaling applications over
          various emerging technologies.
        </p>
        <p>Send 'more' to know more about me.</p>
        {hoursMin}
      </div>
    );
  }

  function yourWord(word) {
    return (
      <>
        <div className="yourword">
          {word}
          <br />
          {hoursMin}
        </div>
      </>
    );
  }

  function moreFunction() {
    return (
      <div className="second animate__animated animate__delay-1s animate__fadeIn">
        <p>Send Keyword to get what you want to know about me...</p>
        <ul>
          <li>'skills' - to know my skills</li>
          <li>'resume' - to get my resume</li>
          <li>'education' - to get my education details</li>
          <li>'address' - to get my address</li>
          <li>'contact' - to get ways to connect with me</li>
        </ul>
        {hoursMin}
      </div>
    );
  }

  function skillsFunction() {
    return (
      <div className="second animate__animated animate__delay-1s animate__fadeIn">
        <p>I am currently a Software Engineer.</p>
        <p>I can comfortably write code in following :</p>
        <p>
          I like problem solving{" "}
          <a href="https://leetcode.com/MostafaAhmed22/" target="_blank">
            Leetcode
          </a>
        </p>
        <ul>
          <li>Javascript</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>React JS</li>
          <li>SASS</li>
          <li>and more...</li>
        </ul>
        {hoursMin}
      </div>
    );
  }
  function resumeFunction() {
    return (
      <div className="second animate__animated animate__delay-1s animate__fadeIn">
        <p>Resume to be updated fully !!!</p>
        <a
          href="https://drive.google.com/file/d/1Pkiv2UTozS_eQsw9AcQtwLgz8mLk5BYp/view"
          target="_blank"
        >
          MY CV
        </a>
        <br />
        {hoursMin}
      </div>
    );
  }

  function educationFunction() {
    return (
      <div className="second animate__animated animate__delay-1s animate__fadeIn">
        <p>I completed B.E degree in Computer Science Ain Shams University</p>
        <p>Skills matter so hope you dont need to know my percentage 😉</p>
        <br />
        {hoursMin}
      </div>
    );
  }
  function addressFunction() {
    return (
      <div className="second animate__animated animate__delay-1s animate__fadeIn">
        <p>Cairo , Egypt</p>
        <p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13803.624234343322!2d31.319848499999996!3d30.125501500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815a15c11b89d%3A0x5154e80c478e3c91!2sEl%20Matarya!5e0!3m2!1sen!2seg!4v1679939751286!5m2!1sen!2seg"
            width="280"
            height="300"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </p>
        <br />
        {hoursMin}
      </div>
    );
  }
  function contactFunction() {
    return (
      <div className="second animate__animated animate__delay-1s animate__fadeIn">
        <p>Email : mustafaahmed22111@yahoo.com</p>
        <p>Phone : 01066310866</p>
        <p>
          Old Portfolio :{" "}
          <a href="https://my-portifolio1.netlify.app/" target="_blank">
            Portfolio
          </a>
        </p>
        <p>
          Github : <a href="https://github.com/MustafaAhmed22">Github</a>
        </p>
        <p>
          LinkedIn :{" "}
          <a
            href="https://www.linkedin.com/in/mostafa-ahmed-82997aa5/"
            target="_blank"
          >
            LinkedIn
          </a>
        </p>
        <br />
        {hoursMin}
      </div>
    );
  }

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-body">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>

      <div style={myStyle} className="main">
        <div className="nav1 ">
          <img
            className="img1"
            src={img1}
            alt=""
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          />
          <div className="my-details">
            <p className="Name">Mostafa Ahmed</p>
            <p className="time">Last Seen today {hoursMin} </p>
          </div>
        </div>
        <div className="container ">
          {firstfunction()}
          {updated.map((e) => {
            if (e === "more") {
              return (
                <>
                  {yourWord(e)}

                  <br />
                  <br />
                  {moreFunction()}
                </>
              );
            } else if (e === "skills") {
              return (
                <>
                  {yourWord(e)}

                  <br />
                  <br />
                  {skillsFunction()}
                </>
              );
            } else if (e === "resume") {
              return (
                <>
                  {yourWord(e)}

                  <br />
                  <br />
                  {resumeFunction()}
                </>
              );
            } else if (e === "education") {
              return (
                <>
                  {yourWord(e)}

                  <br />
                  <br />
                  {educationFunction()}
                </>
              );
            } else if (e === "address") {
              return (
                <>
                  {yourWord(e)}

                  <br />
                  <br />
                  {addressFunction()}
                </>
              );
            } else if (e === "contact") {
              return (
                <>
                  {yourWord(e)}

                  <br />
                  <br />
                  {contactFunction()}
                </>
              );
            }
          })}
        </div>
        <footer className=" text-lg-start fixed-bottom footer">
          <input
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={message}
          />
          <button className="btn-send" onClick={handleclick}>
            Send
          </button>
        </footer>
      </div>
    </>
  );
}
export default Home;
