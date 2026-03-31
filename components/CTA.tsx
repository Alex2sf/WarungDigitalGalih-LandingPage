import { MessageCircle, ArrowUpRight } from "lucide-react";

export default function CTA() {
    return (
        <section id="cta" className="py-24 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-500 text-sm font-medium mb-8">
                    Hubungi Kami
                </div>

                <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
                    Siap Bikin Warung Kamu{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
                        Naik Kelas?
                    </span>
                </h2>

                <p className="text-xl text-zinc-500 mb-12 max-w-2xl mx-auto font-light">
                    Konsultasi gratis sekarang juga. Kami siap membantu digitalisasi usaha Anda.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://wa.me/628978544104"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-black bg-white rounded-full hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all hover:scale-105"
                    >
                        <MessageCircle className="mr-2 w-5 h-5" />
                        Hubungi via WhatsApp
                        <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </div>

                {/* Trust badges */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-zinc-600 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                        Respon Cepat
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                        Gratis Konsultasi
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                        Tanpa Komitmen
                    </div>
                </div>
            </div>
        </section>
    );
}
