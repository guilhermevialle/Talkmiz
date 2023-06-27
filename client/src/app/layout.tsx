import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Talkmiz',
  description:
    'Talkmiz, the app where everyone in the world can communicate quickly and easily. Come meet and share with your friends!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={poppins.className + ' text-zinc-200'}>{children}</body>
    </html>
  )
}
