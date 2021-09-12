import React from 'react';
import { useGlobalContext } from '../../hooks';

import { Container } from '../../components/layouts';
import { Title } from './styles'

const Home = () => {
  const { t } = useGlobalContext();

  return (
    <Container>
      <Title>
        {t('screens.home.title')}
      </Title>
    </Container>
  );
};

export default Home;
