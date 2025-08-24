import { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"


export const authoptions:AuthOptions = {
    // Configure one or more authentication providers
    //  usersالطريقة اللي بضيف فيها ال providers
    providers: [
        // ...add more providers here
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    // session strategy => how to persist the user session
    //  sessionالطريقة اللي بضيف فيها ال strategy
    session:{
        strategy:"jwt",
        maxAge:30*24*60*60 // 30 days  
    },
    jwt:{
        // jwt encoding and decoding options
    },
    callbacks :{
        //signIn, redirect, session , jwt callbacks الحاجه الي بتحصل بعد ال لوج ان
        
    },
    pages:{
        signIn:"/auth/signin", // custom signin page
    }
    ,
    // use the secret key i make in .env.local file
    secret:process.env.NEXTAUTH_SECRET,



}