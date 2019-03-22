import dialog from '../actions/dialog';
export default function actionHandler(params: any) {
  switch (params.action) {
    case 'dialog/show':
      return dialog(params);
    default:
      break;
  }
  return;
}
