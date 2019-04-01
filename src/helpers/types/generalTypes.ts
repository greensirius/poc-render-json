export type Component = {
  component: ElementType;
  props: any;
  children: Array<Element>;
};

export type ElementType =
  | 'Button'
  | 'Link'
  | 'Image'
  | 'Text'
  | 'TextInput'
  | 'View';

export type Context = {
  componentContext: Array<Component>;
};
