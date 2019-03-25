import handleDialog from '../actions/handleDialog';
import logMessage from '../actions/logMessage';

export default function actionHandler(params: any) {
  let fn = params.action.split('/');
  switch (params.action) {
    case 'dialog/alert':
      handleDialog(params);
      break;
    case 'call/log-message':
      logMessage(params);
      break;
    default:
      throw new Error('Action is not defined');
  }
}
