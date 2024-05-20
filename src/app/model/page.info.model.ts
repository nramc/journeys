export interface PageInfo {
  name: string,
  title: string,
  description: string,
  path: string
}

export const HOME_PAGE_INFO: PageInfo = {
  name: "Home",
  title: "Journey",
  description: "The Time Machine: Reconnect with the past. Every journey a memory made.",
  path: "/home"
};
export const LOGIN_PAGE_INFO: PageInfo = {
  name: "Login",
  title: "Login",
  description: "Identity Yourself !!!",
  path: "/login"
};
export const LOGOUT_PAGE_INFO: PageInfo = {
  name: "Logout",
  title: "Logout",
  description: "Successfully logged out !!!",
  path: "/logout"
};
export const JOURNEY_SEARCH_PAGE_INFO: PageInfo = {
  name: "Journeys",
  title: "Journeys",
  description: "",
  path: "/journey"
};
export const NEW_JOURNEY_PAGE_INFO: PageInfo = {
  name: "GeoPin",
  title: "New Journey",
  description: "",
  path: "/journey/new"
};
export const VIEW_JOURNEY_PAGE_INFO: PageInfo = {
  name: "ViewJourney",
  title: "View Journey",
  description: "",
  path: "/journey/{id}/view"
};

export const DASHBOARD_PAGE_INFO: PageInfo = {
  name: "Dashboard",
  title: "Dashboard",
  description: "",
  path: "/dashboard"
};
export const GALLERY_PAGE_INFO: PageInfo = {
  name: "Gallery",
  title: "Gallery",
  description: "",
  path: "/gallery"
};
export const STATISTICS_PAGE_INFO: PageInfo = {
  name: "Statistics",
  title: "Statistics",
  description: "",
  path: "/statistics"
};

export const ABOUT_PAGE_INFO: PageInfo = {
  name: "About Us",
  title: "About Us",
  description: "",
  path: "/aboutUs"
};
