import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user?email=${credentials?.username}`, {
          headers: { "Content-Type": "application/json" }
        })

        const user = await res.json();
        // after get the user check if the password is the same passed in the form

        // If no error and we have user data, return it
        if (user) {
          return user;
        }
        // Return null if user data could not be retrieved
         return null
      }
    }),
  ],
  jwt: {
    secret: process.env.SECRET,
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token
      }
      if (user) {
        token.role = user.role as string;
      }
      return token
    },
    async session({ session, token }) {
      console.log(`user inside session: ${token.role}`)
      if (token.role) {
        if (session && session.user) {
          session.user.role = token.role;
        }
      }
      return session
    }
  },
  pages: {
    signIn: '/auth/signin',
  }
})