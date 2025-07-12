import packageJson from "../../package.json";

export const environment = {
  production: true,
  journeyBaseUrl: "https://journey-api.codewithram.dev",
  journeyApi: "https://journey-api.codewithram.dev/rest",

  cloudName: "journeytogether",
  cloudinaryPreset: "journey-prod",
  cloudinarySingleImgPreset: "journey-prod-single",
  cloudBaseDir: "journey/journey-prod",
  version: packageJson.version,
  stage: 'prod',
  maptilerKey: 'Li0Tw6BIChGtu8Jb304A'
};
