import { NextRequest, NextResponse } from "next/server";
import { parse } from "cookie";

// Helper function to check if the user is authenticated
const isAuthenticated = (req: NextRequest): boolean => {
  // Get the token from cookies (or you can use other storage mechanisms like headers)
  const cookies = parse(req.headers.get('cookie') || '');
  const token = cookies.authToken;

  return token !== undefined && token !== null;
};

// Middleware function to check authentication
export function authMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // List of protected routes
  const protectedRoutes = ["/karir", "/magang", "/pengumuman"];

  // If the user is trying to access a protected route but is not authenticated
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!isAuthenticated(req)) {
      // Redirect to login page if not authenticated
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // If user is authenticated or not accessing protected pages, proceed normally
  return NextResponse.next();
}

// Specify paths where this middleware should be applied
export const config = {
  matcher: ["/karir", "/magang", "/pengumuman"], // Apply only to these pages
};
