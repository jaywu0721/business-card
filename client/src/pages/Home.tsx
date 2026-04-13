/*
Design philosophy for this file:
- Contemporary corporate minimalism for a residential construction professional.
- Left-heavy composition with structured information hierarchy and clear action paths.
- Use restrained gray-green and bronze cues, architectural spacing, and low-amplitude motion.
- Every section must reinforce trust, precision, and personal-brand-first positioning.
*/
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  Phone,
  QrCode,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const companies = [
  {
    name: "鷁欣建設",
    role: "官方網站入口",
    href: "https://yisin-web.vercel.app/",
  },
  {
    name: "鷁崎建設",
    role: "官方網站入口",
    href: "https://yiqi-web.vercel.app/",
  },
  {
    name: "啟合營造",
    role: "事業體資訊呈現",
    href: "mailto:jaywu0721jay@gmail.com?subject=%E5%95%9F%E5%90%88%E7%87%9F%E9%80%A0%E8%81%AF%E7%B5%A1%E6%B4%BD%E8%A9%A2",
  },
];

const contacts = [
  {
    icon: Phone,
    label: "手機",
    value: "0928-136-023",
    href: "tel:0928136023",
  },
  {
    icon: Mail,
    label: "Email",
    value: "jaywu0721jay@gmail.com",
    href: "mailto:jaywu0721jay@gmail.com",
  },
  {
    icon: UserRound,
    label: "LINE ID",
    value: "jay0928136023",
    href: "https://line.me/ti/p/~jay0928136023",
  },
  {
    icon: MapPin,
    label: "地址",
    value: "300 新竹市香山區延平路二段 567 號",
    href: "https://maps.google.com/?q=300%E6%96%B0%E7%AB%B9%E5%B8%82%E9%A6%99%E5%B1%B1%E5%8D%80%E5%BB%B6%E5%B9%B3%E8%B7%AF%E4%BA%8C%E6%AE%B5567%E8%99%9F",
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
          <div className="grid w-full gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <motion.section
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[2rem] border border-white/45 bg-white/58 p-6 shadow-[0_30px_90px_rgba(55,64,61,0.16)] backdrop-blur-xl md:p-8 lg:p-10"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(108,89,71,0)_0%,rgba(108,89,71,0.85)_45%,rgba(86,104,99,0.95)_100%)]" />
              <div className="mb-8 flex items-start justify-between gap-5 border-b border-[rgba(87,104,100,0.16)] pb-6">
                <div>
                  <p className="eyebrow">JAYWU CARD PROFILE</p>
                  <h1 className="mt-3 font-serif-display text-4xl tracking-[0.08em] text-[var(--ink-strong)] md:text-6xl">
                    吳杰恩
                  </h1>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[var(--ink-soft)] md:text-base">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(87,104,100,0.18)] bg-white/60 px-3 py-1.5">
                      <ShieldCheck className="h-4 w-4 text-[var(--brand-bronze)]" />
                      土木技師
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(87,104,100,0.18)] bg-white/60 px-3 py-1.5">
                      <Building2 className="h-4 w-4 text-[var(--brand-green)]" />
                      住宅建設
                    </span>
                  </div>
                </div>

                <div className="hidden rounded-[1.35rem] border border-white/70 bg-white/65 px-4 py-4 text-right shadow-[0_15px_40px_rgba(55,64,61,0.08)] md:block">
                  <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[var(--ink-muted)]">
                    Personal Brand First
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    住宅建設與工程管理形象入口
                  </p>
                </div>
              </div>

              <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-6">
                  <div>
                    <p className="section-kicker">專業定位</p>
                    <p className="mt-3 max-w-xl text-base leading-8 text-[var(--ink-soft)] md:text-lg">
                      以個人專業作為名片對外識別核心，整合鷁欣建設、鷁崎建設與啟合營造之事業資訊，將聯絡動線、公司入口與住宅建設定位集中在單一頁面中。
                    </p>
                  </div>

                  <div className="rounded-[1.6rem] border border-[rgba(87,104,100,0.16)] bg-[rgba(247,245,240,0.86)] p-5 md:p-6">
                    <p className="section-kicker">聯絡資訊</p>
                    <div className="mt-5 space-y-3">
                      {contacts.map(({ icon: Icon, label, value, href }) => (
                        <a
                          key={label}
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noreferrer" : undefined}
                          className="group flex items-start gap-4 rounded-2xl border border-transparent bg-white/80 px-4 py-4 transition duration-300 hover:border-[rgba(87,104,100,0.18)] hover:bg-white"
                        >
                          <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(86,104,99,0.10)] text-[var(--brand-green)] transition duration-300 group-hover:bg-[rgba(108,89,71,0.14)] group-hover:text-[var(--brand-bronze)]">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-xs uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                              {label}
                            </span>
                            <span className="mt-1 block break-all text-sm leading-6 text-[var(--ink-strong)] md:text-base">
                              {value}
                            </span>
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <div className="rounded-[1.6rem] border border-[rgba(87,104,100,0.16)] bg-[rgba(252,250,246,0.85)] p-5 md:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="section-kicker">事業體入口</p>
                        <p className="mt-3 max-w-md text-sm leading-7 text-[var(--ink-soft)] md:text-base">
                          兩個網站入口對應名片 QR Code 掃描後的主要導流方向；啟合營造則保留為同體系資訊揭露。
                        </p>
                      </div>
                      <div className="hidden rounded-full border border-[rgba(87,104,100,0.16)] bg-white/75 px-3 py-2 text-xs uppercase tracking-[0.18em] text-[var(--ink-muted)] md:block">
                        3 entities
                      </div>
                    </div>

                    <div className="mt-5 space-y-4">
                      {companies.map((company, index) => (
                        <motion.a
                          key={company.name}
                          href={company.href}
                          target="_blank"
                          rel="noreferrer"
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.08 * index + 0.18, duration: 0.45 }}
                          className="group block rounded-[1.5rem] border border-[rgba(87,104,100,0.14)] bg-white/86 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(108,89,71,0.24)] hover:shadow-[0_20px_40px_rgba(55,64,61,0.10)]"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-xs uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                                0{index + 1}
                              </p>
                              <h2 className="mt-2 text-xl font-semibold tracking-[0.04em] text-[var(--ink-strong)] md:text-2xl">
                                {company.name}
                              </h2>
                              <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)] md:text-base">
                                {company.role}
                              </p>
                            </div>
                            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(87,104,100,0.14)] bg-[rgba(86,104,99,0.08)] text-[var(--brand-green)] transition duration-300 group-hover:border-[rgba(108,89,71,0.22)] group-hover:bg-[rgba(108,89,71,0.10)] group-hover:text-[var(--brand-bronze)]">
                              <ArrowUpRight className="h-5 w-5" />
                            </span>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <div className="info-band rounded-[1.6rem] p-5 md:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="section-kicker text-white/70">QR Code 用途</p>
                        <p className="mt-3 text-lg leading-8 text-white md:text-xl">
                          這個頁面是名片上的唯一 QR 導流入口，避免同時放兩個 QR Code 造成視覺擁擠與掃描猶豫。
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm tracking-[0.12em] text-white/90 backdrop-blur-sm">
                        <QrCode className="h-4 w-4" />
                        single scan flow
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
              <div className="relative z-10">
                <div className="rounded-[1.5rem] border border-white/12 bg-white/8 p-4">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663069716470/bCLDffkW86NBM8xdqEG3Rz/logo_1d92de0c.png"
                    alt="公司識別標誌"
                    className="h-16 w-auto object-contain"
                  />
                  <div className="mt-6 overflow-hidden rounded-[1.35rem] border border-white/10">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663069716470/bCLDffkW86NBM8xdqEG3Rz/jaywu-hero-01-HSsAnjZCDwbW9BAbEvBZAj.webp"
                      alt="住宅建設形象視覺"
                      className="h-56 w-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                    名片文案主軸
                  </p>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-white/82 md:text-base">
                    <p>
                      個人識別：<span className="text-white">吳杰恩｜土木技師</span>
                    </p>
                    <p>
                      專業焦點：<span className="text-white">住宅建設規劃與工程管理</span>
                    </p>
                    <p>
                      關聯公司：<span className="text-white">鷁欣建設、鷁崎建設、啟合營造</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8 border-t border-white/12 pt-6 text-sm leading-7 text-white/72">
                <p className="text-xs uppercase tracking-[0.24em] text-white/48">
                  Address
                </p>
                <p className="mt-3 max-w-sm text-base text-white/86">
                  300 新竹市香山區延平路二段 567 號
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </main>
  );
}
