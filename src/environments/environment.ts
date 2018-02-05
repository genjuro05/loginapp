// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    // tslint:disable-next-line:quotemark
    apiKey: "AIzaSyACzz7bvrjzOmJ7yRcrxwQctEQBBxnlCeU",
    // tslint:disable-next-line:quotemark
    authDomain: "dgaesapp.firebaseapp.com",
    // tslint:disable-next-line:quotemark
    databaseURL: "https://dgaesapp.firebaseio.com",
    // tslint:disable-next-line:quotemark
    projectId: "dgaesapp",
    // tslint:disable-next-line:quotemark
    storageBucket: "",
    // tslint:disable-next-line:quotemark
    messagingSenderId: "1051666347913"
  }
};
