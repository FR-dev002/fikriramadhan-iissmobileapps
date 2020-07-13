import React, {useState, useEffect} from 'react';

export function CustomHooks() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      setLoading();
    };
  }, []);

  return {loading};
}
