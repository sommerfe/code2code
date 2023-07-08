'use client'

import React, { FunctionComponent, useEffect } from 'react'
import Prism from 'prismjs'
import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/components/prism-javascript"
import "prismjs/components/prism-python"

const CodeSnippet: FunctionComponent<{language: string, code: string}> = ({ language, code }) => {
  useEffect(() => {
    // Call Prism.highlightAll() after the component has rendered to apply syntax highlighting
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeSnippet;