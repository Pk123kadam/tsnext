// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request : any) {
    const token = request.cookies.get('token'); // Access the token from cookies
    const { pathname } = request.nextUrl;
    // Define public routes
    const publicRoutes = ['/login', '/register', '/forgot-password'];

    // Base URL
    const baseURL = request.nextUrl.origin;
    // Redirect to login if not authenticated and trying to access a private route
    if (!token && !publicRoutes.includes(pathname)) {
        return NextResponse.redirect(`${baseURL}/login`);
    }

    // Redirect to home if authenticated and trying to access a public route
    if (token && publicRoutes.includes(pathname)) {
        return NextResponse.redirect(`${baseURL}/home `);
    }


    return NextResponse.next();
}
