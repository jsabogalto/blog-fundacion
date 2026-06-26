"use client";

import { motion } from "framer-motion";
import { STEPS } from "@/lib/formConfig";

export default function NavbarForm({ stepKey }) {
  const stepIndex = STEPS.indexOf(stepKey);

  // Progreso continuo: 0 en intro, 100% en success
  const progress = stepIndex <= 0 ? 0 : stepIndex / (STEPS.length - 1);

  return (
    <header className="sticky top-0 z-20">
      <div className="h-2 w-full bg-line/50">
        <motion.div
          className="h-full"
          style={{ backgroundColor: "#25D366" }}
          initial={false}
          animate={{ width: `${Math.round(progress * 100)}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>
    </header>
  );
}