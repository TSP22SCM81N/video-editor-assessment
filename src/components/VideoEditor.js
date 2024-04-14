import React, { useState } from 'react';
import './videoEditor.css';

function VideoEditor() {
  const [videoFile, setVideoFile] = useState(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  return (
    <div className="video-editor">
      <h1 style={{color: 'red', marginTop:'40px'}}>Video Editor</h1>
      <input type="file" accept="video/*" onChange={handleVideoUpload} style={{marginLeft: '50px', padding:'10px'}} />
      {videoFile && (
        <div>
          <h2>Selected Video:</h2>
          <video controls>
            <source src={URL.createObjectURL(videoFile)} type={videoFile.type} />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default VideoEditor;