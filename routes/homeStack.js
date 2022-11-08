import { createAppContainer } from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";
import 'react-native-gesture-handler';
import Home from '../screens/home';
import Game from '../screens/game';
import Score from  '../screens/score';
import About_ from '../screens/about';

const screens = {
    home:{
        screen : Home,
      navigationOptions:{
        title :'HOME'
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