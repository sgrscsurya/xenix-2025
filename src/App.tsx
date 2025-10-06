import { Code2, Terminal, Award } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/image.png)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-sm"></div>
      </div>

      <ParticleBackground />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30 backdrop-blur-md mb-6">
              <Code2 className="w-12 h-12 text-cyan-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent tracking-tight">
              XENIX 2025
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 tracking-wide">
              CODE-A-THON CODING
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Welcome to the ultimate coding challenge. Select your round and programming language to begin.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Round 1: Multiple Choice Questions</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <a
                  href="https://form-timer.com/start/07ba72ef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-slate-700/50 to-slate-800/50 hover:from-orange-500/20 hover:to-red-500/20 border border-slate-600 hover:border-orange-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">J</span>
                    </div>
                    <h4 className="text-xl font-semibold text-slate-100 mb-2">Java</h4>
                    <p className="text-slate-400 text-sm">Test your Java fundamentals</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-300"></div>
                </a>

                <a
                  href="PASTE_PYTHON_MCQ_URL_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-slate-700/50 to-slate-800/50 hover:from-blue-500/20 hover:to-green-500/20 border border-slate-600 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">Py</span>
                    </div>
                    <h4 className="text-xl font-semibold text-slate-100 mb-2">Python</h4>
                    <p className="text-slate-400 text-sm">Test your Python knowledge</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-green-500/0 group-hover:from-blue-500/10 group-hover:to-green-500/10 transition-all duration-300"></div>
                </a>

                <a
                  href="PASTE_CPP_MCQ_URL_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-br from-slate-700/50 to-slate-800/50 hover:from-purple-500/20 hover:to-pink-500/20 border border-slate-600 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">C++</span>
                    </div>
                    <h4 className="text-xl font-semibold text-slate-100 mb-2">C/C++</h4>
                    <p className="text-slate-400 text-sm">Test your C/C++ expertise</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
                </a>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Round 2: Live Coding Challenge</h3>
              </div>

              <a
                href="https://www.hackerrank.com/xenix-2025-code-a-thon-coding"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-br from-slate-700/50 to-slate-800/50 hover:from-emerald-500/20 hover:to-teal-500/20 border border-slate-600 hover:border-emerald-500/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 block"
              >
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-semibold text-slate-100 mb-3">Master Link</h4>
                  <p className="text-slate-400">Access the live coding environment</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-300"></div>
              </a>
            </div>
          </div>

          <div className="text-center text-slate-500 text-sm">
            <p>Best of luck to all participants!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
