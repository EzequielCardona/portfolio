import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useAppSelector } from '../../../redux/hooks';
import { languageSelectors } from '../../../redux/language';
import flagSpain from '../../../assets/spain-flag.png';
import flagUsa from '../../../assets/usa-flag.png';
import flagFrance from '../../../assets/france-flag.png';
import { LanguageOptions } from './LanguageOptions';
import { languageTypes } from '../../../types';

// TODO: locate this type and mapping
export interface ILangSelections {
  language: languageTypes;
  flag: string;
}

const langFlagMapping: ILangSelections[] = [
  {
    language: languageTypes.english,
    flag: flagUsa,
  },
  {
    language: languageTypes.spanish,
    flag: flagSpain,
  },
  {
    language: languageTypes.french,
    flag: flagFrance,
  },
];

interface IProps {
  isMobile?: boolean;
}

export function LanguageToggle({ isMobile }: IProps) {
  const languageSelected = useAppSelector(languageSelectors.language);
  const [langOptionsDisplayed, setLangOptionsDisplayed] = useState(false);
  const [flagToDisplay, setFlagToDisplay] = useState(flagUsa);

  useEffect(() => {
    let flag = '';

    if (languageSelected === languageTypes.spanish) {
      flag = flagSpain;
    } else if (languageSelected === languageTypes.french) {
      flag = flagFrance;
    } else if (languageSelected === languageTypes.english) {
      flag = flagUsa;
    }

    setFlagToDisplay(flag);
  }, [languageSelected]);

  const handleMobileCloseChild = () => {
    setLangOptionsDisplayed(false);
  };

  const getLanguageOptionsAvailable = () => {
    return langFlagMapping.filter(
      (langObj) => langObj.language !== languageSelected,
    );
  };

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        border: `2px solid ${theme.palette.primary.darker}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '.1rem',
        borderRadius: '50%',
        width: '2rem',
        height: '2rem',
        position: 'relative',
        ':hover': {
          border: `2px solid ${theme.palette.text.secondary}`,
        },
      })}
      onMouseOver={() => setLangOptionsDisplayed(true)}
      onMouseOut={() => setLangOptionsDisplayed(false)}
    >
      <img src={flagToDisplay} alt="language flag" width={35} height={35} />
      <LanguageOptions
        isDisplaying={langOptionsDisplayed}
        options={getLanguageOptionsAvailable()}
        mobileCloseThis={handleMobileCloseChild}
        isMobile={isMobile}
      />
    </Box>
  );
}
