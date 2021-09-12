import { useContext } from 'react'
import { I18nContext } from '../../i18n'

const useGlobalContext = () => {
  const { language: currentLanguage, changeLanguage, t } = useContext(I18nContext)
  
  return {
    t,
    currentLanguage,
    changeLanguage,
  }
}

export default useGlobalContext
