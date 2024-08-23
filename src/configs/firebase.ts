// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
  deleteUser,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, { name: "ZoneX" });
export const auth = getAuth(app);

export interface ProviderUserCredential extends UserCredential {
  token: string;
}

class AuthManager {
  async createUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<ProviderUserCredential> {
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await credential.user.getIdToken();
      return { ...credential, token };
    } catch (error: any) {
      if ((error.message as string).includes("auth/email-already-in-use")) {
        throw new Error("Email is already in use");
      }

      throw new Error(error.message || "Something went wrong. Please retry");
    }
  }

  async signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<ProviderUserCredential> {
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await credential.user.getIdToken();
      return { ...credential, token };
    } catch (error: any) {
      throw new Error(error.message || "Something went wrong. Please retry");
    }
  }

  async signInWithGoogle(): Promise<ProviderUserCredential> {
    try {
      const provider = new GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      const credential = await signInWithPopup(auth, provider);
      const oauthCred = GoogleAuthProvider.credentialFromResult(credential);
      const token = oauthCred?.idToken as string;
      return { ...credential, token };
    } catch (error: any) {
      throw new Error(error.message || "Something went wrong. Please retry");
    }
  }

  async signOut() {
    return auth.signOut();
  }

  async revokeEmailAndPasswordUserCreation(email: string, password: string) {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    await deleteUser(cred.user);
  }
}

export const authManager = new AuthManager();
