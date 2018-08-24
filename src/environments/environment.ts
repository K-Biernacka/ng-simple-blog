// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
    firebase: {
      apiKey: "AIzaSyA69u7I3wnY92owcCuIW7xHRmYzRMt3NRY",
      authDomain: "simple-blog-base.firebaseapp.com",
      databaseURL: "https://simple-blog-base.firebaseio.com",
      projectId: "simple-blog-base",
      storageBucket: "simple-blog-base.appspot.com",
      messagingSenderId: "297599237180"
    }
};
