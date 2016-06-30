import {
  AuthMethods,
  defaultFirebase,
  FIREBASE_PROVIDERS,
  firebaseAuthConfig
} from 'angularfire2';


export const FIREBASE_APP_PROVIDERS: any[] = [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyDPgZ4XURHVtvCxrkVnqU3JOkRKL5IJE-c",
    authDomain: "badhan-online.firebaseapp.com",
    databaseURL: "https://badhan-online.firebaseio.com",
    storageBucket: "badhan-online.appspot.com",
  }),
  firebaseAuthConfig({
    method: AuthMethods.Popup,
    remember: 'default'
  })
];
