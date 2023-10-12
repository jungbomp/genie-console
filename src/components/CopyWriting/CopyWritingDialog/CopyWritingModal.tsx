import React from 'react';
import Classnames from 'classnames';

import Modal from '@mui/material/Modal';

import CopyWritingWidget from './CopyWritingWidget/CopyWritingWidget';

import type { CopyWritingModalProps } from './CopyWritingModal.types';

import styles from './CopyWritingModal.scss';

const CopyWritingModal: React.FC<CopyWritingModalProps> = ({
  className,
  open = false,
  copyWrite,
  onBackdropClick = () => {},
}) => {
  return (
    <Modal className={Classnames(styles.copyWritingModal, className)} open={open} onClose={onBackdropClick}>
      <CopyWritingWidget copyWrite={copyWrite} />
    </Modal>
  );
};

export default CopyWritingModal;
