import * as React from 'react';
import {ComponentProps} from 'react';
import {StyleSheet, Text} from 'react-native';
import theme from '../lib/theme';

type Props = ComponentProps<typeof Text> & {
  href?: string;
};

export default function Link(props: Props) {
  return (
    <Text
      {...props}
      target="_blank"
      accessibilityRole="link"
      style={[styles.link, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  link: {
    color: theme.colors.link,
    textDecorationLine: 'underline',
  },
});
