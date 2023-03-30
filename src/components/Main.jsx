import React, { useEffect, useState } from "react";
import Service from "../utils/Service";

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

  useEffect(() => {
    Service.result()
      .then((res) => {
        setResult(res.data.marks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <div>
          <div className="">Enter Your token here</div>
          <input type="text" value={text} onChange={handleInputChange} />
          <button onClick={handleButtonClick}>Submit</button>
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
              {result.map((item) => (
                <tr key={item.id}>
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
      </div>
    </div>
  );
};

export default Main;
