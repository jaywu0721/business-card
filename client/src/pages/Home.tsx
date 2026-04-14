/*
Design philosophy for this file:
- Architectural dual-portal minimalism focused on two clear company entry points.
- Asymmetric composition, restrained gray-green and bronze accents, and low-noise hierarchy.
- No personal profile content; every section must reinforce direct public access and fast scan-to-site flow.
- Interaction should feel precise, calm, and corporate rather than promotional.
*/
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, QrCode, ShieldCheck } from "lucide-react";

const portals = [
  {
    id: "01",
    name: "鷁欣建設",
    description: "前往鷁欣建設官方網站入口",
    href: "https://yisin.eaglebuilt.company/",
  },
  {
    id: "02",
    name: "鷁崎建設",
    description: "前往鷁崎建設官方網站入口",
    href: "https://yiqi.eaglebuilt.company/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="relative isolate min-h-screen">
        <div className="hero-overlay absolute inset-0" />
        <div className="blueprint-grid absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute inset-y-0 left-[8%] hidden w-px bg-[linear-gradient(to_bottom,transparent,rgba(87,104,100,0.55),transparent)] lg:block" />

        <div className="container relative z-10 flex min-h-screen items-center py-10 lg:py-16">
          <div className="grid w-full gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
            <motion.section
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[2rem] border border-white/45 bg-white/58 p-6 shadow-[0_30px_90px_rgba(55,64,61,0.16)] backdrop-blur-xl md:p-8 lg:p-10"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(108,89,71,0)_0%,rgba(108,89,71,0.85)_45%,rgba(86,104,99,0.95)_100%)]" />

              <div className="mb-8 flex items-start justify-between gap-5 border-b border-[rgba(87,104,100,0.16)] pb-6">
                <div>
                  <p className="eyebrow">PUBLIC COMPANY PORTAL</p>
                  <h1 className="mt-3 font-serif-display text-4xl tracking-[0.08em] text-[var(--ink-strong)] md:text-6xl">
                    公司入口
                  </h1>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--ink-soft)] md:text-lg">
                    掃描名片 QR Code 後，可直接進入兩個公開網站入口。此頁面僅保留必要導流，不提供個人資訊與其他額外內容。
                  </p>
                </div>

                <div className="hidden rounded-[1.35rem] border border-white/70 bg-white/65 px-4 py-4 text-right shadow-[0_15px_40px_rgba(55,64,61,0.08)] md:block">
                  <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--ink-muted)]">
                    Open Access
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    無需登入即可直接前往官網
                  </p>
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[1.6rem] border border-[rgba(87,104,100,0.16)] bg-[rgba(247,245,240,0.86)] p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="section-kicker">網站入口</p>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--ink-soft)] md:text-base">
                        使用者掃碼後只需做一個決定：前往鷁欣建設或鷁崎建設。這個方向比較對，因為把個人資料留在入口頁只會稀釋導流目的。
                      </p>
                    </div>
                    <div className="hidden rounded-full border border-[rgba(87,104,100,0.16)] bg-white/75 px-3 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ink-muted)] md:block">
                      2 portals
                    </div>
                  </div>

                  <div className="mt-5 space-y-4">
                    {portals.map((portal, index) => (
                      <motion.a
                        key={portal.name}
                        href={portal.href}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 * index + 0.16, duration: 0.45 }}
                        className="group block rounded-[1.5rem] border border-[rgba(87,104,100,0.14)] bg-white/88 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(108,89,71,0.24)] hover:shadow-[0_20px_40px_rgba(55,64,61,0.10)]"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                              {portal.id}
                            </p>
                            <h2 className="mt-2 text-2xl font-semibold tracking-[0.04em] text-[var(--ink-strong)] md:text-3xl">
                              {portal.name}
                            </h2>
                            <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)] md:text-base">
                              {portal.description}
                            </p>
                          </div>
                          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(87,104,100,0.14)] bg-[rgba(86,104,99,0.08)] text-[var(--brand-green)] transition duration-300 group-hover:border-[rgba(108,89,71,0.22)] group-hover:bg-[rgba(108,89,71,0.10)] group-hover:text-[var(--brand-bronze)]">
                            <ArrowUpRight className="h-5 w-5" />
                          </span>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="rounded-[1.6rem] border border-[rgba(87,104,100,0.16)] bg-[rgba(252,250,246,0.85)] p-5 md:p-6">
                    <p className="section-kicker">使用方式</p>
                    <div className="mt-5 space-y-4">
                      <div className="rounded-[1.35rem] border border-[rgba(87,104,100,0.12)] bg-white/85 p-4">
                        <div className="flex items-start gap-3">
                          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(86,104,99,0.10)] text-[var(--brand-green)]">
                            <QrCode className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-sm uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                              Step 1
                            </p>
                            <p className="mt-2 text-base leading-7 text-[var(--ink-strong)]">
                              掃描名片上的 QR Code 進入本頁。
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[1.35rem] border border-[rgba(87,104,100,0.12)] bg-white/85 p-4">
                        <div className="flex items-start gap-3">
                          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(108,89,71,0.12)] text-[var(--brand-bronze)]">
                            <Building2 className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-sm uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                              Step 2
                            </p>
                            <p className="mt-2 text-base leading-7 text-[var(--ink-strong)]">
                              點選所需公司入口，直接前往對應網站。
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[1.35rem] border border-[rgba(87,104,100,0.12)] bg-white/85 p-4">
                        <div className="flex items-start gap-3">
                          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(86,104,99,0.10)] text-[var(--brand-green)]">
                            <ShieldCheck className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-sm uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                              Access
                            </p>
                            <p className="mt-2 text-base leading-7 text-[var(--ink-strong)]">
                              頁面定位為公開入口頁，不應要求訪客登入後才能查看內容。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="info-band rounded-[1.6rem] p-5 md:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="section-kicker text-white/70">入口頁原則</p>
                        <p className="mt-3 text-lg leading-8 text-white md:text-xl">
                          單一掃碼、雙入口導流；少即是多，避免在入口頁承載與導流無關的資訊。
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm tracking-[0.12em] text-white/90 backdrop-blur-sm">
                        <QrCode className="h-4 w-4" />
                        public scan flow
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.aside
              initial={{ opacity: 0, x: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[rgba(87,104,100,0.18)] bg-[rgba(46,58,56,0.74)] p-6 text-white shadow-[0_28px_90px_rgba(35,40,39,0.28)] backdrop-blur-xl md:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
              <div className="absolute -right-14 bottom-10 h-44 w-44 rounded-full bg-[rgba(108,89,71,0.24)] blur-3xl" />

              <div className="relative z-10 rounded-[1.5rem] border border-white/12 bg-white/8 p-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663069716470/bCLDffkW86NBM8xdqEG3Rz/logo_1d92de0c.png"
                  alt="公司識別標誌"
                  className="h-16 w-auto object-contain"
                />

                <div className="mt-6 overflow-hidden rounded-[1.35rem] border border-white/10">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663069716470/bCLDffkW86NBM8xdqEG3Rz/jaywu-hero-01-HSsAnjZCDwbW9BAbEvBZAj.webp"
                    alt="建築外觀形象視覺"
                    className="h-64 w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative z-10 mt-6 rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                  Public Routing
                </p>
                <div className="mt-4 space-y-4 text-sm leading-7 text-white/82 md:text-base">
                  <p>
                    本頁用途：<span className="text-white">作為名片 QR Code 的公開導流頁</span>
                  </p>
                  <p>
                    保留內容：<span className="text-white">鷁欣建設、鷁崎建設兩個網站入口</span>
                  </p>
                  <p>
                    移除內容：<span className="text-white">個人聯絡資料、個人介紹與其他非必要資訊</span>
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-8 border-t border-white/12 pt-6 text-sm leading-7 text-white/72">
                <p className="text-xs uppercase tracking-[0.24em] text-white/48">
                  Portal URLs
                </p>
                <div className="mt-3 space-y-3 text-base text-white/86">
                  <p>鷁欣建設｜https://yisin.eaglebuilt.company/</p>
                  <p>鷁崎建設｜https://yiqi.eaglebuilt.company/</p>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </main>
  );
}
