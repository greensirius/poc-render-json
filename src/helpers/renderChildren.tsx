import React from 'react';
import {Text} from 'react-native';
import {renderPureComponent} from '.';
import {PureComponent} from './renderPureComponent';
import {Component} from './types/generalTypes';

export default function renderChildren(child: Array<Component>) {
  if (child && child.length <= 1) {
    if (typeof child[0] === 'string') {
      return <Text>{child[0]}</Text>;
    } else if (
      typeof child[0] === 'object' &&
      child[0].hasOwnProperty('component') &&
      child[0].hasOwnProperty('props') &&
      child[0].hasOwnProperty('children')
    ) {
      return <PureComponent {...child[0]} />;
    } else {
      return;
    }
  }
  if (child && child.length > 1) {
    return renderPureComponent({componentContext: child});
  }
}
