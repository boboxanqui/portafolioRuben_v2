// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  reCaptcha: {
    webKey: '6Le1KSkhAAAAAKnIxCBl3P-nQuUnAW39cO4OCYkT',
  },
  smtp: {
    password: '0A02EA6684381545A4AE7782C58D37B704FE',
    server: 'smtp.elasticemail.com',
    port: 2525,
    secureToken: 'e3f76226-a3ef-4a8d-80c8-8ce9d12ae767'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
