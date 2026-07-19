import packageJson from "../../package.json";

export const environment = {
  production: true,
  journeyBaseUrl: "https://localhost:8080",
  journeyApi: "https://localhost:8080/rest",
  cloudName: "journeytogether",
  cloudinaryPreset: "journey",
  cloudinarySingleImgPreset: "journey-single",
  cloudBaseDir: "journey/journey-dev",
  version: packageJson.version,
  stage: 'dev',
  maptilerKey: 'weudsMeXDjb8OU9aFvYf'
};
