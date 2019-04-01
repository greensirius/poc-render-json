import * as React from 'react';
import {ActionProvider, actionHandler, renderPureComponent} from './helpers';
import scene from './app/Scene.json';

class App extends React.Component {
  render() {
    return (
      <ActionProvider value={{actionHandler}}>
        {renderPureComponent({componentContext: scene.render})}
      </ActionProvider>
    );
  }
}

export default App;
