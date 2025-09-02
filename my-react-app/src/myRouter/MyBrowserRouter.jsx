/**
 *  url
 *
 * <BrowserRouter>
 * <Link>
 * <Routes>
 * <Route>
 *
 * history (won't refresh the page)
 * location (will refresh the page)
 * */

import { createContext, useEffect, useState } from "react";

export const MyRouterContext = createContext(null);

const MyBrowserRouter = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  console.log("current pathname", currentPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <MyRouterContext value={{ currentPath, navigate }}>
      {children}
    </MyRouterContext>
  );
};

export default MyBrowserRouter;