"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code,
  GraduationCap,
  Briefcase,
  Globe,
  Cpu,
  TrendingUp,
  Zap,
  Shield,
  Users,
  Lightbulb,
  Rocket,
  CheckCircle,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <main className="w-full bg-gradient-to-br from-black via-slate-950 to-slate-900 text-white overflow-x-hidden">
      {/* Header/Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-black/60 backdrop-blur-lg border-b border-slate-800/50 w-full"
      >
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Brain className="text-cyan-400" size={32} />
            <span className="text-2xl font-bold">AI آینده با</span>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)] pointer-events-none"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.06),transparent_50%)] pointer-events-none"
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent leading-tight mb-6"
          >
            آینده با هوش مصنوعی
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8"
          >
            هوش مصنوعی در حال متحول کردن جهان است؛ از تشخیص بیماری‌ها تا خودروهای خودران، از ترجمه زبان‌ها تا کشف داروهای جدید، این فناوری مرزهای توانایی‌های انسان را بی‌نهایت می‌کند.
          </motion.p>

          {/* Section Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a href="#about" className="px-5 py-2 rounded-lg bg-cyan-600/80 hover:bg-cyan-500 text-white font-semibold transition-all duration-200">هوش مصنوعی چیست؟</a>
            <a href="#applications" className="px-5 py-2 rounded-lg bg-purple-600/80 hover:bg-purple-500 text-white font-semibold transition-all duration-200">کاربردها</a>
            <a href="#statistics" className="px-5 py-2 rounded-lg bg-blue-600/80 hover:bg-blue-500 text-white font-semibold transition-all duration-200">آمار</a>
            <a href="#benefits" className="px-5 py-2 rounded-lg bg-pink-600/80 hover:bg-pink-500 text-white font-semibold transition-all duration-200">مزایا</a>
            <a href="#tech" className="px-5 py-2 rounded-lg bg-orange-600/80 hover:bg-orange-500 text-white font-semibold transition-all duration-200">تکنولوژی</a>
            <a href="#challenges" className="px-5 py-2 rounded-lg bg-red-600/80 hover:bg-red-500 text-white font-semibold transition-all duration-200">چالش‌ها</a>
            <a href="#future" className="px-5 py-2 rounded-lg bg-green-600/80 hover:bg-green-500 text-white font-semibold transition-all duration-200">آینده</a>
            <a href="#faq" className="px-5 py-2 rounded-lg bg-slate-700/80 hover:bg-slate-600 text-white font-semibold transition-all duration-200">سوالات متداول</a>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-10 text-cyan-400 text-2xl"
        >
          ↓
        </motion.div>
      </section>

      {/* About AI Section */}
      <section id="about" className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-slate-900/30 to-black/20 scroll-mt-24">
        <div className="container-lg mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6">
              هوش مصنوعی چیست؟
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 w-full"
          >
            {[
              {
                title: "یادگیری ماشین",
                desc: "سیستم‌هایی که از داده‌ها یاد می‌گیرند و بدون برنامه‌نویسی صریح بهتر می‌شوند",
              },
              {
                title: "شبکه‌های عصبی عمیق",
                desc: "الگوهای پیچیده در داده‌های بزرگ را تشخیص می‌دهند و تصمیمات دقیق می‌گیرند",
              },
              {
                title: "پردازش زبان طبیعی",
                desc: "فهم و تولید متن و گفتار انسانی به نحوی واقعی و پویا",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/40 p-6 md:p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col h-full"
              >
                <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base flex-grow">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="bg-gradient-to-r from-cyan-600/15 to-purple-600/15 border border-cyan-500/30 p-8 md:p-12 rounded-3xl backdrop-blur-sm"
          >
            <br></br>
            <p className="text-lg sm:text-xl text-gray-200 leading-loose">
              امروزه هوش مصنوعی در همه جنبه‌های زندگی ما حضور دارد: از پیشنهادهای شخصی‌سازی‌شده در نتفلیکس تا تشخیص سرطان در بیمارستان‌ها، از بازی‌های ویدیویی تا پیش‌بینی آب‌وهوا. این فناوری زندگی میلیاردها نفر را تحت تأثیر قرار داده است.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-24">
        <div className="container-lg mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
              کاربردهای واقعی
            </h2>
            <p className="text-xl text-gray-300">هوش مصنوعی در اینجا و اکنون کار می‌کند</p>
                      <p className="text-xl text-gray-300">هوش مصنوعی همین حالا در زندگی ما نقش دارد.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
          >
            {[
              {
                icon: <Briefcase className="w-10 h-10 text-cyan-400" />,
                title: "بازار کار",
                desc: "اتوماسیون فرآیندها، تحلیل داده، و افزایش بهره‌وری",
                examples: "چت‌بات‌های پشتیبانی، تجزیه داده‌های مالی",
              },
              {
                icon: <GraduationCap className="w-10 h-10 text-purple-400" />,
                title: "تحصیل",
                desc: "یادگیری شخصی‌شده، تدریس هوشمند و ارزیابی خودکار",
                examples: "دستیارهای شخصی یادگیری، تصحیح خودکار",
              },
              {
                icon: <Code className="w-10 h-10 text-pink-400" />,
                title: "توسعه نرم‌افزار",
                desc: "تولید کد، دیباگ خودکار، و بهینه‌سازی کارایی",
                examples: "GitHub Copilot، تولید کد از توضیحات",
              },
              {
                icon: <Globe className="w-10 h-10 text-blue-400" />,
                title: "محیط زیست",
                desc: "پیش‌بینی تغییرات آب‌و‌هوا و بهینه‌سازی انرژی",
                examples: "نظارت جنگل‌ها، پیش‌بینی آلودگی",
              },
              {
                icon: <Cpu className="w-10 h-10 text-orange-400" />,
                title: "صنعت",
                desc: "نگهداری پیش‌گویانه، رباتیک، و کنترل کیفیت",
                examples: "ربات‌های خودمختار، تشخیص عیب",
              },
              {
                icon: <Brain className="w-10 h-10 text-red-400" />,
                title: "بهداشت و سلامت",
                desc: "تشخیص بیماری، کشف دارو، و جراحی ربات",
                examples: "تشخیص سرطان، توصیه درمان شخصی",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group bg-gradient-to-br from-slate-800/60 to-slate-900/40 p-6 md:p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/40 transition backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/5 flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-slate-700/50 to-slate-800/50">{item.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base flex-grow">
                  {item.desc}
                </p>
                <p className="text-xs sm:text-sm text-cyan-300/70 border-t border-slate-700/30 pt-4 mt-2">
                  <span className="font-semibold block mb-2">مثال‌ها:</span> {item.examples}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-slate-900/30 to-black/20 relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.05),transparent_50%)] pointer-events-none" />

        <div className="container-lg mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-6">
              تاثیر جهانی هوش مصنوعی
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full"
          >
            {[
              { number: "97%", label: "کسب‌و‌کار بزرگ AI" },
              { number: "$1.8T", label: "بازار 2030" },
              { number: "70%", label: "شغل بهتر" },
              { number: "85%", label: "رضایت کاربر" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="text-center p-4 md:p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/40 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition flex flex-col h-full min-h-fit"
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-black text-cyan-400 mb-2 flex-grow flex items-center justify-center"
                >
                  {stat.number}
                </motion.div>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-24">
        <div className="container-lg mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
              مزایای کلیدی
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full"
          >
            {[
              {
                icon: <Zap size={24} />,
                title: "سرعت",
                desc: "پردازش سریع داده",
              },
              {
                icon: <TrendingUp size={24} />,
                title: "بهبود",
                desc: "یادگیری مستمر",
              },
              {
                icon: <Shield size={24} />,
                title: "بهره‌وری",
                desc: "کاهش هزینه",
              },
              {
                icon: <Lightbulb size={24} />,
                title: "ایده‌پردازی",
                desc: "کشف فرصت‌ها",
              },
              {
                icon: <Users size={24} />,
                title: "شخصی‌سازی",
                desc: "تجربه‌ی خاص",
              },
              {
                icon: <Rocket size={24} />,
                title: "انقلاب",
                desc: "تغییر صنایع",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.02, x: 8 }}
                className="flex gap-4 p-4 md:p-6 bg-gradient-to-r from-slate-800/60 to-slate-900/40 rounded-xl border border-slate-700/50 hover:border-purple-500/40 transition flex-col sm:flex-row h-full"
              >
                <div className="text-purple-400 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-slate-700/30">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-snug">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="tech" className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-slate-900/30 to-black/20 scroll-mt-24">
        <div className="container-lg mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-4">
              فناوری‌های پایه
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center w-full">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={containerVariants}
              className="space-y-3 order-2 lg:order-1"
            >
              {[
                "شبکه‌های عصبی عمیق",
                "پردازش زبان طبیعی",
                "بینایی کامپیوتری",
                "یادگیری تعزیزی",
                "Transformer models",
                "مدل‌های GPT",
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-3 p-3 sm:p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition"
                >
                  <CheckCircle className="text-cyan-400 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base text-gray-200">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 sm:p-8 md:p-10 rounded-3xl border border-slate-700/50 text-center order-1 lg:order-2 flex flex-col items-center justify-center h-full"
            >
              <Cpu className="text-cyan-400 mb-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-2">
                قدرت محاسباتی بی‌نظیر
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                پی‌در‌پی تکامل و قدرت بیشتر
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                هوش مصنوعی نسل جدید
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                فناوری‌های روز امروز ما را قادر می‌سازند تا سیستم‌هایی ایجاد کنیم که عملاً هوشمند، متعاطف و بسیار موثر هستند.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 scroll-mt-24">
        <div className="container-lg mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
              چالش‌های پیش رو
            </h2>
            <p className="text-base sm:text-lg text-gray-300">درک مسائل مهم</p>
                      <p className="text-base sm:text-lg text-gray-300">درک مسائل مهم</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
          >
            {[
              {
                title: "تعصب و منصفانه",
                desc: "داده‌های نامناسب منجر به تصمیمات غلط",
              },
              {
                title: "حریم خصوصی",
                desc: "ایمنی اطلاعات شخصی افراد",
              },
              {
                title: "امنیت سایبری",
                desc: "جلوگیری از حملات و دستکاری",
              },
              {
                title: "شفافیت",
                desc: "درک کار سیستم‌های پیچیده",
              },
              {
                title: "بیکاری",
                desc: "تاثیر بر بازار کار",
              },
              {
                title: "محیط‌زیست",
                desc: "مصرف انرژی در آموزش",
              },
            ].map((challenge, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-4 md:p-6 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-xl border border-red-500/30 hover:border-red-500/60 transition flex flex-col h-full"
              >
                <h3 className="text-base sm:text-lg font-bold text-red-400 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm flex-grow">
                  {challenge.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Future Section */}
      <section id="future" className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-purple-900/20 to-cyan-900/20 relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.08),transparent_50%)] pointer-events-none" />

        <div className="container-lg mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              آینده هوش مصنوعی
            </h2>
            <p className="text-base sm:text-lg text-gray-300">انتظارات آینده</p>
                      <p className="text-base sm:text-lg text-gray-300">آنچه در آینده انتظار می‌رود</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            className="space-y-4 md:space-y-6 w-full"
          >
            {[
              {
                year: "2026-27",
                title: "هوش بهتر",
                text: "مدل‌های درک‌گر و تصمیم‌گیری بهتر",
              },
              {
                year: "2028-30",
                title: "یکپارچگی",
                text: "AI در تمام ابزارهای روزمره",
              },
              {
                year: "2030+",
                title: "تحول جامعه",
                text: "تغییر بنیادی در آموزش، سلامت، کار",
              },
            ].map((future, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ x: 8 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 md:p-6 bg-gradient-to-r from-slate-800/60 to-slate-900/40 rounded-xl border border-slate-700/50 hover:border-purple-500/40 transition flex-grow"
              >
                <div className="text-cyan-400 font-bold text-base sm:text-lg flex-shrink-0 w-full sm:w-24">
                  {future.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {future.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                    {future.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-slate-900/30 to-black/20 scroll-mt-24">
        <div className="container-md mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-4">
              سوالات متداول
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            className="space-y-3 max-w-2xl mx-auto w-full"
          >
            {[
              {
                q: "آیا AI انسان‌ها را جایگزین می‌کند؟",
                a: "نه، AI ابزاری برای تقویت انسان است.",
              },
              {
                q: "چگونه یاد بگیرم؟",
                a: "دوره‌های آنلاین و پروژه‌های عملی.",
              },
              {
                q: "آیا AI امن است؟",
                a: "مثل هر ابزار، استفاده درست آن را امن می‌کند.",
              },
              {
                q: "هزینه چقدر است؟",
                a: "بسیاری رایگان یا ارزان‌اند.",
              },
            ].map((faq, i) => (
              <motion.details
                key={i}
                variants={fadeUp}
                className="group p-4 md:p-6 bg-gradient-to-r from-slate-800/60 to-slate-900/40 rounded-lg border border-slate-700/50 hover:border-cyan-500/40 transition cursor-pointer"
              >
                <summary className="flex justify-between items-center font-bold text-base text-white">
                  {faq.q}
                  <span className="text-cyan-400 group-open:rotate-180 transition text-xl">
                    ▼
                  </span>
                </summary>
                <motion.p className="mt-3 text-gray-300 leading-relaxed text-sm">
                  {faq.a}
                </motion.p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-r from-cyan-600/30 to-purple-600/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_60%)] pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="container-md mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            همین الان شروع کنید
          </h2>
          <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed">
            برای شروع کار با هوش مصنوعی، با ابزار تغییر آی‌پی وارد سایت زیر شوید و با Gemini چت کنید:
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
            className="flex justify-center"
          >
            <a
              href="https://gemini.google.com/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transition block"
            >
              ورود به Gemini
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-t border-slate-800/50 bg-black/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >
          <p className="text-center text-gray-400 text-lg font-semibold">
            ساخته شده با عشق ❤️
          </p>
        </motion.div>
      </footer>
    </main>
  );
}
