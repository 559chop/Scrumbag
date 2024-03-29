import LoginPage from "../components/users/LoginPage.jsx";
import RegisterPage from "../components/users/RegisterPage.jsx";

// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import Fingerprint from "@material-ui/icons/Fingerprint";

const pagesRoutes = [
  {
    path: "/pages/register-page",
    name: "Register Page",
    short: "Register",
    mini: "RP",
    icon: PersonAdd,
    component: RegisterPage
  },
  {
    path: "/pages/login-page",
    name: "Login Page",
    short: "Login",
    mini: "LP",
    icon: Fingerprint,
    component: LoginPage
  },
  {
    redirect: true,
    path: "/",
    pathTo: "/pages/register-page",
    name: "Register Page"
  },
];

export default pagesRoutes;
