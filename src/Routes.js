import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Home from './screens/Home.js';
import StadiumsList from './screens/StadiumsList.js';
import StadiumMap from './screens/StadiumMap.js';
import SectionPage from './screens/SectionPage.js';

const screens = {
	Home: {
		screen: Home
	},
	StadiumsList: {
		screen: StadiumsList
	},
	StadiumMap: {
		screen: StadiumMap
	},
	SectionPage: {
		screen: SectionPage
	}

}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack)