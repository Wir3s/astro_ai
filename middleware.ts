import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  console.log("Middleware executed");
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log("Token:", token);

  const isAuthenticated = !!token;
  const isLoginPage = req.nextUrl.pathname === '/login';

  if (!isAuthenticated && !isLoginPage) {
    console.log("Redirecting to login");
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};