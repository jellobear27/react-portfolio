import React from "react";
import MyButton from "./Interface/MyButton";

function Contact() {
  return (
    <section id="contact">
      <footer>
        <MyButton displayText={'Phone'} to={"tel:1234567899"}/>
        <MyButton displayText={'E-Mail'} to={"jdstar17@.com"}/>
        <MyButton displayText={'GitHub'} to={"https://github.com/jellobear27"}/>
      </footer>
    </section>
  );
}

export default Contact;
