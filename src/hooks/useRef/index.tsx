/**
 * Use Cases for useRef in React and TypeScript
 * 
 * 1. Accessing DOM Elements
 */

/**
 * One of the most common use cases for useRef is to gain direct access to DOM elements.
 * This is useful for tasks like focusing an input field or measuring the dimensions of an element:
 */

import React, { useRef, useEffect } from 'react';

function AutoFocusInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} />;
}

export default AutoFocusInput;

/**
 * 2. Storing Previous Values
 * useRef can be used to store and compare previous values across renders. 
 * This is useful for detecting changes in props or state:
 */

