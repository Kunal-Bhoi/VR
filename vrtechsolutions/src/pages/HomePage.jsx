import React from 'react';
import IntroPageComponent from '../components/IntroPage';
import HomeFeaturesComponent from '../components/Home'; // Renamed import from your Home.jsx

const HomePage = () => {
  return (
    <>
      <IntroPageComponent />
      <HomeFeaturesComponent />
    </>
  );
};

export default HomePage;