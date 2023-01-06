import React, { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/', { replace: true });
  }, []);

  return <Fragment></Fragment>;
};

export { NotFound as default };
