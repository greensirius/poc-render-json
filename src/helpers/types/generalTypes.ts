import React from 'react';

export type Component = {
  component: React.ReactNode | ElementType;
  props: any;
  children: Array<Element>;
};

export type ElementType =
  | 'View'
  | 'Text'
  | 'Image'
  | 'TextInput'
  | 'Link'
  | 'TouchableOpacity';

export type Context = {
  componentContext: Array<Component>;
};
