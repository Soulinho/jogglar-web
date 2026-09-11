import React from 'react'
import { STATS } from '../../data/content'

export const StatsSection: React.FC = () => {
  return (
    <section className="relative -mt-8 sm:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200/80 dark:border-slate-700/80 p-8 sm:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-700/60">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                idx !== 0 ? 'sm:pl-8' : ''
              } ${idx !== 0 ? 'pt-6 sm:pt-0' : ''}`}
            >
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-400 font-sans">
                {stat.value}
              </div>
              <div className="text-base font-bold text-slate-800 dark:text-slate-100 mt-1">
                {stat.label}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed max-w-xs">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
