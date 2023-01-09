import { createAppContainer } from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";
import 'react-native-gesture-handler';
import Home from '../screens/home';
import Game from '../screens/game';
import Score from  '../screens/score';
import About_ from '../screens/about';
import testing from "../screens/testing";
import Kopp from "../screens/kopyokan";

const screens = {
    home:{
        screen : Home,
      navigationOptions:{
        title:'',
        headerStyle :{ backgroundColor:'orange',height: 40}
      }    
    },
    Mulai:{
        screen : Game,
        navigationOptions:{
            title:'GAME POP UP'
        }
    },
    
    "Top Score":{
        screen : Score
    },
    'About Game':{
        screen:About_
    },
    'test_layout':{
        screen:testing
    },
    'Setting':{
        screen: Kopp
    }
}

const home =  createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor :'#444',
        headerStyle :{ backgroundColor:'#ADD8E6',height: 40}
    },
    navigationOptions:{
        
    }
});

export default createAppContainer(home);