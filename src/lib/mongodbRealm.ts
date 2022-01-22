import * as Realm from 'realm-web';

export default async function mongodbService() {
  try {
    const app = new Realm.App({ id: process.env.NEXT_PUBLIC_REALM_APP_ID! });
    const credentials = Realm.Credentials.anonymous();
    const user = await app.logIn(credentials);
    return { app, credentials, user };
  } catch (error) {
    throw new Error("Error connecting to Mongo db");
  }
}