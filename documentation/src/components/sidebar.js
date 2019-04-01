import React from 'react';
import { View, StyleSheet } from 'react-native-web';
import { Link, StaticQuery, graphql } from 'gatsby';

let query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        fields {
          slug
        }
      }
    }
  }
`;

export default function Sidebar() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <View style={styles.root}>
          <Link to="/">Getting Started</Link>
          {data.allMarkdownRemark.nodes.map((node, i) => (
            <Link to={node.fields.slug} key={i}>
              {node.fields.slug.replace(/\//g, '')}
            </Link>
          ))}
        </View>
      )}
    />
  );
}

let styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderColor: '#ececec',
    borderRightWidth: 1,
  },
});
