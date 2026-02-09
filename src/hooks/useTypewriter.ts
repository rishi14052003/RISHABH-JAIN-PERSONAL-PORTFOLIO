import { useState, useEffect, useRef } from 'react';
import type { TypewriterProps } from '../types';

/**
 * Custom hook for creating typewriter text animation
 * Cycles through an array of strings with typing, deleting, and pausing
 * Fully customizable speeds and loop behavior
 */
export const useTypewriter = ({
  strings,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  loop = true,
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const currentString = strings[currentStringIndex];
    
    if (!currentString) {
      setDisplayText('');
      return;
    }

    const handleTyping = () => {
      if (isPaused) {
        // Resume from pause
        setIsPaused(false);
        if (loop || currentStringIndex < strings.length - 1) {
          setIsDeleting(true);
        }
        return;
      }

      if (isDeleting) {
        // Deleting text
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
          timeoutRef.current = setTimeout(handleTyping, deletingSpeed);
        } else {
          // Finished deleting, move to next string
          setIsDeleting(false);
          if (currentStringIndex < strings.length - 1) {
            setCurrentStringIndex(prev => prev + 1);
          } else if (loop) {
            setCurrentStringIndex(0);
          }
        }
      } else {
        // Typing text
        if (displayText.length < currentString.length) {
          setDisplayText(prev => currentString.slice(0, prev.length + 1));
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        } else {
          // Finished typing, pause before deleting
          setIsPaused(true);
          timeoutRef.current = setTimeout(handleTyping, pauseDuration);
        }
      }
    };

    // Start the typing animation
    timeoutRef.current = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    strings,
    currentStringIndex,
    displayText,
    isDeleting,
    isPaused,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    loop,
  ]);

  // Reset when strings change
  useEffect(() => {
    setDisplayText('');
    setCurrentStringIndex(0);
    setIsDeleting(false);
    setIsPaused(false);
  }, [strings]);

  return {
    text: displayText,
    currentString: strings[currentStringIndex] || '',
    isTyping: !isDeleting && !isPaused,
    isDeleting,
    isPaused,
    progress: strings[currentStringIndex] 
      ? (displayText.length / strings[currentStringIndex].length) * 100 
      : 0,
  };
};

export default useTypewriter;
