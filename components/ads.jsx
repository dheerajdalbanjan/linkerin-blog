import React, { useEffect } from 'react';

const Ads = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//pl19542384.highrevenuegate.com/be0c0c88f202ea8115fd0972c4136a88/invoke.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.getElementById('container-be0c0c88f202ea8115fd0972c4136a88').appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.getElementById('container-be0c0c88f202ea8115fd0972c4136a88').innerHTML = '';
    };
  }, []);

  return <div id="container-be0c0c88f202ea8115fd0972c4136a88"></div>;
};

export default Ads