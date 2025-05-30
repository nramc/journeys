import packageJson from "../../package.json";

export const environment = {
  production: true,
  journeyApi: "https://localhost:8080/rest",

  cloudName: "journeytogether",
  cloudinaryPreset: "journey",
  cloudinarySingleImgPreset: "journey-single",
  cloudBaseDir: "journey/journey-dev",
  version: packageJson.version,
  stage: 'dev',
  maptilerKey: 'Li0Tw6BIChGtu8Jb304A'
};
