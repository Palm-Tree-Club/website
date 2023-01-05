import '../styles/globals.css'
import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-opensans' })
export default function App({ Component, pageProps }) {
  return <main className={`${openSans.variable} font-sans`}>
    <Component {...pageProps} />
  </main>
}
