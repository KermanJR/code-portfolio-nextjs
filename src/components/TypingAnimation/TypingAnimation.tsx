import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  loop?: boolean;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 50, loop = true }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (loop) {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setIndex(0);
      }, speed * 200); // Pausa antes de reiniciar
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, loop]);

  return (
    <span>
      {displayText}
      <span style={{ opacity: blink ? 1 : 0 }}>|</span>
    </span>
  );
};

export default TypingAnimation;
