// app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../../../lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    callbacks: {
      async signIn({ user, account, profile }) {
        if (account.provider === "google") {
          // Check if the user exists in the database
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email },
          });

          if (!existingUser) {
            // If user doesn't exist, create a new one
            await prisma.user.create({
              data: {
                email: user.email,
                name: user.name,
                image: user.image,
              },
            });
          } else {
            // Optional: Update user details if they already exist
            await prisma.user.update({
              where: { email: user.email },
              data: {
                name: user.name,
                image: user.image,
              },
            });
          }
        }
        return true; // Return true to proceed with the sign in
      },

      async session({ session, token, user }) {
        // Send properties to the client, like an access_token and user id from a provider.
        session.accessToken = token.accessToken;
        session.user.id = token.id;
        return session;
      },
    },
    // async session({ session, token, user }) {
    //   // Send properties to the client, like an access_token and user id from a provider.
    //   session.accessToken = token.accessToken;
    //   session.user.id = token.id;

    //   return session;
    // },

    // async createUser(user) {
    //   console.log(user);

    //   return user;

    // },
    // async signIn({ req, res }) {
    //   const { name, email } = await req.json();
    //   const exists = await prisma.user.findUnique({
    //     where: {
    //       email,
    //     },
    //   });
    //   if (exists) {
    //     return NextResponse.json({ error: "User already exists" });
    //   } else {
    //     const user = await prisma.user.create({
    //       data: {
    //         name,
    //         email,
    //       },
    //     });
    //     return NextResponse.json(user);
    //   }
    // },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
