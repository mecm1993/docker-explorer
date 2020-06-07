import React from 'react';

interface TyperProps {
  message: string
}

const Typer = ({ message }: TyperProps) => {
  const [text, setText] = React.useState('');
  const speed: number = 20;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping(setText, message, text, speed);
    }, speed);
    return () => clearTimeout(timer);
  }, [text, message]);

  return <div className="typer">{text}</div>
}

const handleTyping = (setText: Function, message: string, text: string, speed: number) => {
  const timer = setTimeout(() => {
    setText(message.substring(0, text.length + 1));
  }, speed);
  return () => clearTimeout(timer);
}

export default Typer;
