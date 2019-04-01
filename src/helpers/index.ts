import actionHandler from './actionHandler';
import getElement from './getElement';
import {Provider, Consumer} from './ActionContext';
import renderChildren from './renderChildren';
import renderPureComponent from './renderPureComponent';
import parseComponentAttributes from './parseComponentAttributes';
import {isElementString, isElementSingleObject} from './isElementDescriptor';

export {
  Provider as ActionProvider,
  Consumer as ActionConsumer,
  actionHandler,
  getElement,
  isElementString,
  isElementSingleObject,
  parseComponentAttributes,
  renderPureComponent,
  renderChildren,
};
