import { Calculator, FileX, PackageX, Users } from "lucide-react";

export default function Problem() {
    const problems = [
        {
            icon: <Calculator className="w-6 h-6" />,
            title: "Sering Salah Hitung",
            description: "Uang kembalian kurang atau bon salah jumlah bikin rugi warung.",
        },
        {
            icon: <FileX className="w-6 h-6" />,
            title: "Catatan Berantakan",
            description: "Bon hilang, lupa catat utang pelanggan, rekap harian pusing.",
        },
        {
            icon: <PackageX className="w-6 h-6" />,
            title: "Stok Tidak Terkontrol",
            description: "Barang habis nggak ketahuan, mau belanja bingung apa yang kurang.",
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Antrian Panjang",
            description: "Pelanggan ngeluh karena pelayanan lama saat jam sibuk.",
        },
    ];

    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-950"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-500 text-sm font-medium mb-6">
                        Masalah Umum
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4">
                        Masih Mengalami Masalah Ini?
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        Jangan sampai masalah teknis menghambat rezeki warung Anda.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((item, index) => (
                        <div key={index} className="group relative bg-zinc-900/30 border border-zinc-800/50 p-8 rounded-2xl hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 text-center">
                            <div className="w-14 h-14 rounded-2xl bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center mx-auto mb-6 text-zinc-400 group-hover:text-white group-hover:bg-zinc-800 transition-all">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
