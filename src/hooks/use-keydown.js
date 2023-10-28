import React from 'react';

function useKeydown(key, callback) {
  React.useEffect(() => {
    function handleKeydown(e) {
      if (e.code === key) {
        callback(e);
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [key, callback]);
}

export default useKeydown;
