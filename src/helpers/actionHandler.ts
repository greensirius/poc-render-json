import handleDialog from '../actionHandlers/handleDialog';
import logMessage from '../actionHandlers/logMessage';

export default function actionHandler(params: any) {
  switch (params.action) {
    case 'dialog/alert':
      handleDialog(params);
      break;
    case 'log/message':
      logMessage(params);
      break;
    default:
      throw new Error('Action is not defined');
  }
}
