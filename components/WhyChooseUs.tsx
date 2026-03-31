import { Shield, Headphones, Palette, Target } from "lucide-react";

export default function WhyChooseUs() {
    const reasons = [
        { icon: <Target className="w-7 h-7" />, title: "Fokus UMKM & warung kecil", desc: "Dibuat khusus untuk kebutuhan usaha kecil menengah." },
        { icon: <Palette className="w-7 h-7" />, title: "Mudah digunakan", desc: "Tampilan user-friendly, tanpa perlu keahlian teknis." },
        { icon: <Shield className="w-7 h-7" />, title: "Bisa custom sesuai kebutuhan", desc: "Fitur bisa disesuaikan dengan jenis usaha Anda." },
        { icon: <Headphones className="w-7 h-7" />, title: "Support & pendampingan teknis", desc: "Tim kami siap membantu kapan saja Anda butuhkan." },
    ];

    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Text */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-500 text-sm font-medium">
                            Keunggulan
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-extrabold leading-tight">
                            Kenapa Memilih{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
                                Kami?
                            </span>
                        </h2>
                        <p className="text-zinc-500 text-lg leading-relaxed">
                            Kami bukan sekadar aplikasi, tapi partner digital untuk mengembangkan usaha Anda.
                        </p>
                    </div>

                    {/* Right - Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {reasons.map((reason, index) => (
                            <div key={index} className="group p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center mb-4 text-zinc-400 group-hover:text-white group-hover:bg-zinc-800 transition-all">
                                    {reason.icon}
                                </div>
                                <h3 className="font-bold text-white mb-2 text-sm">{reason.title}</h3>
                                <p className="text-zinc-600 text-xs leading-relaxed">{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
