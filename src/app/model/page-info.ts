export interface PageInfo {
  name: string,
  title: string,
  description: string,
  path: string
}

export const HOME_PAGE_INFO: PageInfo = {
  name: "Home",
  title: "Journey",
  description: "The Time Machine takes you to the past  !!!",
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
  description: "\"Life is a treasure hunt, always searching for those special moments.\" - Anonymous.",
  path: "/journey"
};
export const NEW_JOURNEY_PAGE_INFO: PageInfo = {
  name: "GeoPin",
  title: "New Journey",
  description: "\"Memories are the only real treasure. Preserve them.\" - Anonymous.",
  path: "/journey/new"
};
export const VIEW_JOURNEY_PAGE_INFO: PageInfo = {
  name: "ViewJourney",
  title: "View Journey",
  description: "\"We are all travelers in the desert of this world. We are all searching for some oasis of meaning.\" - E.F. Schumacher.",
  path: "/journey/{id}/view"
};

export const DASHBOARD_PAGE_INFO: PageInfo = {
  name: "Dashboard",
  title: "Dashboard",
  description: "The goal is to turn data into information and information into insight.",
  path: "/dashboard"
};
export const GALLERY_PAGE_INFO: PageInfo = {
  name: "Gallery",
  title: "Gallery",
  description: "Life is a Collection of Memories. Memories are the Greatest Treasure. Find your Treasure.",
  path: "/gallery"
};


