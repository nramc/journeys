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
export const JOURNEY_SEARCH_PAGE_INFO: PageInfo = {
  name: "Journeys",
  title: "Journeys",
  description: "\"Life is a treasure hunt, always searching for those special moments.\" - Anonymous.",
  path: "/journeys"
};
export const NEW_JOURNEY_PAGE_INFO: PageInfo = {
  name: "GeoPin",
  title: "New Journey",
  description: "\"Memories are the only real treasure. Save them here.\" - Anonymous.",
  path: "/journey/new"
};
export const DASHBOARD_PAGE_INFO: PageInfo = {
  name: "Dashboard",
  title: "Dashboard",
  description: "The goal is to turn data into information and information into insight.",
  path: "/dashboard"
};
export const SEARCH_PAGE_INFO: PageInfo = {
  name: "Search",
  title: "Search",
  description: "Memories are the Greatest Treasure. Find your Treasure.",
  path: "/search"
};
export const GALLERY_PAGE_INFO: PageInfo = {
  name: "Gallery",
  title: "Gallery",
  description: "Life is a Collection of Memories.",
  path: "/gallery"
};

export const WORKSPACE_PAGE_INFO: PageInfo = {
  name: "Workspace",
  title: "Workspace",
  description: "Create your Sweet Memory.",
  path: "/workspace"
};

