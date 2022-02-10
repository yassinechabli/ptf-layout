import PATH from "constants/path";
import HomePage from "pages/Home";
import PortfolioPage from "pages/Portfolio";


const routes = [
  {
    path: PATH.HOME,
    component: HomePage,
  },
  {
    path: PATH.PORTFOLIO,
    component: PortfolioPage,
  },

];

export default routes;
