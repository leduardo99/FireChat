import auth from '@react-native-firebase/auth';

import Database from './Database';

class Auth {
  async register({ email, password, username }) {
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      console.log(response);

      const uid = auth().currentUser.uid;

      await Database.store(`users/${uid}`, {
        email,
        uid,
        password,
        username,
      }).catch(err => console.error(err));

      return response;
    } catch (error) {
      console.error(error.message);
      return error.message;
    }
  }

  async onSignIn(email, password) {
    const response = await auth().signInWithEmailAndPassword(email, password);

    console.log(response);
  }
}

export default new Auth();
