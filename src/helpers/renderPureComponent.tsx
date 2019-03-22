import React from 'react';
import {getElement, parseComponentProps, renderChildren} from './';
import {Context} from './types/generalTypes';

export default function renderPureComponent(compProps: Context): any {
  let {componentContext} = compProps;
  const renderItems = componentContext.map((item, idx) => {
    let {component, props, children} = item;
    return React.createElement(
      getElement(component),
      {...parseComponentProps(component, props, idx)},
      renderChildren(children),
    );
  });
  return renderItems;
}
