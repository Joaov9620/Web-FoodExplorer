import React from 'react';
import { useState } from 'react';
import { Container, Button, Input, Label } from './styles';

import { HiOutlineArrowUpTray } from "react-icons/hi2";

export function Slider() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <Container>
      <Label htmlFor="file-input">
        <Button>
          <HiOutlineArrowUpTray/>
          Selecionar arquivo
        </Button>
      </Label>
      <Input id="file-input" type="file" onChange={handleFileInput} />
    </Container>
  );
}


