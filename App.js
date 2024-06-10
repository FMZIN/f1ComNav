import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Conquistas from './components/Conquistas';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tabs = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Tabs.Navigator
          screenOptions={{
            tabBarStyle:{
              backgroundColor: "#eab990"
            },
            tabBarLabelStyle:{
              fontSize: 13,
            },
            tabBarActiveTintColor:"#c42a17",
            tabBarInactiveTintColor:"#ffffff",

            tabBarActiveBackgroundColor:"#ffffff",
            tabBarInactiveBackgroundColor:"#c42a17",
            
          }}
        >
          <Tabs.Screen name='Home' component={Home}
            options={{
              tabBarIcon:()=>(
                <Icon name="home" size={20} color="#fff" />
            )
          }}
          />
          <Tabs.Screen name='Sobre' component={Sobre}
          options={{
            tabBarIcon:()=>(
              <Icon name="info" size={20} color="#fff" />
          )
        }}
          />
          <Tabs.Screen name='Conquistas' component={Conquistas}
          options={{
            tabBarIcon:()=>(
              <Icon name="trophy" size={20} color="#fff" />
          )
        }}
          />
        </Tabs.Navigator>
    </NavigationContainer>
  );
}