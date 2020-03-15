import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import Home from './Home';

export default () => {
  useFocusEffect(
    useCallback(() => {
      console.log('Focus home screen');
      return () => {
        console.log('Unfocus home screen');
      };
    }, []),
  );

  return <Home />;
};
