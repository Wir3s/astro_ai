// app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const handler = NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // define other NextAuth options here
});

export { handler as GET, handler as POST };
