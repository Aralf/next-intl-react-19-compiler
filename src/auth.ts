import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const { auth, handlers: { GET, POST }, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {type: 'text'},
        password: {type: 'password'}
      },
      authorize(credentials) {
        if (
          credentials?.username === 'admin' &&
          credentials.password === 'admin'
        ) {
          return {id: '1', name: 'admin'};
        }

        return null;
      }
    })
  ],
  callbacks: {
    authorized: ({auth}) => auth != null
  },
  pages: {
    signIn: '/login'
  }
});
