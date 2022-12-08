import Image from 'next/image'
import '../styles/globals.css'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className='h-full' lang='en'>
      <body>{children}</body>
    </html>
  )
}
