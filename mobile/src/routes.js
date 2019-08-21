import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Recsenha from "./pages/Recsenha";
import Meetups from "./pages/Meetups";
import Inscricoes from "./pages/Inscricoes";

const Routes = createAppContainer(
  createSwitchNavigator({
    Inscricoes,
    Meetups,
    Recsenha,
    Login,
    Signup
  })
);

export default Routes;