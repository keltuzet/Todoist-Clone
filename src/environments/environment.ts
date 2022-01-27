// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseApi: 'http://localhost:3000',
  firebase: {
    apiKey: 'AIzaSyCLR6j3zLoKJvJzaBVxhHjVgLJzcwxmTys',
    authDomain: 'todos-c99b4.firebaseapp.com',
    databaseURL: 'https://todos-c99b4.firebaseio.com',
    projectId: 'todos-c99b4',
    storageBucket: 'todos-c99b4.appspot.com',
    messagingSenderId: '903813504855',
    appId: '1:903813504855:web:e9e10be4c568f406e2e812',
    measurementId: 'G-E10KNHJL86',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
