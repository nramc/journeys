import packageJson from "../../package.json";

export const environment = {
  production: true,
  journeyApi: "http://prodcution.url/rest",

  cloudName: "journeytogether",
  preset: "journey",
  version: packageJson.version

};
