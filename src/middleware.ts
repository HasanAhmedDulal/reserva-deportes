import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export const middleware = async (request) => {
    const token = cookies(request).get('next-auth.session-token');
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))

    }
    return NextResponse.next()

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/'],
}