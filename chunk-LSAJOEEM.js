var e={name:"journey",version:"0.32.1",scripts:{ng:"ng",start:"ng serve --configuration development",build:"ng build",watch:"ng build --watch --configuration development",test:"ng test","ci:build":"ng build","ci:lint":"ng lint","ci:test":"ng test --no-watch --no-progress --browsers=ChromeHeadless","ci:deploy":"ng deploy --base-href=/journeys/ --dir=dist/journey/browser --build-target=journey:build:production --repo=https://github.com/nramc/journeys.git --name=nramc --email=ramachandrannellai@gmail.com",lint:"ng lint"},private:!0,dependencies:{"@angular/animations":"^19.0.4","@angular/cdk":"^19.0.3","@angular/common":"^19.0.4","@angular/compiler":"^19.0.4","@angular/core":"^19.0.4","@angular/forms":"^19.0.4","@angular/material":"^19.0.3","@angular/platform-browser":"^19.0.4","@angular/platform-browser-dynamic":"^19.0.4","@angular/router":"^19.0.4","@cloudinary/ng":"^2.0.2","@cloudinary/url-gen":"^1.18.0","@maptiler/geocoding-control":"^2.0.0","@maptiler/leaflet-maptilersdk":"^2.0.0","@popperjs/core":"^2.11.8","@types/geojson":"^7946.0.13","file-saver":"^2.0.5","highlight.js":"^11.9.0",jszip:"^3.10.1",leaflet:"^1.9.4","leaflet.fullscreen":"^3.0.2",marked:"^15.0.0","ng-gallery":"^12.0.0","ngx-markdown":"^19.0.0",rxjs:"~7.8.0",tslib:"^2.3.0",typings:"^2.1.1"},devDependencies:{"@angular-devkit/build-angular":"^19.0.5","@angular/cli":"^19.0.5","@angular/compiler-cli":"^19.0.4","@angular/localize":"^19.0.4","@types/file-saver":"^2.0.7","@types/jasmine":"~5.1.0","@types/leaflet":"^1.9.7","@types/node":"^22.10.2","angular-cli-ghpages":"^2.0.0","angular-eslint":"18.4.1",autoprefixer:"^10.4.20",eslint:"^9.9.1","jasmine-core":"~5.4.0",karma:"~6.4.0","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.1.0",postcss:"^8.4.49",tailwindcss:"^3.4.15",typescript:"~5.6.3","typescript-eslint":"8.15.0"}};var l={production:!0,journeyApi:"https://journey-api-nxm5.onrender.com/rest",cloudName:"journeytogether",cloudinaryPreset:"journey-prod",cloudinarySingleImgPreset:"journey-prod-single",cloudBaseDir:"journey/journey-prod",version:e.version,stage:"prod",maptilerKey:"Li0Tw6BIChGtu8Jb304A"};export{l as a};
