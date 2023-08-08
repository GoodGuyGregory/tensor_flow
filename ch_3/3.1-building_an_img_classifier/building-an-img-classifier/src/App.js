import './App.css';
import "@tensorflow/tfjs";
import "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";

async function loadModel() {
  const model = await tf.loadModel.load("http://localhost:3000/model.json");
  return model;
}



function App() {
  return (
    <div className="App">
    { loadModel ? (
      <div className="loaded">
        <video></video>
      </div>
    ) : (
      <div className="loading">
        <p>check console for model details</p>
      </div>
    )}
    </div>
  );
}

export default App;
