import { Calculator, FileX, PackageX, Users } from "lucide-react";

export default function Problem() {
    const problems = [
        {
            icon: <Calculator className="w-8 h-8 text-red-500" />,
            title: "Sering Salah Hitung",
            description: "Uang kembalian kurang atau bon salah jumlah bikin rugi warung.",
        },
        {
            icon: <FileX className="w-8 h-8 text-red-500" />,
            title: "Catatan Berantakan",
            description: "Bon hilang, lupa catat utang pelanggan, rekap harian pusing.",
        },
        {
            icon: <PackageX className="w-8 h-8 text-red-500" />,
            title: "Stok Tidak Terkontrol",
            description: "Barang habis nggak ketahuan, mau belanja bingung apa yang kurang.",
        },
        {
            icon: <Users className="w-8 h-8 text-red-500" />,
            title: "Antrian Panjang",
            description: "Pelanggan ngeluh karena pelayanan lama saat jam sibuk.",
        },
    ];

    return (
        <section className="py-20 bg-red-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                        Masih Mengalami Masalah Ini?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Jangan sampai masalah teknis menghambat rezeki warung Anda.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 hover:shadow-md transition-shadow text-center group">
                            <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
