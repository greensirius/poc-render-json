import {ReactNode} from 'react';
import RootComp from '../core-ui';
import {ElementType} from './types/generalTypes';

export default function getElement(el: ElementType): ReactNode {
  return RootComp[el];
}
