import { useState, useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import type { AnimationProps } from '../types';

interface UseScrollAnimationReturn<T extends HTMLElement = HTMLElement> {
  ref: RefObject<T | null>;
  isVisible: boolean;
  hasAnimated: boolean;
}

/**
 * Custom hook for triggering animations when elements enter the viewport
 * Uses Intersection Observer API for optimal performance
 * Supports mobile devices and respects prefers-reduced-motion
 */
export const useScrollAnimation = <T extends HTMLElement = HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: AnimationProps = {}): UseScrollAnimationReturn<T> => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          
          // Stop observing if triggerOnce is true
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
        // Use viewport as root
        root: null,
      }
    );

    // Start observing the element
    observer.observe(element);

    // Cleanup
    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return {
    ref,
    isVisible,
    hasAnimated,
  };
};

export default useScrollAnimation;
