import { getToken } from "next-auth/jwt";
import withAuth from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";



export default withAuth(async function middleware(request: NextRequest) {
    //pathname => this is the path of the request
    //isAuth => this is to check if the user is authenticated or not
    //protectedRoutes => this is the list of routes that are protected
    const pathname= request.nextUrl.pathname
    const isAuth= await getToken({req:request})
    const protectedRoutes= ['/profile']
    const isAuthRoute=pathname.startsWith('/auth') 
    const isProtectedRoute= protectedRoutes.some((route)=> pathname.startsWith(route))
    
    // if the user is not authenticated and trying to access a protected route, redirect to signin
    if(!isAuth && isProtectedRoute){
        return NextResponse.redirect(new URL('/auth/signin', request.url))
    }
    
    // if the user is authenticated and trying to access the auth route, redirect to profile
    if(isAuth && isAuthRoute){
        return NextResponse.redirect(new URL('/profile', request.url))
    }

},

{
    callbacks:{
        async authorized(){
            return true
        }
    }
}


)


// See "Matching Paths" below to learn more
export const config = {
    matcher: [
    '/profile','/auth/signin'
    ],
}