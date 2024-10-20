var e={name:"journey",version:"0.30.0",scripts:{ng:"ng",start:"ng serve --configuration development",build:"ng build",watch:"ng build --watch --configuration development",test:"ng test","ci:build":"ng build","ci:lint":"ng lint","ci:test":"ng test --no-watch --no-progress --browsers=ChromeHeadless","ci:deploy":"ng deploy --base-href=/journeys/ --dir=dist/journey/browser --build-target=journey:build:production --repo=https://github.com/nramc/journeys.git --name=nramc --email=ramachandrannellai@gmail.com",lint:"ng lint"},private:!0,dependencies:{"@angular/animations":"^18.0.2","@angular/cdk":"^18.0.2","@angular/common":"^18.0.2","@angular/compiler":"^18.0.2","@angular/core":"^18.0.2","@angular/forms":"^18.0.2","@angular/material":"^18.0.2","@angular/platform-browser":"^18.0.2","@angular/platform-browser-dynamic":"^18.0.2","@angular/router":"^18.0.2","@cloudinary/ng":"^2.0.2","@cloudinary/url-gen":"^1.18.0","@maptiler/geocoding-control":"^1.3.3","@maptiler/leaflet-maptilersdk":"^2.0.0","@ng-bootstrap/ng-bootstrap":"^17.0.0","@popperjs/core":"^2.11.8","@types/geojson":"^7946.0.13",bootstrap:"^5.3.2","bootstrap-icons":"^1.11.1",bootswatch:"^5.3.2","file-saver":"^2.0.5","highlight.js":"^11.9.0",jszip:"^3.10.1",leaflet:"^1.9.4","leaflet.fullscreen":"^3.0.2",marked:"^14.0.0","ng-gallery":"^12.0.0","ngx-markdown":"^18.0.0",rxjs:"~7.8.0",tslib:"^2.3.0",typings:"^2.1.1"},devDependencies:{"@angular-devkit/build-angular":"^18.0.3","@angular/cli":"^18.0.3","@angular/compiler-cli":"^18.0.2","@angular/localize":"^18.0.2","@types/file-saver":"^2.0.7","@types/jasmine":"~5.1.0","@types/leaflet":"^1.9.7","angular-cli-ghpages":"^2.0.0","angular-eslint":"18.3.1",eslint:"^9.9.1","jasmine-core":"~5.4.0",karma:"~6.4.0","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.1.0",typescript:"~5.4.5","typescript-eslint":"8.9.0"}};var o={production:!0,journeyApi:"https://journey-api-nxm5.onrender.com/rest",cloudName:"journeytogether",cloudinaryPreset:"journey-prod",cloudinarySingleImgPreset:"journey-prod-single",cloudBaseDir:"journey/journey-prod",version:e.version,stage:"prod",maptilerKey:"Li0Tw6BIChGtu8Jb304A"};export{o as a};
