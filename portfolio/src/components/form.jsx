import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/form.css";

export default function Form() {
  const form = useRef();
  const [status, setStatus] = useState("idle");
  const [isSubmitted, setIsSubmitted] = useState(false);

const handleClose = () => {
    setIsSubmitted(false);
    setStatus("idle");
    form.current.reset();
  };

 
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    const PUBLIC_KEY = "m-9uSt5xS3KSaFRXs";
    const SERVICE_ID = "service_pw2kunf";
    const TEMPLATE_ID = "template_16k41aj";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log("SUCCESS!", result.text);
        setStatus("success");
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 4000);

        form.current.reset();
      },
      (error) => {
        console.log("FAILED...", error.text);
        setStatus("error");
      }
    );
  };

  return (
    <>
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="modal">
            {isSubmitted ? (
              <>
                <button className="miniBtn" onClick={handleClose} >
                  &times;
                </button>
                <div className="submitted">
                  <h2>Thank you for your Message!</h2>
                  <p>I'll get back to you as soon as possible.</p>
                </div>
              </>
            ) : (
              <>
                <h2>Send a Message</h2>
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  required
                  disabled={status === "loading"}
                />
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  required
                  disabled={status === "loading"}
                />
                <label htmlFor="message">Message:</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  disabled={status === "loading"}
                ></textarea>
                <button type="submit" disabled={status === "loading"}>
                  <span>
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </span>
                </button>
                {status === "error" && (
                  <p className="error-message">
                    Failed to send message. Please try again.
                  </p>
                )}
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
