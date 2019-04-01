import React from 'react';
import {getElement, parseComponentAttributes, renderChildren} from '.';
import {Component, Context} from './types/generalTypes';
import {ActionConsumer} from '../helpers';

export default function renderPureComponent(context: Context): any {
  let {componentContext} = context;
  let renderItem = componentContext.map((item, key) => (
    <PureComponent {...item} key={key} />
  ));
  return renderItem;
}

export function PureComponent(compProps: Component) {
  let {component, props, children} = compProps;
  return (
    <ActionConsumer>
      {(context: any) => {
        let {actionHandler} = context;
        return React.createElement(
          getElement(component),
          {...parseComponentAttributes(component, props, actionHandler)},
          renderChildren(children),
        );
      }}
    </ActionConsumer>
  );
}
