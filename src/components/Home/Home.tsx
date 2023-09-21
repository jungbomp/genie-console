import React from 'react';
import type { HomeProps } from './Home.types';

const Home: React.FC<HomeProps> = ({ className }) => {
  return <div className={className} />;
};

export default Home;
