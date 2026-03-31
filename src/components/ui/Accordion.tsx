"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface AccordionProps {
  question: string;
  answer: string;
}

export function Accordion({ question, answer }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 py-6 text-left cursor-pointer"
      >
        <span className="text-accent">
          {open ? <Minus className="size-5" /> : <Plus className="size-5" />}
        </span>
        <span className="flex-1 text-base font-bold text-black md:text-lg">
          {question}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-9 text-sm leading-relaxed text-black/70 md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
