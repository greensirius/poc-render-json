import {actionHandler} from '../helpers';

export default function parseComponentAttributes(
  el: any,
  props: any,
  key: string | number,
) {
  let {onTap} = props;
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
        onPress: () => actionHandler(onTap || {}),
      };
    }
    case 'TouchableOpacity': {
      return {
        ...props,
        key,
        onPress: () => actionHandler(onTap || {}),
      };
    }
    default:
      return {...props, key};
  }
}
