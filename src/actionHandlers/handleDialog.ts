import {Alert} from 'react-native';

export default function handleDialog(task: any) {
  // put the logic function here
  return Alert.alert(task.message);
}
