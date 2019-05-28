import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';
import { utilStyles } from '../api/constants';

// grab component
import Touch from '../components/Touch';

const AccountScreen = ({ navigation }) => (
  <SafeAreaView style={utilStyles.container}>
    <ScrollView contentContainerStyle={utilStyles.contentContainer}>
      <Text style={utilStyles.text}>Account Content Area</Text>

      <View style={utilStyles.spacer80} />

      <Touch
        onPress={() => navigation.navigate('Events')}
        text="jump to Events tab"
      />
    </ScrollView>
  </SafeAreaView>
);

AccountScreen.navigationOptions = {
  header: null
};

AccountScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default AccountScreen;
