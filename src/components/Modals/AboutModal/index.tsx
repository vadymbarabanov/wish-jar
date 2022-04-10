import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { useStyles } from '../../../helpers/hooks/useStyles';
import { BasicModal, ModalProps } from '../BasicModal';
import { ContentWrapper } from '../ContentWrapper';
import { createStyles } from './styles';

export const AboutModal = ({ visible, setVisible }: ModalProps) => {
  const styles = useStyles(createStyles);
  const { t } = useTranslation('about-modal');

  return (
    <BasicModal visible={visible} setVisible={setVisible}>
      <ContentWrapper closeModal={() => setVisible(false)}>
        <Text style={styles.title}>{t('title')}</Text>
        <Text style={styles.description}>{t('description')}</Text>
        <Text style={styles.version}>{t('version')} 1.0.0</Text>
      </ContentWrapper>
    </BasicModal>
  );
};
