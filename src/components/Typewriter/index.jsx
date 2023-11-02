import React, { useState, useLayoutEffect } from "react";
import { Typography } from "@mui/material";

export const Typewriter = ({
  text,
  delay = 0,
  variant,
  component,
  typingSpeed = 50,
  classes,
}) => {
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
    if (typingText?.length > 0 && shouldRender) {
      const timeout = setTimeout(() => {
        setContent((prevText) => prevText + typingText[0]);
        setTypingText((prevText) => prevText?.slice(1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      //remove cursor blinking after all letters are rendered
      const timeout = setTimeout(() => {
        const elm = document.getElementById(
          `cursor-${text?.length + text?.slice(0, 4)}`
        );
        elm.classList.remove("animate-blink");
      }, delay / 2);
      return () => clearTimeout(timeout);
    }
  }, [typingText, content, text, shouldRender, delay, typingSpeed]);

  if (!shouldRender) classes += "invisible";

  return (
    <Typography variant={variant} component={component} className={classes}>
      {content}
      <span
        className={!shouldRender ? "invisible" : "invisible animate-blink"}
        id={`cursor-${text?.length + text?.slice(0, 4)}`}
      >
        _
      </span>
    </Typography>
  );
};
