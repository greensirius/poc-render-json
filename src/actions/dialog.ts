import {Alert} from 'react-native';

export default function dialog(task: any) {
  let {action, message} = task;
  switch (action) {
    case 'dialog/alert':
      return Alert.alert(message); // put the logic function here
    default:
      return Alert.alert('Action is not defined');
  }
}
