import React from 'react';
import {getElement, parseComponentProps, renderChildren} from '.';
import {Context, Component} from './types/generalTypes';
import {ContextProvider} from '../App';

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
    <ContextProvider.Consumer>
      {(context: any) => {
        let {actionHandler} = context;
        return React.createElement(
          getElement(component),
          {...parseComponentProps(component, props, actionHandler)},
          renderChildren(children),
        );
      }}
    </ContextProvider.Consumer>
  );
}
