import React, { useState } from 'react';
import Box from '@mui/material/Box';
import type { HomeProps } from './Home.types';
import styles from './Home.scss';
import genieHome from '../../../public/assets/images/genieHomeDashboard.png';
import onHold from '../../../public/assets/images/onhold.png';

const Home: React.FC<HomeProps> = () => {
  const [showHomeModal, setShowHomeModal] = useState<boolean>(false);
  const toggleModal = () => {
    console.log('toggle');
    setShowHomeModal(!showHomeModal);
  };
  return (
    <Box className={styles.home} onClick={toggleModal}>
      <Box className={styles.container}>
        <img src={genieHome} alt='geniehome' />
        {showHomeModal && (
          <div className={styles.modal}>
            <div className={styles.overlay} />
            <div className={styles.modalcontent}>
              <img src={onHold} alt='onhold' />
            </div>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default Home;
