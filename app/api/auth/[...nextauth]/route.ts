import { authoptions } from "@/app/lib/nextAuth"
import NextAuth from "next-auth"

const handler = NextAuth(authoptions)


// NextAuth.js supports both GET and POST requests
// post=> for signIn, signOut, callback, and verifyRequest
// get=> for get user
export { handler as GET, handler as POST }