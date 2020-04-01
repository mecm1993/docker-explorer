import React, { useState, useEffect } from 'react';

interface TyperProps {
    message: string[]
}

const Typer = ({ message }: TyperProps) => {
  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(150);
  const [loop, setLoop] = useState(0);

  const i: number = loop % message.length;
  const fullText: string = message[i];

  const handleTyping = () => {
    setText(fullText.substring(0, text.length + 1));
    setSpeed(30);
    setLoop(loop + 1);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, speed);
    return () => clearTimeout(timer);
  })

  return <span>{text}</span>
}

export default Typer;
