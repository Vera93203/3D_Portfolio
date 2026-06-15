import { useState, useEffect } from 'react';

export function useTypewriter(phrases: string[], typingSpeed = 60, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (!isDeleting && charIndex <= current.length) {
      const timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex > current.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setCharIndex((c) => c - 1);
        setDisplayText(current.slice(0, charIndex - 1));
      }, typingSpeed / 2);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }
  }, [charIndex, isDeleting, phraseIndex, phrases, typingSpeed, pauseDuration]);

  return displayText;
}
