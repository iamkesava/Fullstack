import React, { useEffect, useState } from "react";

function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/files/")
      .then((res) => res.json())
      .then((data) => setFiles(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Uploaded Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            <a href={file.file} target="_blank" rel="noopener noreferrer">
              {file.file.split("/").pop()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileList;
