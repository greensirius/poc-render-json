import React from 'react';
import {renderElement, renderChildren} from './';

type Component = {
  component: any;
  props: any;
  children: Array<Component | string>;
};

type Context = {
  componentContext: Array<Component>;
};

export default function renderPureComponent(props: Context) {
  let {componentContext} = props;
  return (
    <React.Fragment>
      {componentContext.map((renderItem, key) => {
        let {component, props, children} = renderItem;
        return (
          <React.Fragment key={key}>
            {React.createElement(
              renderElement(component),
              {...props},
              renderChildren(children),
            )}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}
