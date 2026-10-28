import Image from 'next/image'

const REF_URL = 'https://combospark.top/aetf3u2q9u'

export default function Page() {
  return (
    <div className="k8q2-shell">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-30 bg-[#111315] border-b border-[#212429]/80 px-3 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Mobile menu trigger using :target */}
          <a
            href="#k8q2-mobile-nav"
            className="lg:hidden p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Открыть меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>

          {/* Logo */}
          <a href={REF_URL} className="flex items-center gap-2.5 text-decoration-none">
            <svg
              className="w-7 h-7 text-[#f6a928]"
              viewBox="0 0 40 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 24L10 6L20 18L30 6L36 24"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M14 24L20 16L26 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="font-extrabold text-xl tracking-wider text-white uppercase font-sans">
              Faro
            </span>
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href={REF_URL}
            className="k8q2-dark-btn px-4 sm:px-6 py-2 text-xs sm:text-sm"
          >
            Вход
          </a>
          <a
            href={REF_URL}
            className="k8q2-gold-btn px-4 sm:px-6 py-2 text-xs sm:text-sm"
          >
            Регистрация
          </a>
        </div>
      </header>

      {/* Main Layout: Sidebar Rail + Content */}
      <div className="flex flex-1 max-w-[1520px] w-full mx-auto px-2 sm:px-4 lg:px-6 py-4 gap-4 sm:gap-6 relative">
        {/* Desktop Left Sidebar Rail */}
        <aside className="hidden lg:flex flex-col w-56 xl:w-60 shrink-0 gap-1.5 pt-1">
          {/* Wheel Widget */}
          <a
            href={REF_URL}
            className="p-3 mb-2 rounded-2xl bg-[#181a1f] border border-[#30353f] hover:border-[#f6a928]/60 transition flex items-center gap-3 text-decoration-none"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#f6a928]/40">
              <Image
                src="/images/roulette-thumb.png"
                alt="Рулетка удачи Faro Casino"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="text-xs font-bold text-white leading-tight">Рулетка удачи</div>
              <div className="text-[11px] text-[#f6a928] font-mono mt-0.5 flex items-center gap-1">
                <span>⏱</span> 00:16:01
              </div>
            </div>
          </a>

          {/* Navigation links */}
          <nav className="flex flex-col gap-1">
            <a href={REF_URL} className="k8q2-rail-item">
              <span className="text-[#f6a928]">🎁</span> Бонусы
            </a>
            <a href={REF_URL} className="k8q2-rail-item">
              <span className="text-[#f6a928]">🪙</span> Магазин
            </a>
            <a href={REF_URL} className="k8q2-rail-item">
              <span className="text-[#f6a928]">🎯</span> Миссии
            </a>
            <a href={REF_URL} className="k8q2-rail-item">
              <span className="text-[#f6a928]">🏆</span> Гонка рефералов
            </a>
            <a href={REF_URL} className="k8q2-rail-item">
              <span className="text-[#f6a928]">📦</span> Сундуки
            </a>
            <a href={REF_URL} className="k8q2-rail-item">
              <span className="text-[#f6a928]">⚙️</span> Умножение баланса
            </a>
            <a href={REF_URL} className="k8q2-rail-item">
              <span className="text-[#f6a928]">👥</span> Реферальная прог...
            </a>
            <a href={REF_URL} className="k8q2-rail-item">
              <span className="text-[#f6a928]">👑</span> VIP Клуб
            </a>
          </nav>

          <div className="mt-auto pt-6">
            <a
              href={REF_URL}
              className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#181a1f] border border-[#262a32] text-xs text-neutral-300 hover:text-white"
            >
              <span className="flex items-center gap-2">
                <span>🇷🇺</span> Русский
              </span>
              <span className="text-neutral-500">▾</span>
            </a>
          </div>
        </aside>

        {/* Mobile Slide-out Drawer */}
        <div
          id="k8q2-mobile-nav"
          className="hidden fixed inset-y-0 left-0 z-50 w-72 bg-[#14161a] border-r border-[#262a32] p-4 flex-col gap-2 shadow-2xl lg:hidden"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#262a32]">
            <span className="font-extrabold text-lg text-white">МЕНЮ FARO</span>
            <a href="#!" className="text-neutral-400 hover:text-white p-1" aria-label="Закрыть">
              ✕
            </a>
          </div>
          <a
            href={REF_URL}
            className="p-3 my-2 rounded-xl bg-[#1b1e24] border border-[#30353f] flex items-center gap-3"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#f6a928]/40">
              <Image
                src="/images/roulette-thumb.png"
                alt="Рулетка"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Рулетка удачи</div>
              <div className="text-[11px] text-[#f6a928] font-mono">00:16:01</div>
            </div>
          </a>
          <a href={REF_URL} className="k8q2-rail-item">🎁 Бонусы</a>
          <a href={REF_URL} className="k8q2-rail-item">🪙 Магазин</a>
          <a href={REF_URL} className="k8q2-rail-item">🎯 Миссии</a>
          <a href={REF_URL} className="k8q2-rail-item">🏆 Гонка рефералов</a>
          <a href={REF_URL} className="k8q2-rail-item">📦 Сундуки</a>
          <a href={REF_URL} className="k8q2-rail-item">⚙️ Умножение баланса</a>
          <a href={REF_URL} className="k8q2-rail-item">👥 Реферальная программа</a>
          <a href={REF_URL} className="k8q2-rail-item">👑 VIP Клуб</a>
          <div className="mt-auto pt-4 flex flex-col gap-2">
            <a href={REF_URL} className="k8q2-gold-btn py-2.5 text-sm">
              Регистрация
            </a>
            <a href={REF_URL} className="k8q2-dark-btn py-2.5 text-sm">
              Вход
            </a>
          </div>
        </div>
        <a
          id="k8q2-scrim"
          href="#!"
          className="hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          aria-label="Закрыть меню"
        />

        {/* Center Canvas: First Screen Hero + 3 Subcards */}
        <main className="flex-1 flex flex-col gap-4 sm:gap-6 min-w-0">
          {/* Big Featured Hero Banner */}
          <section className="k8q2-gold-border-card overflow-hidden p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] relative">
            {/* Background / Right visual */}
            <div className="absolute right-0 top-0 bottom-0 w-full sm:w-3/5 lg:w-1/2 pointer-events-none opacity-40 sm:opacity-90 overflow-hidden">
              <Image
                src="/images/faro-hero-model.png"
                alt="Faro Casino Гонка Рефералов"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
                className="object-cover object-right mix-blend-screen"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#14161a] via-[#14161a]/70 sm:via-[#14161a]/50 to-transparent" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 max-w-lg flex flex-col items-start">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#f6a928] leading-tight tracking-tight">
                Гонка Рефералов
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-1 mb-3 tracking-wide">
                3 000 000 руб.
              </div>
              <p className="text-sm sm:text-base text-white/90 drop-shadow-md mb-6 max-w-sm leading-relaxed font-medium">
                Приглашайте друзей и выиграйте путевку на Мальдивы на двоих
              </p>
              <a
                href={REF_URL}
                className="k8q2-gold-btn px-8 py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-[#f6a928]/25"
              >
                Участвовать
              </a>
            </div>

            {/* Slider Dots */}
            <div className="relative z-10 flex items-center justify-center sm:justify-start gap-2 mt-6 pt-2">
              <span className="w-6 h-2 rounded-full bg-[#f6a928]" />
              <span className="w-2 h-2 rounded-full bg-neutral-600" />
              <span className="w-2 h-2 rounded-full bg-neutral-600" />
            </div>
          </section>

          {/* Three Bottom Cards Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* Card 1: Депозитный стрик */}
            <div className="k8q2-sub-card p-5 sm:p-6 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute right-0 top-2 w-28 h-28 pointer-events-none opacity-85">
                <Image
                  src="/images/card-streak.png"
                  alt="Депозитный стрик"
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-1.5">Депозитный стрик</h3>
                <p className="text-xs text-neutral-400 mb-5 max-w-[190px] leading-relaxed">
                  Чем длиннее серия депозитов, тем ценнее призы
                </p>
                <a href={REF_URL} className="k8q2-gold-btn px-5 py-2 text-xs font-bold">
                  Начать стрик
                </a>
              </div>

              {/* Day counters / gift track */}
              <div className="relative z-10 flex items-center gap-1.5 mt-6 pt-2 border-t border-[#262a32]/60 overflow-x-auto">
                <span className="w-7 h-7 rounded-lg bg-[#22262e] border border-[#f6a928]/40 flex items-center justify-center text-xs">
                  🎁
                </span>
                <span className="w-7 h-7 rounded-lg bg-[#22262e] border border-[#f6a928]/40 flex items-center justify-center text-xs">
                  🎁
                </span>
                <span className="w-7 h-7 rounded-lg bg-[#22262e] border border-[#f6a928]/40 flex items-center justify-center text-xs">
                  🎁
                </span>
                <span className="w-7 h-7 rounded-lg bg-[#1a1c22] border border-neutral-700 flex items-center justify-center text-[11px] text-neutral-400 font-semibold">
                  4
                </span>
                <span className="w-7 h-7 rounded-lg bg-[#1a1c22] border border-neutral-700 flex items-center justify-center text-[11px] text-neutral-400 font-semibold">
                  5
                </span>
                <span className="w-7 h-7 rounded-lg bg-[#1a1c22] border border-neutral-700 flex items-center justify-center text-[11px] text-neutral-400 font-semibold">
                  6
                </span>
                <span className="w-7 h-7 rounded-lg bg-[#22262e] border border-[#f6a928]/40 flex items-center justify-center text-xs">
                  🎁
                </span>
                <span className="w-7 h-7 rounded-lg bg-[#22262e] border border-[#f6a928]/40 flex items-center justify-center text-xs">
                  🎁
                </span>
              </div>
            </div>

            {/* Card 2: Faro Casino App */}
            <div className="k8q2-sub-card p-5 sm:p-6 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute right-[-10px] top-1 w-32 h-36 pointer-events-none opacity-85">
                <Image
                  src="/images/card-app.png"
                  alt="Faro Casino App"
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-1.5">Faro Casino App</h3>
                <p className="text-xs text-neutral-400 mb-2 max-w-[170px] leading-relaxed">
                  Скачивайте мобильное приложение и получайте эксклюзивные бонусы
                </p>
                <div className="text-[11px] text-neutral-300 flex items-center gap-1.5 mb-5">
                  <span className="text-[#a4c639]">🤖</span> Доступно для Android
                </div>
                <a href={REF_URL} className="k8q2-gold-btn px-6 py-2 text-xs font-bold">
                  Скачать
                </a>
              </div>
            </div>

            {/* Card 3: Миссии */}
            <div className="k8q2-sub-card p-5 sm:p-6 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute right-0 top-2 w-28 h-28 pointer-events-none opacity-85">
                <Image
                  src="/images/card-missions.png"
                  alt="Миссии казино"
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-1.5">Миссии</h3>
                <p className="text-xs text-neutral-400 mb-4 max-w-[190px] leading-relaxed">
                  Выполняйте задания, собирайте Faro Coins и обменивайте их на награды
                </p>
                <div className="text-xs text-neutral-200 mb-4 flex items-center justify-between bg-[#1f222a] p-2.5 rounded-xl border border-[#2e333e]">
                  <span>Завершите 3 депозита</span>
                  <span className="text-[#f6a928] font-bold text-[11px] bg-[#f6a928]/10 px-2 py-0.5 rounded-md">
                    +12 Faro Coins
                  </span>
                </div>
                <a href={REF_URL} className="k8q2-dark-btn w-full py-2 text-xs font-bold">
                  Начать
                </a>
              </div>
            </div>
          </section>

          {/* Quick Action Category Bar */}
          <section className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-medium">
            <a
              href={REF_URL}
              className="px-4 py-2 rounded-xl bg-[#f6a928] text-black font-bold shrink-0"
            >
              🔥 Популярные слоты
            </a>
            <a
              href={REF_URL}
              className="px-4 py-2 rounded-xl bg-[#1b1e24] text-neutral-300 hover:text-white shrink-0 border border-[#262a32]"
            >
              🎰 Новинки Faro
            </a>
            <a
              href={REF_URL}
              className="px-4 py-2 rounded-xl bg-[#1b1e24] text-neutral-300 hover:text-white shrink-0 border border-[#262a32]"
            >
              🎲 Live-игры с дилерами
            </a>
            <a
              href={REF_URL}
              className="px-4 py-2 rounded-xl bg-[#1b1e24] text-neutral-300 hover:text-white shrink-0 border border-[#262a32]"
            >
              ⚡ Быстрые краш-игры
            </a>
            <a
              href={REF_URL}
              className="px-4 py-2 rounded-xl bg-[#1b1e24] text-neutral-300 hover:text-white shrink-0 border border-[#262a32]"
            >
              🎁 Джекпоты
            </a>
          </section>

          {/* ======================================================== */}
          {/* SEO TEXT SECTION (300-400 WORDS, ALL KEYWORDS, NATURAL) */}
          {/* ======================================================== */}
          <article className="mt-6 pt-6 border-t border-[#262a32] flex flex-col gap-6 text-neutral-300">
            {/* Section 1 */}
            <section id="official" className="flex flex-col gap-3">
              <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Faro Casino официальный сайт – лицензионная игра и быстрые выплаты
              </h1>
              <h2 className="text-lg sm:text-xl font-bold text-[#f6a928]">
                Фаро казино официальный сайт: регистрация, слоты и бонусы
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
                Современное <strong>Faro Casino</strong> открывает игрокам круглосуточный доступ к лучшим сертифицированным игровым автоматам, настольным дисциплинам и комнатам с живыми дилерами от ведущих мировых провайдеров. Посещая <strong>фаро казино официальный сайт</strong>, каждый пользователь попадает в надежное игровое пространство с честными алгоритмами отдачи и мгновенным выводом выигрышей на карты и криптовалютные кошельки. Платформа <strong>Faro Casino официальный сайт</strong> создана для максимального комфорта: лаконичный интерфейс, продуманная система бонусов за депозиты, персональные миссии и программа лояльности для активных участников. Начать в <strong>фаро казино играть</strong> можно всего за пару кликов как на реальные деньги, так и в бесплатном демонстрационном режиме для тестирования механик.
              </p>
            </section>

            {/* Section 2 */}
            <section id="zerkalo" className="flex flex-col gap-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#f6a928]">
                Faro Casino зеркало и рабочее зеркало фаро казино на сегодня
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
                При возникновении сетевых ограничений или плановых технических работ игрокам всегда доступно актуальное <strong>faro casino зеркало</strong>. Это точная и полностью синхронизированная копия главного ресурса, сохраняющая персональный баланс, статусы в программе лояльности и доступные промокоды. Надежное <strong>фаро казино зеркало</strong> гарантирует защищенное соединение через SSL-сертификаты, исключая риски для персональных данных. Найти проверенное <strong>фаро казино зеркало рабочее</strong> можно в официальном Telegram-канале или через службу поддержки. Используя альтернативное <strong>faro casino зеркало</strong>, вы продолжаете непрерывные сессии в любимых видеослотах с сохранением текущего депозитного стрика и турнирного прогресса.
              </p>
            </section>

            {/* Section 3 */}
            <section id="online" className="flex flex-col gap-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#f6a928]">
                Фаро казино онлайн: почему выгодно в Faro Casino играть на деньги
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-neutral-300">
                Игровой клуб <strong>фаро казино онлайн</strong> завоевал признание благодаря прозрачным правилам и оперативному расчету ставок. Проект <strong>faro казино</strong> предлагает щедрый приветственный пакет на первые пополнения счёта, бесплатные вращения и регулярный кэшбэк до 20%. Желающие в <strong>faro casino играть</strong> могут выбрать среди сотен топовых тайтлов: от классических аппаратов до современных краш-игр и рулетки. Каждый авторизованный гость в <strong>фаро казино</strong> получает доступ к ежедневным призовым турнирам с крупным призовым фондом. Если вам необходим проверенный <strong>faro casino официальный</strong> ресурс или актуальное <strong>фаро казино зеркало рабочее</strong>, зарегистрируйтесь прямо сейчас по кнопке перехода, получите стартовый подарок и оцените первоклассный уровень азартных развлечений онлайн.
              </p>
            </section>

            {/* CTA Banner inside SEO text */}
            <div className="my-2 p-6 rounded-2xl bg-gradient-to-r from-[#221c10] via-[#1a1712] to-[#121417] border border-[#735728] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-lg font-bold text-white">Готовы испытать удачу в Faro Casino?</div>
                <div className="text-xs text-neutral-400 mt-1">
                  Пройдите регистрацию за 15 секунд и заберите стартовый бонус до 150% + фриспины!
                </div>
              </div>
              <a
                href={REF_URL}
                className="k8q2-gold-btn px-8 py-3 text-sm font-bold shrink-0 w-full sm:w-auto"
              >
                Играть в Faro Casino
              </a>
            </div>
          </article>

          {/* Footer with Hashtags Anchor Links (User Memory Requirement) */}
          <footer className="mt-8 pt-6 pb-12 border-t border-[#212429] flex flex-col gap-4 text-xs text-neutral-500">
            <div className="flex flex-wrap gap-2 text-neutral-400">
              <a href="#official" className="hover:text-[#f6a928] transition">#farocasino</a>
              <a href="#zerkalo" className="hover:text-[#f6a928] transition">#farocasinoзеркало</a>
              <a href="#online" className="hover:text-[#f6a928] transition">#farocasinoиграть</a>
              <a href="#official" className="hover:text-[#f6a928] transition">#farocasinoофициальный</a>
              <a href="#official" className="hover:text-[#f6a928] transition">#farocasinoофициальныйсайт</a>
              <a href="#online" className="hover:text-[#f6a928] transition">#faroказино</a>
              <a href="#official" className="hover:text-[#f6a928] transition">#фароказино</a>
              <a href="#zerkalo" className="hover:text-[#f6a928] transition">#фароказинозеркало</a>
              <a href="#zerkalo" className="hover:text-[#f6a928] transition">#фароказинозеркалорабочее</a>
              <a href="#online" className="hover:text-[#f6a928] transition">#фароказиноиграть</a>
              <a href="#online" className="hover:text-[#f6a928] transition">#фароказиноонлайн</a>
              <a href="#official" className="hover:text-[#f6a928] transition">#фароказиноофициальный</a>
              <a href="#official" className="hover:text-[#f6a928] transition">#фароказиноофициальныйсайт</a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#1b1e24] text-[11px] text-neutral-500">
              <p>© 2026 Faro Casino. Официальный сайт и рабочее зеркало фаро казино онлайн. 18+</p>
              <div className="flex items-center gap-4">
                <a href={REF_URL} className="hover:text-neutral-300">Правила и условия</a>
                <a href={REF_URL} className="hover:text-neutral-300">Ответственная игра</a>
                <a href={REF_URL} className="hover:text-neutral-300">Поддержка 24/7</a>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Floating Live Chat Widget Button */}
      <a
        href={REF_URL}
        className="k8q2-live-chat-fab"
        aria-label="Онлайн чат поддержки Faro Casino"
      >
        <svg className="w-6 h-6 text-[#111315]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
        </svg>
      </a>
    </div>
  )
}
