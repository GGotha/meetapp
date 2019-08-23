import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Recsenha from "./pages/Recsenha";
import Meetups from "./pages/Meetups";
import Inscricoes from "./pages/Inscricoes";

const Routes = createAppContainer(
  createSwitchNavigator({
    Sign: createSwitchNavigator({
      Login,
      Recsenha,
      Signup
    }),
    App: createSwitchNavigator({
      Meetups,
      Inscricoes
    })
  }),
  {
    initialRouteName: "App"
    // initialRouteName: isSigned ? "App" : "Sign"
  }
);

// export const createRootNavigator = (Sign = false) => {
//   return createStackNavigator(
//     {
//       Sign: { screen: SignRoutes },
//       App: { screen: AppRoutes }
//     },
//     {
//       headerMode: "none",
//       mode: "modal",
//       initialRouteName: Sign ? "Sign" : "App",
//       navigationOptions: {
//         gesturesEnabled: false
//       }
//     }
//   );
// };
// const Routes = createAppContainer(
//   createSwitchNavigator({
//     Meetups,
//     Inscricoes,
//     Recsenha,
//     Login,
//     Signup
//   })
// );

export default Routes;
