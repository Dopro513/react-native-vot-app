import { createRouter } from "@expo/ex-navigation";
import Home from "./screens/Home";
import Login from "./screens/accounts/Login";
import Register from "./screens/accounts/Register";
import CandidateScreen from "./screens/CandidateScreen";
import TabNavigationScreen from "./screens/TabNavigationScreen";
import SettingScreen from "./screens/SettingScreen";
import PledgeScreen from "./screens/PledgeScreen";
import Introduction from "./screens/Introduction";
import MyCandidateScreen from "./screens/MyCandidateScreen";
import CandidateCampaignScreen from "./screens/CandidateCampaignScreen";

const Router = createRouter(() => ({
  home: () => Home,
  login: () => Login,
  register: () => Register,
  tabNavigation: () => TabNavigationScreen,
  candidateScreen: () => CandidateScreen,
  setting: () => SettingScreen,
  pledge: () => PledgeScreen,
  introduction: () => Introduction,
  myCandidate: () => MyCandidateScreen,
  candidateCampaign: () => CandidateCampaignScreen
}));

export default Router;
