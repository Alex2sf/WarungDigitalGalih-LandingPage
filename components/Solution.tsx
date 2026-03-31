import { Zap, BarChart3, Box, Smartphone } from "lucide-react";

export default function Solution() {
    const benefits = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Transaksi Cepat",
            description: "Input pesanan sat set, hitung otomatis, pelanggan senang.",
            number: "01"
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Laporan Otomatis",
            description: "Tahu untung rugi harian langsung dari HP. Tidak perlu rekap manual.",
            number: "02"
        },
        {
            icon: <Box className="w-6 h-6" />,
            title: "Stok Aman & Rapi",
            description: "Peringatan stok menipis otomatis, belanja jadi lebih terencana.",
            number: "03"
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Pantau Kapan Saja",
            description: "Cek omzet dari mana saja, bahkan saat Anda sedang tidak di warung.",
            number: "04"
        },
    ];

    return (
        <section id="solution" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left - Cards */}
                    <div className="order-2 lg:order-1">
                        <div className="grid sm:grid-cols-2 gap-5">
                            {benefits.map((item, index) => (
                                <div
                                    key={index}
                                    className="group p-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-black hover:border-black hover:text-white transition-all duration-500 cursor-default"
                                >
                                    <div className="text-xs font-mono text-zinc-300 group-hover:text-zinc-500 mb-4 transition-colors">{item.number}</div>
                                    <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-all">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-white mb-2 transition-colors">{item.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Text */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 text-sm font-medium">
                            Kenapa Digital?
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-zinc-900 leading-tight">
                            Semua Jadi Lebih Mudah dengan{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-400">
                                Warung Digital Galih
                            </span>
                        </h2>
                        <p className="text-lg text-zinc-500 leading-relaxed">
                            Kami mengerti kesibukan Anda. Aplikasi ini dirancang khusus untuk usaha kecil dan warung harian agar bisa mencatat penjualan semudah mengirim pesan WhatsApp.
                        </p>
                        <ul className="space-y-4 pt-2">
                            {["Dirancang khusus UMKM & Warung", "Tampilan sederhana & Bahasa Indonesia", "Hemat waktu & tenaga"].map((txt, i) => (
                                <li key={i} className="flex items-center text-zinc-700">
                                    <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center mr-3 text-sm font-bold shrink-0">✓</div>
                                    <span className="font-medium">{txt}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
