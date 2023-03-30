import React, { useEffect, useState } from "react";
import Service from "../utils/Service";
import StepByStepGuide from "./Steps";

const Main = () => {
  const [result, setResult] = useState([]);
  const [text, setText] = useState(localStorage.getItem("text") || "");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setText(value);
  };

  const handleButtonClick = () => {
    localStorage.setItem("token", text);
  };
  const handleRefreshClick = () => {
    window.location.reload();
  };
  useEffect(() => {
    Service.result()
      .then((res) => {
        setResult(res.data.marks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const steps = [
    {
      title: "Login To School works pro",
      image: "/assets/login.png",
      description: "",
    },
    {
      title: "Go to Inspect",
      image: "/assets/step1.png",
      description:
        "Right click and go to inspect, click on the arrow button and open Application",
    },

    {
      title: "Open local storage ",
      image: "/assets/step3.png",
      description:
        "Expand(if it is not) and Click on https.//schoolworkspro.com",
    },
    {
      title: "Copy Value from :tatwj",
      image: "/assets/step4.png",
      description:
        " Copy the token from :tawj as highlighted in the image, and paste it on the text field above",
    },
  ];
  return (
    <div>
      <div>
        <div>
          <div className="">
            Enter Your token here, Refresh after submitting
          </div>
          <input type="text" value={text} style={{width:"700px"}} onChange={handleInputChange} />
          <button onClick={handleButtonClick}>Submit</button>
          <button onClick={handleRefreshClick}>Refresh</button>
        </div>
        <div>
          <h2>Result</h2>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>CR</th>
                <th>MM</th>
                <th>GD</th>
                <th>CW</th>
              </tr>
            </thead>
            <tbody>
              {result &&
                result.length > 0 &&
                result.map((item) => (
                  <tr key={item._id}>
                    <td>{item.moduleTitle}</td>
                    <td>{item.Cr}</td>
                    <td>{item.Mm}</td>
                    <td>{item.Gd}</td>
                    <td>{item.Cw}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="App">
          <StepByStepGuide steps={steps} />
        </div>
      </div>
    </div>
  );
};

export default Main;
