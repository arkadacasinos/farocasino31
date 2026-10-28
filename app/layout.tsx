import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark bg-[#111315]">
      <head>
        <meta name="yandex-verification" content="4c3164f866fc5cc6" />
        <meta charSet="utf-8" />
        <title>Faro Casino официальный сайт – рабочее зеркало фаро казино онлайн</title>
        <meta
          name="description"
          content="Faro Casino официальный сайт и актуальное рабочее зеркало. Играйте в фаро казино онлайн на реальные деньги с моментальным выводом, бонусами на депозит и лицензионными слотами."
        />
        <link rel="canonical" href="https://farocasino31.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#111315" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="https://farocasino31.vercel.app/" />
        <meta property="og:title" content="Faro Casino официальный сайт – рабочее зеркало фаро казино онлайн" />
        <meta
          property="og:description"
          content="Faro Casino официальный сайт и актуальное рабочее зеркало. Играйте в фаро казино онлайн на реальные деньги с бонусами и быстрыми выплатами."
        />
        <meta property="og:image" content="https://farocasino31.vercel.app/images/faro-hero-model.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Faro Casino официальный сайт – рабочее зеркало фаро казино онлайн" />
        <meta
          name="twitter:description"
          content="Faro Casino официальный сайт и рабочее зеркало фаро казино онлайн для игры на реальные деньги."
        />
        <meta name="twitter:image" content="https://farocasino31.vercel.app/images/faro-hero-model.png" />
      </head>
      <body className="bg-[#111315] text-[#f4f5f7] antialiased selection:bg-[#f6a928]/30 selection:text-white">
        {children}
      </body>
    </html>
  )
}
