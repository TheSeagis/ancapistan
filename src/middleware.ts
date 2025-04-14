import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if there's a preview parameter to bypass the coming soon page
  const url = request.nextUrl.clone();
  
  if (url.searchParams.get('preview') === 'true') {
    return NextResponse.next();
  }
  
  // Otherwise redirect to the coming soon page
  return NextResponse.rewrite(new URL('/coming-soon.html', request.url));
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|coming-soon.html).*)',
};
