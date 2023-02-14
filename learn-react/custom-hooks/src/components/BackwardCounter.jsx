import { useState, useEffect } from 'react';
import useCounter from '../hooks/useCounter';

import Card from './Card';

const BackwardCounter = () => {
  
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
