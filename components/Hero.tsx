import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-orange-50/50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-brand-orange text-sm font-semibold mb-2">
                            <span className="animate-pulse mr-2">●</span> Solusi Digital UMKM
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                            Kasir Digital Simpel Buat <span className="text-brand-orange">Warung & Kedai</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Catat transaksi, kelola stok, dan laporan otomatis tanpa ribet. Fokus kembangkan usaha, biar kami yang urus hitungannya.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#demo"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-orange rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1"
                            >
                                Lihat Demo
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <a
                                href="#portfolio"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:border-brand-orange hover:text-brand-orange transition-all"
                            >
                                <PlayCircle className="mr-2 w-5 h-5" />
                                Lihat Portofolio
                            </a>
                        </div>
                    </div>

                    {/* Visual Content (Mockup Placeholder) */}
                    <div className="relative mt-8 lg:mt-0">
                        {/* Decorative blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-orange/20 to-brand-green/20 rounded-full blur-3xl -z-10"></div>

                        <div className="relative bg-gray-900 rounded-[2.5rem] shadow-2xl p-4 border-4 border-gray-900 mx-auto max-w-[280px] md:max-w-[320px] aspect-[9/19] overflow-hidden">
                            {/* Phone Screen Mockup */}
                            <div className="bg-white h-full w-full rounded-[2rem] overflow-hidden flex flex-col relative">
                                {/* Status Bar */}
                                <div className="h-8 bg-brand-green w-full flex justify-between px-6 items-center text-[10px] text-white font-bold">
                                    <span>12:30</span>
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                                        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                                    </div>
                                </div>
                                {/* App Header */}
                                <div className="p-6 bg-white border-b border-gray-100 flex justify-between items-center">
                                    <div>
                                        <div className="text-xs text-gray-500">Halo, Pak Galih</div>
                                        <div className="font-bold text-gray-800 text-lg">Warung Galih</div>
                                    </div>
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                                    </div>
                                </div>

                                {/* App Content */}
                                <div className="p-5 space-y-5 flex-1 bg-gray-50/50">
                                    <div className="bg-brand-orange/10 p-5 rounded-2xl border border-brand-orange/10">
                                        <div className="text-xs text-brand-orange font-bold uppercase tracking-wider mb-1">Total Penjualan</div>
                                        <div className="text-3xl font-bold text-gray-900">Rp 1.250k</div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 h-24 flex flex-col justify-center items-center gap-2">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                                            <div className="h-2 w-16 bg-gray-100 rounded"></div>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 h-24 flex flex-col justify-center items-center gap-2">
                                            <div className="w-8 h-8 bg-green-100 rounded-full"></div>
                                            <div className="h-2 w-16 bg-gray-100 rounded"></div>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 h-24 flex flex-col justify-center items-center gap-2">
                                            <div className="w-8 h-8 bg-yellow-100 rounded-full"></div>
                                            <div className="h-2 w-16 bg-gray-100 rounded"></div>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 h-24 flex flex-col justify-center items-center gap-2">
                                            <div className="w-8 h-8 bg-purple-100 rounded-full"></div>
                                            <div className="h-2 w-16 bg-gray-100 rounded"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom nav */}
                                <div className="h-20 bg-white border-t border-gray-100 flex justify-around items-center px-4 pb-2">
                                    <div className="w-10 h-10 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange">
                                        ●
                                    </div>
                                    <div className="w-10 h-10 bg-transparent rounded-xl flex items-center justify-center text-gray-300">●</div>
                                    <div className="w-10 h-10 bg-transparent rounded-xl flex items-center justify-center text-gray-300">●</div>
                                </div>
                                {/* Floating Add Button */}
                                <div className="absolute bottom-24 right-5 w-14 h-14 bg-brand-green rounded-full shadow-xl shadow-green-500/30 flex items-center justify-center text-white text-3xl font-bold hover:scale-105 transition-transform cursor-pointer">
                                    +
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
