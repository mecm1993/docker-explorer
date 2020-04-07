import React from 'react';

interface TyperProps {
  message: string[]
}

const Typer = ({ message }: TyperProps) => {
  const [text, setText] = React.useState('');
  const [speed, setSpeed] = React.useState(150);
  const [loop, setLoop] = React.useState(0);

  const i: number = loop % message.length;
  const fullText: string = message[i];

  const handleTyping = () => {
    setText(fullText.substring(0, text.length + 1));
    setSpeed(30);
    setLoop(loop + 1);
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, speed);
    return () => clearTimeout(timer);
  });

  return <div className="typer">{text}</div>
}

export default Typer;
