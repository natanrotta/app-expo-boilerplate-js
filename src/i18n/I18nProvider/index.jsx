import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Platform, NativeModules } from 'react-native';

import I18nContext from '../I18nContext';
import locales from '../locales';

const I18nProvider = ({ children }) => {

  const [language, setLanguage] = useState(() => {
    const navigatorLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
        : NativeModules.I18nManager.localeIdentifier;
    return navigatorLanguage.split('_')[0];
  });

  const translation = translation => {
    return locales[language]
      ? locales[language][translation]
      : locales.en[translation];
  };

  const changeLanguage = language => {
    setLanguage(language.split('_')[0]);
  };

  const contextData = {
    language,
    changeLanguage,
    t: translation,
  };

  return (
    <I18nContext.Provider value={contextData}>
      {children}
    </I18nContext.Provider>
  );
};

I18nProvider.propTypes = {
  children: PropTypes.any,
};

export default I18nProvider;
