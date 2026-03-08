"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type DetailsSection = {
  id: string;
  title: string;
  lines: string[];
};

type Props = {
  sections: DetailsSection[];
};

const ProductDetailsAccordion = ({ sections }: Props) => {
  const [openId, setOpenId] = useState<string | null>(sections[0]?.id ?? null);

  return (
    <div className="space-y-2">
      {sections.map((section) => {
        const isOpen = section.id === openId;
        return (
          <div
            key={section.id}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-slate-900"
              onClick={() => setOpenId(isOpen ? null : section.id)}
            >
              <span>{section.title}</span>
              <span className="text-xs text-slate-400">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="border-t border-slate-100 px-4 pb-4 pt-2 text-sm text-slate-700"
                >
                  <ul className="space-y-1">
                    {section.lines.map((line) => (
                      <li key={line} className="leading-relaxed">
                        {line}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetailsAccordion;

