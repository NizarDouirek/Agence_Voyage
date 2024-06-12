import React, { useEffect } from 'react';

const JotformScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://form.jotform.com/jsform/241625569998578';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default JotformScript;
