import './style.css';
// import './globals.css';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { ThemeProviders } from './theme-provider'

export default async function RootLayout({
  children
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviders>
          <div className="wrapper">
            <div className="main">
              <Sidebar />
              <section className="col note-viewer">
                <Header />
                {children}
              </section>
            </div>
          </div>
        </ThemeProviders>
      </body>
    </html>
  )
}
