import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://127.0.0.1:8000/api/files/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("File uploaded successfully!");
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message);
      alert("File upload failed! Check console for details.");
    }
  };

  return (
    <div>
      <h2>Upload File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
