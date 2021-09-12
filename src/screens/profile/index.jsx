import React from 'react';
import { useGlobalContext } from '../../hooks';

import { Container } from '../../components/layouts';
import { Title } from './styles'

const Profile = () => {
  const { t } = useGlobalContext();

  return (
    <Container>
      <Title>
        {t('screens.profile.title')} 
      </Title>
    </Container>
  );
};

export default Profile;
