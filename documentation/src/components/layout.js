import React from 'react';
import { View } from 'react-native-web';

import Header from './header';
import Sidebar from './sidebar';

export default ({ children }) => (
  <View style={{ minHeight: '100vh' }}>
    <Header />
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Sidebar />
      <View style={{ flex: 1, paddingHorizontal: 50 }}>{children}</View>
    </View>
  </View>
);
