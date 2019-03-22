import React from 'react';
import {Text} from 'react-native';
import {getElement, renderPureComponent} from '.';
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
      let {component, props, children} = child[0];
      return React.createElement(getElement(component), {...props}, children);
    } else {
      return;
    }
  }
  if (child && child.length > 1) {
    console.log('Child Array Of Objects : ', child);
    return renderPureComponent({componentContext: child});
  }
}
