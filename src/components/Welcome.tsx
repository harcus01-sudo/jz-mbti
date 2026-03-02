import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface WelcomeProps {
  key?: string;
  onStart: () => void;
}

export function Welcome({ onStart }: WelcomeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
    >
      <div className="bg-indigo-100 p-4 rounded-full mb-6">
        <Sparkles className="w-12 h-12 text-indigo-600" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
        MBTI 极简测试
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
        只需 38 道题，快速测出你的真实性格底色。告别枯燥难懂的翻译腔！
      </p>
      <button
        onClick={onStart}
        className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-indigo-600 rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-indigo-200"
      >
        <span className="mr-2 text-lg">开始测试</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
      <p className="mt-6 text-sm text-gray-400">预计耗时：3-5 分钟</p>
      
      <p className="mt-12 text-xs text-gray-400/80 max-w-xs leading-relaxed">
        免责声明：本测试基于 MBTI 理论简化改编，结果仅供娱乐与自我探索参考，不作专业心理学诊断依据。
      </p>
    </motion.div>
  );
}
