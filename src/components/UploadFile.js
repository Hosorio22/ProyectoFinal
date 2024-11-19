import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const UploadFile = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      alert(`File "${file.name}" uploaded successfully!`);
      setFile(null);
    }
  };

  return (
    <div>
      <TextField
        type="file"
        onChange={handleFileChange}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );
};

export default UploadFile;