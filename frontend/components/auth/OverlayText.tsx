"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function OverlayText({ isLogin }: { isLogin: boolean }) {
  return (
    <div
      className={clsx(
        "absolute inset-0 hidden xl:flex items-center z-20",
        {
            "justify-end pr-20": isLogin,   // register → right
            "justify-start pl-20": !isLogin,  // login → left
        }
      )}
    >
      <motion.div
        key={isLogin ? "loginText" : "registerText"}
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-xl text-center space-y-6"
      >
        <h1
          className="
            text-5xl font-extrabold tracking-tight font-[Poppins]
            text-card
            drop-shadow-[0_0_10px_rgba(255,115,0,0.6)]
            animate-neon-soft
            flex items-center justify-center gap-3
          "
        >
          {isLogin ? "🔥 Welcome Back, Beast" : "Unleash Your Beast Mode 💪"}
        </h1>
        <p
          className="
            text-xl leading-relaxed font-sans text-white
            drop-shadow-[0_0_5px_rgba(255,115,0,0.4)]
          "
        >
          {isLogin
            ? "Keep the fire alive and push your limits every single day ✨"
            : "Start your journey today and transform your body & mind 🚀"}
        </p>
      </motion.div>
    </div>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import clsx from "clsx";

// export default function OverlayText({ isLogin }: { isLogin: boolean }) {
//   return (
//     <motion.div
//       key={isLogin ? "login" : "register"}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className={clsx(
//         "absolute inset-0 hidden xl:flex flex-col items-center justify-center px-16 text-center z-20"
//       )}
//     >
//       <h1
//         className={clsx(
//           "text-6xl font-extrabold tracking-tight font-[Poppins] mb-6",
//           "animate-neon-flicker",
//           isLogin
//             ? "text-gym-orange drop-shadow-[0_0_25px_rgba(255,115,0,0.8)]"
//             : "text-sky-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.8)]"
//         )}
//       >
//         {isLogin ? "🔥 Welcome Back, Beast" : "⚡ Start Your Journey Today"}
//       </h1>

//       <p className="text-lg max-w-xl leading-relaxed text-white/90">
//         {isLogin
//           ? "Keep the fire alive and push your limits every single day ✨"
//           : "Transform your body & mind — one rep at a time 💪"}
//       </p>
//     </motion.div>
//   );
// }
