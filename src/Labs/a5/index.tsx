import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
    const welcomeButtonStyle = {
        padding: '10px 15px',
        margin: '5px',
        border: '1px solid black',
        borderRadius: '5px',
        color: 'black',
        backgroundColor: 'white',
        textDecoration: 'none',
        display: 'inline-block'
      };

    return (
      <div>
        <h1>Assignment 5</h1>
        <a href="http://localhost:4000/a5/welcome" style={welcomeButtonStyle}>
          Welcome
        </a>
        <EncodingParametersInURLs/>
        <WorkingWithObjects />
        <WorkingWithArrays />
      </div>
    );
  }
  export default Assignment5;