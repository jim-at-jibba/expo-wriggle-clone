import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import PropTypes from 'prop-types';
import { colors } from '../api/constants';

// grab screens
import OffersScreen from '../screens/OffersScreen';
import EventsScreen from '../screens/EventsScreen';
import VenuesScreen from '../screens/VenuesScreen';
import RewardsScreen from '../screens/RewardsScreen';
import AccountScreen from '../screens/AccountScreen';
// grab svg icons

import SvgHome from '../components/icons/Svg.Home';

// Offers Stack
// /////////////////////////////////////////////////////////////////////////////
const OffersStack = createStackNavigator({
  Offers: OffersScreen
});

const OffersTabBarIcon = ({ focused }) => <SvgHome active={focused} />;
OffersTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

OffersStack.navigationOptions = {
  tabBarLabel: 'Offers',
  tabBarIcon: OffersTabBarIcon
};

// Events Stack
// /////////////////////////////////////////////////////////////////////////////
const EventsStack = createStackNavigator({
  Events: EventsScreen
});

const EventsTabBarIcon = ({ focused }) => <SvgHome active={focused} />;
EventsTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

EventsStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarIcon: EventsTabBarIcon
};

// Venues Stack
// /////////////////////////////////////////////////////////////////////////////
const VenuesStack = createStackNavigator({
  Venues: VenuesScreen
});

const VenuesTabBarIcon = ({ focused }) => <SvgHome active={focused} />;
VenuesTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

VenuesStack.navigationOptions = {
  tabBarLabel: 'Venues',
  tabBarIcon: VenuesTabBarIcon
};

// Rewards Stack
// /////////////////////////////////////////////////////////////////////////////
const RewardsStack = createStackNavigator({
  Rewards: RewardsScreen
});

const RewardsTabBarIcon = ({ focused }) => <SvgHome active={focused} />;
RewardsTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

RewardsStack.navigationOptions = {
  tabBarLabel: 'Rewards',
  tabBarIcon: RewardsTabBarIcon
};

// Account Stack
// /////////////////////////////////////////////////////////////////////////////
const AccountStack = createStackNavigator({
  Account: AccountScreen
});

const AccountTabBarIcon = ({ focused }) => <SvgHome active={focused} />;
AccountTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

AccountStack.navigationOptions = {
  tabBarLabel: 'Parp',
  tabBarIcon: AccountTabBarIcon
};

export default createBottomTabNavigator(
  {
    OffersStack,
    EventsStack,
    VenuesStack,
    RewardsStack,
    AccountScreen
  },
  {
    initialRouteName: 'OffersStack',
    tabBarOptions: {
      activeTintColor: colors.brandPrimary,
      inactiveTintColor: colors.grey
    }
  }
);
