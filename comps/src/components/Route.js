import { useContext } from "react";
import NavigationContext from "../context/navigation";
import useNavigation from "../hooks/use-navigation";

function Route({ path, children }) {
  const currentPath = useNavigation();
  if (path === currentPath) {
    return children;
  } else{
    return null;
  }
  
}

export default Route;
