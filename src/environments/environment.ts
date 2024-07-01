import packageJson from "../../package.json";

export const environment = {
  production: true,
  journeyApi: "https://journey-api-nxm5.onrender.com/rest",

  cloudName: "journeytogether",
  cloudinaryPreset: "journey-prod",
  cloudinarySingleImgPreset: "journey-prod-single",
  cloudBaseDir: "journey/journey-prod",
  version: packageJson.version,
  stage: 'prod'

};
