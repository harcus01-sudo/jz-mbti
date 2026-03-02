import React, { useRef, useMemo } from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Download, Briefcase, Heart, Zap, Users, Sparkles, Crown } from 'lucide-react';
import * as htmlToImage from 'html-to-image';
import { ResultData } from '../App';

interface ResultProps {
  key?: string;
  resultData: ResultData;
  onRestart: () => void;
}

export function Result({ resultData, onRestart }: ResultProps) {
  const { result, percentages } = resultData;
  const posterRef = useRef<HTMLDivElement>(null);

  const handleSaveImage = async () => {
    if (posterRef.current) {
      try {
        const dataUrl = await htmlToImage.toPng(posterRef.current, {
          quality: 1,
          pixelRatio: 2,
          backgroundColor: '#050505'
        });
        const link = document.createElement('a');
        link.download = `MBTI-${result.type}.png`;
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error('Failed to save image', error);
        alert('保存图片失败，请重试或截图保存');
      }
    }
  };

  // Easter Egg Logic
  const easterEgg = useMemo(() => {
    if (percentages.E === 100) return { title: '究极社牛', desc: '100% 外向能量', color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/30' };
    if (percentages.I === 100) return { title: '绝对领域', desc: '100% 内向结界', color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/30' };
    if (percentages.S === 100) return { title: '现实掌控者', desc: '100% 感觉敏锐', color: 'text-emerald-400', bg: 'bg-emerald-500/20', border: 'border-emerald-500/30' };
    if (percentages.N === 100) return { title: '先知先觉', desc: '100% 直觉拉满', color: 'text-emerald-400', bg: 'bg-emerald-500/20', border: 'border-emerald-500/30' };
    if (percentages.T === 100) return { title: '无情机器', desc: '100% 绝对理智', color: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500/30' };
    if (percentages.F === 100) return { title: '共情大师', desc: '100% 情感充沛', color: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500/30' };
    if (percentages.J === 100) return { title: '秩序狂魔', desc: '100% 计划通', color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30' };
    if (percentages.P === 100) return { title: '究极自由灵魂', desc: '100% 随性而为', color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30' };
    return null;
  }, [percentages]);

  const ProgressBar = ({ leftLetter, leftText, rightLetter, rightText, leftPct, rightPct, colorClass, textClass }: any) => {
    const isLeftDominant = leftPct >= rightPct;
    
    return (
      <div className="mb-6 relative">
        {/* Top Row: Letter - Bar - Letter */}
        <div className="flex items-center gap-3 md:gap-4 mb-2">
          <span className={`text-3xl md:text-4xl font-black w-8 md:w-10 text-center leading-none ${isLeftDominant ? textClass : 'text-gray-700'}`}>
            {leftLetter}
          </span>
          
          <div className="flex-1 bg-gray-900 rounded-full h-4 md:h-5 flex overflow-hidden border border-white/10 shadow-inner">
            <div 
              className={`h-full transition-all duration-1000 ${isLeftDominant ? colorClass : 'bg-gray-800'}`} 
              style={{ width: `${leftPct}%` }}
            />
            <div 
              className={`h-full transition-all duration-1000 ${!isLeftDominant ? colorClass : 'bg-gray-800'}`} 
              style={{ width: `${rightPct}%` }}
            />
          </div>

          <span className={`text-3xl md:text-4xl font-black w-8 md:w-10 text-center leading-none ${!isLeftDominant ? textClass : 'text-gray-700'}`}>
            {rightLetter}
          </span>
        </div>

        {/* Bottom Row: Text + Percentage */}
        <div className="flex justify-between items-center px-11 md:px-14 font-bold tracking-wider uppercase">
          <span className={`text-xs md:text-sm ${isLeftDominant ? textClass : 'text-gray-600'}`}>
            {leftText} <span className="text-base md:text-lg ml-1">{leftPct}%</span>
          </span>
          <span className={`text-xs md:text-sm ${!isLeftDominant ? textClass : 'text-gray-600'}`}>
            <span className="text-base md:text-lg mr-1">{rightPct}%</span> {rightText}
          </span>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl mx-auto px-4 py-8 min-h-[80vh] flex flex-col items-center justify-center"
    >
      {/* Poster Card */}
      <div 
        ref={posterRef}
        className="bg-[#050505] rounded-[2.5rem] p-6 md:p-10 shadow-2xl w-full mb-8 relative overflow-hidden border border-white/10"
      >
        {/* Massive Background Text */}
        <div className="absolute -top-10 -left-10 text-[14rem] font-black text-white/[0.03] tracking-tighter leading-none select-none pointer-events-none">
          {result.type}
        </div>
        
        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" />

        {/* Header Section */}
        <div className="relative z-10 mb-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-white/70 mb-6">
              MBTI Personality Profile
            </div>
            
            <h1 className="text-7xl md:text-8xl font-black mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">
              {result.type}
            </h1>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
              {result.title}
            </h2>

            {/* Traits Tags moved here */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
              {result.traits.map((trait, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm font-black text-white bg-white/10 border border-white/20 backdrop-blur-md uppercase tracking-wider"
                >
                  #{trait}
                </span>
              ))}
            </div>
          </div>

          {/* Easter Egg Badge */}
          {easterEgg && (
            <motion.div 
              initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 12, scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
              className={`self-center md:self-start flex flex-col items-center justify-center p-4 rounded-2xl border-2 ${easterEgg.border} ${easterEgg.bg} backdrop-blur-md shadow-2xl relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Crown className={`w-8 h-8 mb-2 ${easterEgg.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`} />
              <span className={`text-xl font-black tracking-widest whitespace-nowrap ${easterEgg.color} drop-shadow-md`}>
                {easterEgg.title}
              </span>
              <span className="text-[10px] font-bold text-white/60 tracking-widest uppercase mt-1 whitespace-nowrap">
                {easterEgg.desc}
              </span>
            </motion.div>
          )}
        </div>

        <div className="relative z-10 mb-8">
          <p className="text-base md:text-lg text-white/80 leading-relaxed font-medium">
            {result.description}
          </p>
        </div>

        {/* Dimension Bars */}
        <div className="space-y-4 mb-10 relative z-10">
          <ProgressBar 
            leftLetter="E" leftText="外向" rightLetter="I" rightText="内向" 
            leftPct={percentages.E} rightPct={percentages.I} 
            colorClass="bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
            textClass="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" 
          />
          <ProgressBar 
            leftLetter="S" leftText="感觉" rightLetter="N" rightText="直觉" 
            leftPct={percentages.S} rightPct={percentages.N} 
            colorClass="bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
            textClass="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" 
          />
          <ProgressBar 
            leftLetter="T" leftText="思考" rightLetter="F" rightText="情感" 
            leftPct={percentages.T} rightPct={percentages.F} 
            colorClass="bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" 
            textClass="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" 
          />
          <ProgressBar 
            leftLetter="J" leftText="判断" rightLetter="P" rightText="感知" 
            leftPct={percentages.J} rightPct={percentages.P} 
            colorClass="bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]" 
            textClass="text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" 
          />
        </div>

        {/* Detailed Sections (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 relative z-10">
          <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
            <h4 className="text-white/90 text-sm font-bold mb-2 flex items-center tracking-wider">
              <Briefcase className="w-4 h-4 mr-2 text-white/60"/> 搞钱与事业
            </h4>
            <p className="text-white/70 text-sm leading-relaxed">{result.career}</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
            <h4 className="text-white/90 text-sm font-bold mb-2 flex items-center tracking-wider">
              <Heart className="w-4 h-4 mr-2 text-white/60"/> 恋爱与社交
            </h4>
            <p className="text-white/70 text-sm leading-relaxed">{result.relationship}</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
            <h4 className="text-white/90 text-sm font-bold mb-2 flex items-center tracking-wider">
              <Zap className="w-4 h-4 mr-2 text-white/60"/> 避坑与成长
            </h4>
            <p className="text-white/70 text-sm leading-relaxed">{result.growth}</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
            <h4 className="text-white/90 text-sm font-bold mb-2 flex items-center tracking-wider">
              <Sparkles className="w-4 h-4 mr-2 text-white/60"/> 隐藏天赋
            </h4>
            <p className="text-white/70 text-sm leading-relaxed">{result.talent}</p>
          </div>
          
          {/* Representatives Section */}
          <div className="bg-white/5 border border-white/10 p-5 rounded-2xl md:col-span-2 backdrop-blur-sm">
            <h4 className="text-white/90 text-sm font-bold mb-3 flex items-center tracking-wider">
              <Users className="w-4 h-4 mr-2 text-white/60"/> 与你同频的灵魂
            </h4>
            <div className="flex flex-wrap gap-3">
              {result.representatives.map((rep, index) => (
                <div key={index} className="flex items-center bg-white/10 rounded-full px-4 py-2 border border-white/10 whitespace-nowrap">
                  <span className="text-white/90 text-sm font-bold tracking-wide whitespace-nowrap">{rep}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center relative z-10">
          <div className="text-[10px] md:text-xs font-bold text-white/40 tracking-widest uppercase whitespace-nowrap">
            简版 MBTI 测试
          </div>
          <div className="text-[9px] md:text-[10px] font-medium text-white/30 tracking-wider text-center flex-1 mx-2">
            TEST FOR FUN / 仅供娱乐参考
          </div>
          <div className="text-[10px] md:text-xs font-bold text-white/40 tracking-widest">
            SCAN TO TEST
          </div>
        </div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-lg"
      >
        <button
          onClick={onRestart}
          className="flex-1 flex items-center justify-center px-6 py-4 rounded-2xl font-black text-gray-900 bg-white hover:bg-gray-100 transition-all active:scale-95 shadow-lg"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          再测一次
        </button>
        <button
          onClick={handleSaveImage}
          className="flex-1 flex items-center justify-center px-6 py-4 rounded-2xl font-black text-white bg-indigo-600 hover:bg-indigo-500 transition-all active:scale-95 shadow-lg shadow-indigo-500/30"
        >
          <Download className="w-5 h-5 mr-2" />
          保存海报
        </button>
      </motion.div>
    </motion.div>
  );
}
