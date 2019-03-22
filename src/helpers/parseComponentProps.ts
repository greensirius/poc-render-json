import {actionHandler} from '../helpers';

export default function parseComponentAttributes(
  el: any,
  props: any,
  key: string | number,
) {
  switch (el) {
    case 'Image': {
      return {
        ...props,
        key,
        source: {
          uri: props.source,
        },
      };
    }
    case 'Text': {
      return {
        ...props,
        key,
        onPress: () => actionHandler(props.onPress),
      };
    }
    case 'TouchableOpacity': {
      return {
        ...props,
        key,
        onPress: () => actionHandler(props.onPress),
      };
    }
    default:
      return {...props, key};
  }
}
