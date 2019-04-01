import React from 'react';
import {Text} from 'react-native';
import {renderPureComponent} from '.';
import {PureComponent} from './renderPureComponent';
import {Component} from './types/generalTypes';
import {isElementSingleObject, isElementString} from './isElementDescriptor';

export default function renderChildren(child: Array<Component>) {
  if (child && child.length <= 1) {
    if (isElementString(child[0])) {
      return <Text>{child[0]}</Text>;
    } else if (isElementSingleObject(child[0])) {
      return <PureComponent {...child[0]} />;
    } else {
      return;
    }
  }
  if (child && child.length > 1) {
    return renderPureComponent({componentContext: child});
  }
}
