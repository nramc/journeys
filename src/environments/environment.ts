import packageJson from "../../package.json";

export const environment = {
  production: true,
  journeyApi: "https://journey-api-nxm5.onrender.com/rest",

  cloudName: "journeytogether",
  preset: "journeys-prod",
  version: packageJson.version

};
