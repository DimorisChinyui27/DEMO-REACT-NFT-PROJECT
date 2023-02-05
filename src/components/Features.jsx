import React from 'react';
import assets from '../assets';
import styles from '../styles/Global';
import Iframe from 'react-iframe'

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Trailer- The Beauty of the Beast</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>The Continental GT prowling the dark streets of London, before plunging through a tunnel into daylight and emerging in the countryside as a GT Convertible.</p>
        </div>

        <div className={`${styles.flexWrap}`}>
        <iframe src="https://www.youtube.com/embed/nCwzd1Fvki0"
         frameborder="0"
         className='videoframed'
         title='example'
         allow="autoplay"
         allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Features