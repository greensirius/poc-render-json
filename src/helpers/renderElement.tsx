import React from 'react';
import * as RootComp from 'react-native';

export default function renderElement(el: string): React.ReactElement<any> {
  return RootComp[el];
}
