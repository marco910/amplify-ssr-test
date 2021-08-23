import { Text, Input, Textarea, Button } from "@geist-ui/react";
import { useState } from "react";
import axios from "axios";

export default function IndexPage() {
  const input_props = {
    width: "100%"
  };

  let [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    subject: "",
    message: ""
  });

  let [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    try {
      axios({
        method: "POST",
        url: "/api/send",
        data: formData
      })
        .then(({ data }) => console.log("Respsonse from API:", data))
        .catch((err) => setMessage("A error occurred"));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container">
      <Text h1>Contact Form</Text>

      <form onSubmit={handleSubmit}>
        <div className="grid">
          <div className="col-md-6 col-xs-12">
            <Input
              placeholder="First name"
              name="first_name"
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
              value={formData.first_name}
              {...input_props}
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <Input
              placeholder="Last name"
              name="last_name"
              {...input_props}
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
              value={formData.last_name}
            />
          </div>
          <div className="col-md-12 col-xs-12">
            <Input
              placeholder="Subject"
              name="subject"
              {...input_props}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              value={formData.subject}
            />
          </div>
          <div className="col-md-12 col-xs-12">
            <Textarea
              placeholder="Message"
              name="message"
              {...input_props}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              value={formData.message}
            />
          </div>
          <div className="col-md-12 col-xs-12">
            <button type="submit">Send</button>
          </div>
        </div>
      </form>

      {message !== "" && <div>{message}</div>}
    </div>
  );
}
