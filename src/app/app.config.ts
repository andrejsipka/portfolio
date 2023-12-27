import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

export const appConfig: ApplicationConfig = {
   providers: [
      provideClientHydration(),
      provideRouter(routes)
   ],
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyCQ4AIrNxax9MKs7HSImr6aHOx4PRUqDqY",
   authDomain: "andrejsipka-e2898.firebaseapp.com",
   projectId: "andrejsipka-e2898",
   storageBucket: "andrejsipka-e2898.appspot.com",
   messagingSenderId: "281681598334",
   appId: "1:281681598334:web:6e939425eda471ff19052f",
   measurementId: "G-VSVSYPCB1Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const AUTH = () => {

}
