import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import LinkedInProvider from "next-auth/providers/linkedin";


const handler = NextAuth({
    secret: 'a3b1cdef25f4329ac8ff2339e0b2d3ae1234fcb47e9a15bd1a9b6ac5f14d43a8=',
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                if (!email || !password) {
                    return null;
                }
                const db = await connectDB();
                const currentUser = await db.collection('users').findOne({ email });
                if (!currentUser) {
                    return null;
                }

                if (password !== currentUser.email) {
                    return null;
                }

                return currentUser;
            }
        }),
        GoogleProvider({
            clientId: '317796042356-tls478h7iv5vhd5c251l4jj70utlkvaq.apps.googleusercontent.com',
            clientSecret: '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',
        }),
        FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
        }),
        LinkedInProvider({
            clientId: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET,
        })
    ],

    pages: {
        signIn: '/login',
    },
    callbacks: {},

})

export { handler as GET, handler as POST }