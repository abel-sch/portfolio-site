import '../styles/globals.css'
import { Manrope } from '@next/font/google'

const inter = Manrope({
	subsets: ['latin'],
	variable: '--font-inter',
})

export default function MyApp({ Component, pageProps }) {
	return (
		<main className={`${inter.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	)
}