import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center bg-black overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>
            {/* Radial fade */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#000_70%)]"></div>
            {/* Ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20 pb-20">
                <div className="flex flex-col items-center text-center space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm font-medium backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-white mr-3 animate-pulse"></span>
                        Solusi Digital UMKM Indonesia
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl">
                        Kasir Digital
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Simpel Buat</span>
                        <br />
                        Warung & Kedai
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed font-light">
                        Catat transaksi, kelola stok, dan laporan otomatis tanpa ribet. Fokus kembangkan usaha, biar kami yang urus hitungannya.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="#cta"
                            className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-white rounded-full transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-105"
                        >
                            Coba Gratis Sekarang
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#portfolio"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-zinc-300 border border-zinc-800 rounded-full hover:bg-zinc-900 hover:border-zinc-700 transition-all"
                        >
                            <Play className="mr-2 w-4 h-4 fill-current" />
                            Lihat Portofolio
                        </a>
                    </div>
                </div>

                {/* Dashboard Mockup */}
                <div className="mt-24 relative mx-auto max-w-5xl">
                    <div className="absolute -inset-4 bg-gradient-to-b from-white/5 to-transparent rounded-3xl blur-xl"></div>
                    <div className="relative bg-zinc-950 rounded-2xl border border-zinc-800/80 shadow-2xl overflow-hidden">
                        {/* Title bar */}
                        <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                            <span className="text-zinc-600 text-xs ml-4 font-mono">dashboard.warunggalih.com</span>
                        </div>

                        <div className="p-6 md:p-8 grid md:grid-cols-3 gap-4">
                            {/* Stat 1 */}
                            <div className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-xl">
                                <div className="text-zinc-500 text-sm mb-2 font-medium">Total Penjualan</div>
                                <div className="text-3xl font-bold text-white">Rp 12.5M</div>
                                <div className="text-zinc-500 text-xs mt-3 flex items-center">
                                    <span className="text-white font-medium">↑ 14.5%</span>&nbsp;dari bulan lalu
                                </div>
                            </div>
                            {/* Stat 2 - Highlighted */}
                            <div className="bg-white text-black p-6 rounded-xl">
                                <div className="text-zinc-500 text-sm font-medium mb-2">Pesanan Masuk</div>
                                <div className="text-4xl font-black">128</div>
                                <div className="text-zinc-400 text-xs mt-3">Hari ini</div>
                            </div>
                            {/* Stat 3 */}
                            <div className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-xl">
                                <div className="text-zinc-500 text-sm mb-2 font-medium">Stok Menipis</div>
                                <div className="text-3xl font-bold text-white">12 Item</div>
                                <div className="text-zinc-400 text-xs mt-3">Perlu restock segera</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
