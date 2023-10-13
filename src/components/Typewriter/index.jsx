import React, { useState, useLayoutEffect } from "react";
import { Typography } from "@mui/material";

export const Typewriter = ({ text, delay = 0, variant, component }) => {
  const [content, setContent] = useState("");
  const [typingText, setTypingText] = useState(text);
  const [shouldRender, setShouldRender] = useState(false);

  // check if a delay is needed
  useLayoutEffect(() => {
    if (delay === 0) setShouldRender(true);
    if (delay !== 0) {
      const timeout = setTimeout(() => {
        setShouldRender(true);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [delay]);

  useLayoutEffect(() => {
    // render content for each letter for typing effect
    if (typingText.length > 0 && shouldRender) {
      const timeout = setTimeout(() => {
        setContent((prevText) => prevText + typingText[0]);
        setTypingText((prevText) => prevText.slice(1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      //remove cursor blinking after all letters are rendered
      const timeout = setTimeout(() => {
        const elm = document.getElementById(
          `cursor-${text.length + text.slice(0, 4)}`
        );
        elm.classList.remove("animate-blink");
      }, 1000 + delay);
      return () => clearTimeout(timeout);
    }
  }, [typingText, content, text, shouldRender, delay]);

  if (!shouldRender) return;

  return (
    <Typography variant={variant} component={component} >
      {content}
      <span
        className="invisible animate-blink"
        id={`cursor-${text.length + text.slice(0, 4)}`}
      >
        _
      </span>
    </Typography>
  );
};
