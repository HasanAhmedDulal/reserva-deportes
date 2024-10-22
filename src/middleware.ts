
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'


// This function can be marked `async` if using `await` inside
export const middleware = (request) => {

    const path = request.nextUrl.pathname;
    const publicPath = path === '/login' || path === '/signup'
    //                  __Secure-
    const token = cookies(request).get('__Secure-next-auth.session-token');


    if (publicPath && token?.value) {
        return NextResponse.redirect(new URL('/', request.url));

    }
    if (!publicPath && !token?.value) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();

};


// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/login', '/signup'],
};