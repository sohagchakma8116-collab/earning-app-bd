export const metadata = {
  title: 'Earning App BD',
  description: 'বাংলাদেশের আয় করার অ্যাপ',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  )
}
