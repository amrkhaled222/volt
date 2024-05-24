import MobileNav from '@/components/Client/MobileNav'
import Nav from '@/components/Client/Nav'
import Footer from '@/components/Client/Footer'
export default function RootLayout({ children }) {
    return (
        <main>
            <header>
                <div className="container px-4 m-auto ">
                    <MobileNav />
                    <Nav />
                </div>
            </header>
            {children}
            <Footer />
        </main>
    )
}
