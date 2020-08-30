import React, { Suspense } from "react";

//Constants
import { ROUTES } from "./constants/routeConstants";

// Lazy loading
const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));
const UpComing = React.lazy(() => import("./components/Upcoming/Upcoming"));
const UserDetails = React.lazy(() =>
  import("./components/UserDetails/UserDetails")
);
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const UserList = React.lazy(() => import("./components/UserList/UserList"));
const AddUser = React.lazy(() =>
  import("./components/UserList/AddUser/AddUser")
);

const routes = [
  {
    path: ROUTES.DASHBOARD,
    component: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    ),
    exact: false,
  },
  {
    path: ROUTES.USERDETAILS,
    component: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <UserDetails />
      </Suspense>
    ),
    exact: false,
  },
  {
    path: ROUTES.CONTACT,
    component: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    ),
    exact: false,
  },
  {
    path: ROUTES.USERLIST,
    component: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <UserList />
      </Suspense>
    ),
    exact: false,
  },
  {
    path: ROUTES.UPCOMING,
    component: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <UpComing />
      </Suspense>
    ),
    exact: false,
  },
  {
    path: ROUTES.ADDUSER,
    component: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <AddUser />
      </Suspense>
    ),
    exact: false,
  },
];

export default routes;
