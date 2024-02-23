import About from "./pages/about";
import Confirmation from "./pages/confirmation";
import DateTime from "./pages/dateandtime";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import ServicePages from "./pages/servicepages";
const routeItem = (id, title, path, component) => {
  return {
    id,
    title,
    path,
    component,
  };
};

const routes = {
  home: routeItem(1, 'home', "/", Home),
  about: routeItem(2, 'about', "/about", About),
  notFound: routeItem(3, 'notFound', "*", NotFound),
  servicepages:routeItem(4,"service","/service",ServicePages),
  datetime:routeItem(5,"datetime","/dateandtime",DateTime),
  confirmation:routeItem(6,"confirmation","/confirmation",Confirmation)
};

const routeArr = Object.values(routes);

export { routes, routeArr };
