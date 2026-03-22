import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Apple, Play, X, QrCode } from "lucide-react";
import { isMobile, isIOS, isAndroid } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { THEMES, ThemeId } from "../constants/themes";
import { cn } from "../lib/utils";

interface HeroProps {
  currentTheme: ThemeId;
}

export const Hero: React.FC<HeroProps> = ({ currentTheme }) => {
  const { t } = useTranslation();
  const theme = THEMES[currentTheme];
  const [activeQR, setActiveQR] = useState<"apple" | "google" | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(!isMobile);
  }, []);

  const handleStoreClick = (store: "apple" | "google") => {
    if (isDesktop) {
      setActiveQR(activeQR === store ? null : store);
    } else {
      const url =
        store === "apple"
          ? "https://apps.apple.com/app/carely"
          : "https://play.google.com/store/apps/details?id=com.carely";
      window.open(url, "_blank");
    }
  };

  return (
    <section
      id="home"
      className={cn("relative pt-28 pb-16 overflow-hidden", theme.bg)}
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-indigo-500/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border mb-6",
            theme.border,
            theme.accentText,
            "bg-white/5 backdrop-blur-sm"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          <span>{t("hero.badge")}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            "text-4xl md:text-6xl font-extrabold tracking-tight mb-4 max-w-3xl mx-auto leading-[1.1]",
            theme.text
          )}
        >
          {t("hero.title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed opacity-80",
            theme.text
          )}
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* CTAs */}
        <div className="flex flex-col items-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3"
          >
            <button
              onClick={() => handleStoreClick("apple")}
              className={cn(
                "w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/20",
                activeQR === "apple" ? "ring-2 ring-white/50" : "",
                theme.accent,
                "text-white"
              )}
            >
              <Apple className="w-4 h-4" />
              <span>App Store</span>
            </button>
            <button
              onClick={() => handleStoreClick("google")}
              className={cn(
                "w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all hover:scale-105 active:scale-95 border bg-white/5 backdrop-blur-sm",
                activeQR === "google" ? "ring-2 ring-white/50" : "",
                theme.border,
                theme.text
              )}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Google Play</span>
            </button>
          </motion.div>

          {/* QR Code Expansion */}
          <AnimatePresence>
            {activeQR && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0, scale: 0.95 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  marginTop: 24,
                  scale: 1
                }}
                exit={{ height: 0, opacity: 0, marginTop: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="w-full max-w-xs px-4"
              >
                <div
                  className={cn(
                    "p-6 rounded-3xl border backdrop-blur-2xl relative shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
                    theme.bg,
                    theme.border
                  )}
                >
                  <button
                    onClick={() => setActiveQR(null)}
                    className={cn(
                      "absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 transition-colors z-10",
                      theme.text
                    )}
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="flex flex-col items-center space-y-5">
                    <div className="p-4 bg-white rounded-2xl shadow-inner">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${activeQR === "apple" ? "https://apps.apple.com/app/carely" : "https://play.google.com/store/apps/details?id=com.carely"}`}
                        alt="QR Code"
                        className="w-32 h-32"
                      />
                    </div>
                    <div className="text-center">
                      <div
                        className={cn("text-base font-bold mb-1", theme.text)}
                      >
                        Scan to Download
                      </div>
                      <div
                        className={cn(
                          "text-xs opacity-60 leading-relaxed",
                          theme.text
                        )}
                      >
                        Open your camera to scan the{" "}
                        {activeQR === "apple" ? "App Store" : "Play Store"} code
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mockups */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative max-w-6xl mx-auto mt-12"
        >
          <div className="flex items-center justify-center space-x-0 md:-space-x-24">
            {/* Side Phone Left */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: -12 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative z-0 w-full max-w-[200px] md:max-w-[240px] aspect-[9/19.5] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden hidden md:block opacity-40 hover:opacity-100 transition-opacity duration-500"
            >
              <img
                src="/images/testimg8.jpg"
                alt="App Screenshot 1"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            {/* Center Phone */}
            <div className="relative z-20 w-full max-w-[280px] md:max-w-[300px] aspect-[9/19.5] bg-slate-900 rounded-[3rem] border-[10px] border-slate-900 shadow-[0_0_60px_rgba(0,0,0,0.4)] overflow-hidden ring-1 ring-white/10 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 w-full h-full">
                <img
                  src="/images/testimg7.jpg"
                  alt="Main App Screenshot"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-6 right-6 text-left">
                  <div className="w-12 h-1.5 bg-white/30 rounded-full mb-4" />
                  <div className="h-4 w-3/4 bg-white/20 rounded mb-2" />
                  <div className="h-4 w-1/2 bg-white/20 rounded" />
                </div>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20" />
            </div>

            {/* Side Phone Right */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 12 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative z-0 w-full max-w-[200px] md:max-w-[240px] aspect-[9/19.5] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden hidden md:block opacity-40 hover:opacity-100 transition-opacity duration-500"
            >
              <img
                src="/images/testimg9.jpg"
                alt="App Screenshot 2"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={cn(
              "absolute top-1/4 lg:left-0 xl:-left-16 p-4 rounded-2xl border shadow-2xl backdrop-blur-xl z-30 hidden lg:block",
              theme.bg,
              theme.border
            )}
          >
            <div className="flex items-center space-x-3">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg",
                  theme.accent
                )}
              >
                <Apple className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className={cn("text-xs font-bold", theme.text)}>
                  {t("highlight.title")}
                </div>
                <div className={cn("text-[10px] opacity-60", theme.text)}>
                  {t("highlight.subtitle")}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className={cn(
              "absolute bottom-1/4 lg:right-0 xl:-right-16 p-4 rounded-2xl border shadow-2xl backdrop-blur-xl z-30 hidden lg:block",
              theme.bg,
              theme.border
            )}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/20">
                99%
              </div>
              <div className="text-left">
                <div className={cn("text-xs font-bold", theme.text)}>
                  {t("statsCard.title")}
                </div>
                <div className={cn("text-[10px] opacity-60", theme.text)}>
                  {t("statsCard.subtitle")}
                </div>
              </div>
            </div>
          </motion.div>

          {/* New Floating Element: Active Users */}
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className={cn(
              "absolute -top-10 right-0 lg:right-20 p-3 rounded-xl border shadow-xl backdrop-blur-md z-30 hidden md:flex items-center space-x-2",
              theme.bg,
              theme.border
            )}
          >
            {/* <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                  />
                </div>
              ))}
            </div> */}
            {/* <div className={cn('text-[10px] font-bold', theme.text)}>+2.4k Active Now</div> */}
          </motion.div>

          {/* New Floating Element: Health Metric */}
          {/* <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className={cn(
              "absolute -bottom-10 left-0 lg:left-20 p-3 rounded-xl border shadow-xl backdrop-blur-md z-30 hidden md:flex items-center space-x-2",
              theme.bg,
              theme.border
            )}
          >
            <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <div className={cn("text-[10px] font-bold", theme.text)}>
              Live Heart Rate: 72 BPM
            </div>
          </motion.div> */}

          {/* Background Decorative Circles */}
          <div
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square rounded-full border border-dashed opacity-10 -z-10",
              theme.border
            )}
          />
          <div
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square rounded-full border border-dashed opacity-20 -z-10",
              theme.border
            )}
          />
        </motion.div>
      </div>
    </section>
  );
};
