import React, { useState } from 'react';
import Box from '@mui/material/Box';

import styles from './GenieChat.scss';
import { GenieChatProps } from './GenieChat.types';
import genieChat from '../../../public/assets/images/genieChat.png';
import onHold from '../../../public/assets/images/onhold.png';

const GenieChat: React.FC<GenieChatProps> = () => {
  const [showChatModal, setShowChatModal] = useState<boolean>(false);
  const toggleModal = () => {
    setShowChatModal(!showChatModal);
  };
  return (
    <Box className={styles.genieChat} onClick={toggleModal}>
      <Box className={styles.container}>
        <img src={genieChat} alt='geniechat' />
        {showChatModal && (
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

export default GenieChat;
