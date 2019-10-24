import database from '@react-native-firebase/database';

class Database {
  async store(reference, data) {
    await database()
      .ref(reference)
      .set(data);
  }

  async retrive(reference) {
    const ref = await database().ref(reference);

    const snapshot = await ref.once('value');

    return snapshot.toJSON();
  }
}

export default new Database();
