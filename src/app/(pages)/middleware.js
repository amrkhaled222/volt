import { NextResponse } from 'next/server'
import { decrypt } from '@/app/lib/session'
import { cookies } from 'next/headers'
import { useAuth } from '@/hooks/auth'
// 1. Specify protected and public routes
const protectedRoutes = [
    '/dashboard',
    '/customers',
    '/orderList',
    '/allProduct',
    '/allProduct/addProduct',
    'allProduct/productDetails/[id]',
]
const publicRoutes = []

export default async function middleware(req) {
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)
    const user = useAuth()
    // 3. Decrypt the session from the cookie
    const cookie = cookies().get('session')?.value
    const session = await decrypt(cookie)

    // 5. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    // 6. Redirect to /dashboard if the user is authenticated
    if (
        isPublicRoute &&
        user?.user?.is_admin &&
        !req.nextUrl.pathname.startsWith('/customers') &&
        !req.nextUrl.pathname.startsWith('/orderList') &&
        !req.nextUrl.pathname.startsWith('/allProduct') &&
        !req.nextUrl.pathname.startsWith('/allProduct/addProduct') &&
        !req.nextUrl.pathname.startsWith('/allProduct/productDetails/[id]')
    ) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
    }

    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
