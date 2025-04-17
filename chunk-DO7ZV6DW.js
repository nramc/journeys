var e={name:"journey",version:"0.35.1",scripts:{ng:"ng",start:"ng serve --configuration development",build:"ng build",watch:"ng build --watch --configuration development",test:"ng test","ci:build":"ng build","ci:lint":"ng lint","ci:test1":"ng test --no-watch --no-progress --browsers=ChromeHeadless","ci:deploy":"ng deploy --base-href=/journeys/ --dir=dist/journey/browser --build-target=journey:build:production --repo=https://github.com/nramc/journeys.git --name=nramc --email=ramachandrannellai@gmail.com",lint:"ng lint"},private:!0,dependencies:{"@angular/animations":"19.2.6","@angular/cdk":"19.2.9","@angular/common":"19.2.6","@angular/compiler":"19.2.6","@angular/core":"19.2.6","@angular/forms":"19.2.6","@angular/material":"19.2.9","@angular/platform-browser":"19.2.6","@angular/platform-browser-dynamic":"19.2.6","@angular/router":"19.2.6","@cloudinary/ng":"2.1.2","@cloudinary/url-gen":"1.21.0","@fullcalendar/angular":"6.1.17","@fullcalendar/core":"6.1.17","@fullcalendar/daygrid":"6.1.17","@fullcalendar/interaction":"6.1.17","@fullcalendar/multimonth":"6.1.17","@fullcalendar/rrule":"6.1.17","@maptiler/geocoding-control":"2.1.6","@maptiler/leaflet-maptilersdk":"4.0.3","@popperjs/core":"2.11.8","@tailwindcss/postcss":"4.1.4","@types/geojson":"7946.0.16","file-saver":"2.0.5","highlight.js":"11.11.1",jszip:"3.10.1",leaflet:"1.9.4","leaflet.fullscreen":"4.0.0",marked:"15.0.8","ng-gallery":"12.0.0","ngx-markdown":"19.1.1",postcss:"8.5.3",rrule:"2.8.1",rxjs:"7.8.2",tslib:"2.8.1",typings:"2.1.1"},devDependencies:{"@angular-devkit/build-angular":"19.2.7","@angular/cli":"19.2.7","@angular/compiler-cli":"19.2.6","@angular/localize":"19.2.6","@types/file-saver":"2.0.7","@types/jasmine":"5.1.7","@types/leaflet":"1.9.17","@types/node":"22.14.1","angular-cli-ghpages":"2.0.3","angular-eslint":"19.3.0",autoprefixer:"10.4.21",eslint:"9.24.0","jasmine-core":"5.6.0",karma:"6.4.4","karma-chrome-launcher":"3.2.0","karma-coverage":"2.2.1","karma-jasmine":"5.1.0","karma-jasmine-html-reporter":"2.1.0",tailwindcss:"4.1.4",typescript:"5.8.3","typescript-eslint":"8.30.1"}};var l={production:!0,journeyApi:"https://journey-api-nxm5.onrender.com/rest",cloudName:"journeytogether",cloudinaryPreset:"journey-prod",cloudinarySingleImgPreset:"journey-prod-single",cloudBaseDir:"journey/journey-prod",version:e.version,stage:"prod",maptilerKey:"Li0Tw6BIChGtu8Jb304A"};export{l as a};
