/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import AppCenter from 'appcenter';
import Analytics from "appcenter-analytics";
import Crashes from "appcenter-crashes";
import Push from 'appcenter-push';
import React, { Component } from 'react';
import {
  AppState,
  Button,
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

Analytics.trackEvent('Video clicked', { Category: 'Music', FileName: 'favorite.avi' });
Analytics.trackEvent('nhndhjdjdryjdrjdrjdrjdr', { Category: 'jrjdrjdjdrjdrjdr', FileName: 'jryjdrjrdjdrjdjdjdrjdjdjdyjdr.avi' });
//Analytics.trackEvent('clicked');
export default class iosreact725 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
        </Text>
                <Button
                    title="crash"
                    color="red"
                    onPress={onCrash}
                >
                </Button>   
                <Button
                    title="click"
                    color="green"
                    onPress={onClick}
                >
                </Button>
            </View>
        );
    }
}
//generateTestCrash
function onCrash() {
    throw new Error("This is a test JavaScript Crash");
}
 //generate install ID
async function onClick() {
    const installId = await AppCenter.getInstallId();
    Alert.alert(installId);
}
//Analytics.trackEvent('Video clicked', { Category: 'Music', FileName: 'favorite.avi' });
//Analytics.trackEvent('clicked');
Push.setListener({
    onPushNotificationReceived: function (pushNotification) {
      let message = pushNotification.message;
      let title = pushNotification.title;
  
      if (message === null || message === undefined) {
        // Android messages received in the background don't include a message. On Android, that fact can be used to
        // check if the message was received in the background or foreground. For iOS the message is always present.
        title = "Android background";
        message = "<empty>";
      }
  
      // Custom name/value pairs set in the App Center web portal are in customProperties
      if (pushNotification.customProperties && Object.keys(pushNotification.customProperties).length > 0) {
        message += '\nCustom properties:\n' + JSON.stringify(pushNotification.customProperties);
      }
  
      if (AppState.currentState === 'active') {
        Alert.alert(title, message);
      }
      else {
        // Sometimes the push callback is received shortly before the app is fully active in the foreground.
        // In this case you'll want to save off the notification info and wait until the app is fully shown
        // in the foreground before displaying any UI. You could use AppState.addEventListener to be notified
        // when the app is fully in the foreground.
      }
    }
  });
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('iosreact725', () => iosreact725);