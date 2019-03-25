// This parseComponentAttrubutes function will parse props that belongs to each elements
// For example attributes source on Image and onPress on TouchableOpacity

import {ElementType} from './types/generalTypes';

export default function parseComponentAttributes(
  el: ElementType,
  props: any,
  actionHandler: (params: any) => void,
) {
  let {onTap} = props;
  switch (el) {
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
    case 'TouchableOpacity': {
      return {
        ...props,
        onPress: () => actionHandler(onTap || {}),
      };
    }
    default:
      return props;
  }
}
