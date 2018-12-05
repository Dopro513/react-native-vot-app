import { createRouter } from "@expo/ex-navigation";
import Home from "./screens/Home";
import Login from "./screens/accounts/Login";
import Register from "./screens/accounts/Register";
import CandidateScreen from "./screens/CandidateScreen";
import TabNavigationScreen from "./screens/TabNavigationScreen";
import SettingScreen from "./screens/SettingScreen";
import CampaignScreen from "./screens/CampaignScreen";

const Router = createRouter(() => ({
  home: () => Home,
  login: () => Login,
  register: () => Register,
  tabNavigation: () => TabNavigationScreen,
  candidateScreen: () => CandidateScreen,
  setting: () => SettingScreen,
  campaign: () => CampaignScreen
}));

export default Router;
