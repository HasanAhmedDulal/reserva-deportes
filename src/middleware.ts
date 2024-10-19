
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'


// This function can be marked `async` if using `await` inside
export const middleware = async (request: NextRequest) => {

    const path = request.nextUrl.pathname;
    const publicPath = path === '/login' || path === '/signup'
    // const token = request.cookies.get('token')?.value || '';
    // __Secure-
    const token = cookies(request).get('next-auth.session-token');
    console.log(token?.value)

    if (publicPath && token?.value) {
        return NextResponse.redirect(new URL('/', request.url));
    }
    if (!publicPath && !token?.value) {
        return NextResponse.redirect(new URL('/login', request.url));
    }


    // return NextResponse.next();

};


// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/login', '/signup'],
};