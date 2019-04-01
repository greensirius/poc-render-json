import React from 'react';
import { View } from 'react-native-web';

import Layout from '../components/layout';

export default () => (
  <Layout>
    <View>
      <h3>Welcome</h3>
      <p>
        Vision is a framework for building user interfaces for Android, iOS and
        Web by authoring pure JSON.
      </p>
      <p>
        Built on React Native (and react-native-web) using TypeScript, this
        project will load a set of configuration files (JSON files) describing
        views, navigation, actions, data models and more. From the
        configuration, a fully function application can be rendered.
      </p>
    </View>
  </Layout>
);
