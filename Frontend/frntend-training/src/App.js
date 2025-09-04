import React from "react";
import FileUpload from "./FileUpload";
import FileList from "./FileList";

function App() {
  return (
    <div className="App">
      <h1>File Upload & Download</h1>
      <FileUpload />
      <FileList />
    </div>
  );
}

export default App;
