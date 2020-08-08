import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Profile = ({ navigation }) => {
  const githubUsername = navigation.getParam('github_username');
  
  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: `https://github.com/${githubUsername}`}}
    />
  );
};

export default Profile;