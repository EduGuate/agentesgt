// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAoZqbPWXwDu2U1-WvxidbEPf1J3FYND94",
  authDomain: "agentesgt-c2ad8.firebaseapp.com",
  projectId: "agentesgt-c2ad8",
  storageBucket: "agentesgt-c2ad8.appspot.com",
  messagingSenderId: "142997850389",
  appId: "1:142997850389:web:694b37063fc646722f011c",
  measurementId: "G-8P3JT5Y7RY"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exporta la instancia de la aplicación y los servicios que necesites
export { app, analytics };
