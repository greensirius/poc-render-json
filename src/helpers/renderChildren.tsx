import React from 'react';
import {Text} from 'react-native';
import {renderElement, renderPureComponent} from './';

type Component = {
  component: any;
  props: any;
  children: Array<Component>;
};

export default function renderChildren(child: Array<Component>) {
  if (child && child.length === 1) {
    if (typeof child[0] === 'string') {
      return <Text>{child[0]}</Text>;
    } else {
      let {component, props, children} = child[0];
      return React.createElement(
        renderElement(component),
        {...props},
        children,
      );
    }
  }
  if (child && child.length > 1) {
    return renderPureComponent({componentContext: child});
  }
}
