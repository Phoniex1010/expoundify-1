import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import { faBarChart } from '@fortawesome/free-regular-svg-icons';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Settings from './pages/Settings';
import Search from './pages/Search';

const Tabs = createBottomTabNavigator()

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', backgroundColor:'#1E1E1E' }}>
      {state.routes.map((route, index) => {
        const selected = state.index == index
        console.log(selected)
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, padding: 12 }}
          >
            <FontAwesome name={options.icon} color={selected ? "#0466c8" : "white"} size={32} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

//This is the main tab navigator
export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{headerStyle: {backgroundColor: "#1E1E1E"}, headerShadowVisible: false, headerTitleStyle: { color: "white"}}} initialRouteName='Home' tabBar={(props) => <MyTabBar {...props} />}>
        <Tabs.Screen  name="Home" options={{icon: "home"}} children={Home}></Tabs.Screen>
        <Tabs.Screen name="Statistics" options={{icon: "bar-chart"}} children={Stats}></Tabs.Screen>
        <Tabs.Screen name="Settings" options={{icon: "gear"}} children={Settings}></Tabs.Screen>
        <Tabs.Screen name="Search" options={{icon: "magnifying-glass"}} children={Search}></Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
