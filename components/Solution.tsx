import { Zap, BarChart3, Box, Smartphone } from "lucide-react";

export default function Solution() {
    const benefits = [
        {
            icon: <Zap className="w-6 h-6 text-white" />,
            title: "Transaksi Cepat",
            description: "Input pesanan sat set, hitung otomatis, pelanggan senang.",
            color: "bg-blue-500"
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-white" />,
            title: "Laporan Otomatis",
            description: "Tahu untung rugi harian langsung dari HP. Tidak perlu rekap manual.",
            color: "bg-brand-green"
        },
        {
            icon: <Box className="w-6 h-6 text-white" />,
            title: "Stok Aman & Rapi",
            description: "Peringatan stok menipis otomatis, belanja jadi lebih terencana.",
            color: "bg-brand-orange"
        },
        {
            icon: <Smartphone className="w-6 h-6 text-white" />,
            title: "Pantau Kapan Saja",
            description: "Cek omzet dari mana saja, bahkan saat Anda sedang tidak di warung.",
            color: "bg-purple-500"
        },
    ];

    return (
        <section id="solution" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {benefits.map((item, index) => (
                                <div key={index} className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color} shadow-lg shadow-gray-200`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-normal">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-6">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-brand-green text-sm font-semibold">
                            <span className="font-bold">Kenapa Digital?</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight">
                            Semua Jadi Lebih Mudah dengan <span className="text-brand-green">Warung Digital Galih</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Kami mengerti kesibukan Anda. Aplikasi ini dirancang khusus untuk usaha kecil dan warung harian agar bisa mencatat penjualan semudah mengirim pesan WhatsApp.
                        </p>
                        <ul className="space-y-3 pt-4">
                            {["Dirancang khusus UMKM & Warung", "Tampilan sederhana & Bahasa Indonesia", "Hemat waktu & tenaga"].map((txt, i) => (
                                <li key={i} className="flex items-center text-gray-700">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 text-brand-green">✓</div>
                                    {txt}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
