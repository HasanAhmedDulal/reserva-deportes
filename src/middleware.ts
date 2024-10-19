
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'


// This function can be marked `async` if using `await` inside
export const middleware = async (request) => {
    // __Secure-
    const token = cookies(request).get('__Secure-next-auth.session-token');
    // const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });


    // if (!token) {
    //     return NextResponse.next();

    // };

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));

    }
    return NextResponse.next();

};


// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/'],
};