import Footer from '@/Components/Footer'
import { ModeToggle } from '@/Components/mode-toggle'
import Nav from '@/Components/Nav'
import { ThemeProvider } from '@/Components/theme-provider'
import { children, User } from '@/types'
import { useTheme } from '@/Components/theme-provider'

export default function Main({ children, auth }: children & { auth: { user: User } }) {
    return (
        <>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <Nav auth={auth} />
                {children}
                <Footer />
            </ThemeProvider>
        </>
    );
}
