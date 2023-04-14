import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS from '../../constants/colors';
import {
  HistoryScreenStack,
  ProfileScreenStack,
  LoginStack,
  RegisterStack,
  MyHistoryScreenStack,
} from './Stack';

// Icons
import HomeIcon from 'react-native-vector-icons/Foundation';
import HistoryIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileIcon from 'react-native-vector-icons/Ionicons';
import HistoryPage from '../../pages/HistoryScreen';

// Create tab navigator
const Tab = createBottomTabNavigator();

export default HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.tabActive,
        tabBarInactiveTintColor: COLORS.tabBar,
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HistoryScreenStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {fontSize: 12, fontWeight: 700},
          tabBarIcon: ({focused, color, size}) => (
            <HomeIcon
              name="home"
              size={30}
              color={focused ? COLORS.tabActive : COLORS.tabBar}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HistoryTab"
        component={MyHistoryScreenStack}
        options={{
          headerShown: false,
          tabBarLabel: 'History',
          tabBarLabelStyle: {fontSize: 12, fontWeight: 700},
          tabBarIcon: ({focused, color, size}) => (
            <HistoryIcon
              name="history"
              size={30}
              color={focused ? COLORS.tabActive : COLORS.tabBar}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreenStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {fontSize: 12, fontWeight: 700},
          tabBarIcon: ({focused, color, size}) => (
            <ProfileIcon
              name="md-person-circle-outline"
              size={30}
              color={focused ? COLORS.tabActive : COLORS.tabBar}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
