export interface PageInfo {
  name: string,
  title: string,
  description: string,
  path: string
}

export const HOME_PAGE_INFO: PageInfo = {
  name: "Home",
  title: "Journeys",
  description: "The Time Machine take you to PAST !!!",
  path: "/home"
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

