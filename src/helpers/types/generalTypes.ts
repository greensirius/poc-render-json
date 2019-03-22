export type Component = {
  component: React.ReactElement<any>;
  props: any;
  children: Array<Component>;
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
