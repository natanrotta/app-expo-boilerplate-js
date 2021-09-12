import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useGlobalContext } from '../../../hooks';

import { Container, Wrapper, Flag } from './styles'

import pt from '../../../assets/pt.png'
import en from '../../../assets/en.png'
import es from '../../../assets/es.png'

const Language = () => {
  const { changeLanguage, currentLanguage } = useGlobalContext()

  const handleLanguage = (language) => {
    changeLanguage(language)
  }

  const handleSelected = (language) => {
    return currentLanguage === language
  }

  return(
    <Container>
      <TouchableOpacity onPress={() => handleLanguage('pt')}> 
        <Wrapper isSelected={handleSelected('pt')}  >
          <Flag source={pt} />
        </Wrapper>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleLanguage('en')}> 
        <Wrapper isSelected={handleSelected('en')}>
          <Flag source={en} />
        </Wrapper>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleLanguage('es')}> 
        <Wrapper isSelected={handleSelected('es')}>
          <Flag source={es} />
        </Wrapper>
      </TouchableOpacity>
    </Container>
  );
};

export default Language;
