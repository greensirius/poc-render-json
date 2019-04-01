// This parseComponentAttrubutes function will parse props that belongs to each elements
// For example attributes source on Image and onPress on TouchableOpacity

import {ElementType} from './types/generalTypes';

export default function parseComponentAttributes(
  component: ElementType,
  props: any,
  actionHandler: (params: any) => void,
) {
  let {onPress} = props;
  switch (component) {
    case 'Image': {
      return {
        ...props,
        source: {
          uri: props.source,
        },
      };
    }
    case 'Text': {
      return {
        ...props,
      };
    }
    case 'Button': {
      return {
        ...props,
        onPress: () => actionHandler(onPress || {}),
      };
    }
    default:
      return props;
  }
}
