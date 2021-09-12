import React from 'react';
import { useGlobalContext } from '../../hooks';

import { Language } from '../../components/UI';
import { Container } from '../../components/layouts';
import { Title } from './styles'

const Settings = () => {
  const { t } = useGlobalContext();
  return (
    <Container>
      <Title>
        {t('screens.settings.title')} 
      </Title>
      <Language />
    </Container>
  );
};

export default Settings;
