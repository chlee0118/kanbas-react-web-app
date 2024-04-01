import React, { useEffect, useState } from "react";
import axios from "axios"

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const buttonStyle = {
    padding: '10px 15px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    backgroundColor: 'blue',
    textDecoration: 'none',
    display: 'inline-block'
  };
  const secondButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'red',
  };
  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:4000/a5/welcome");
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);
  const [result, setResult] = useState(0);
  const fetchSum = async (a: any, b: any) => {
    const response = await
      axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a: any, b: any) => {
    const response = await axios.get(
      `http://localhost:4000/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };

  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>
      <h4>Calculator</h4>
      <input 
        type="number" 
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        style={{ padding: '5px', marginRight: '5px' }}
      />
      <input 
        type="number" 
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        style={{ padding: '5px', marginRight: '5px' }}
      />
      <h3>Fetch Result</h3>
      <input value={result} type="number" readOnly />
      <button onClick={() => fetchSum(a, b)} >
        Fetch Sum of {a} + {b}
      </button>
      <button onClick={() => fetchSubtraction(a, b)} >
        Fetch Substraction of {a} - {b}
      </button>
      <h3>Path Parameters</h3>
      <a href={`http://localhost:4000/a5/add/${a}/${b}`}
         style={buttonStyle}>
        Add {a} + {b}
      </a>
      <a href={`http://localhost:4000/a5/subtract/${a}/${b}`}
         style={secondButtonStyle}>
        Subtract {a} - {b}
      </a>
      <a href={`http://localhost:4000/a5/multiply/${a}/${b}`}
         style={buttonStyle}>
        Multiply {a} * {b}
      </a>
      <a href={`http://localhost:4000/a5/divide/${a}/${b}`}
         style={secondButtonStyle}>
        Divide {a} / {b}
      </a>

      <h3>Query Parameters</h3>
        <a
        href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}
        style={buttonStyle}>
        Add {a} + {b}
        </a>
        <a
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}
        style={secondButtonStyle}>
        Substract {a} - {b}
        </a>
        <a
        href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}
        style={buttonStyle}>
        Multiply {a} * {b}
        </a>
        <a
        href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}
        style={secondButtonStyle}>
        Divide {a} / {b}
        </a>
    </div>
  );
}
export default EncodingParametersInURLs;