import { Monitor, Smartphone, Settings, BarChart } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: <Monitor className="w-6 h-6" />,
            title: "Website Kasir",
            desc: "Akses dari laptop atau PC untuk manajemen yang lebih luas."
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Aplikasi Kasir",
            desc: "Kasir portable di HP Android, bawa kemana saja."
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: "Setup & Pendampingan",
            desc: "Kami bantu input data awal dan training karyawan sampai bisa."
        },
        {
            icon: <BarChart className="w-6 h-6" />,
            title: "Laporan & Analitik",
            desc: "Analisa data penjualan untuk strategi bisnis ke depan."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 text-sm font-medium mb-6">
                        Layanan
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-extrabold text-zinc-900">Layanan Lengkap</h2>
                    <p className="text-zinc-500 mt-4 max-w-xl mx-auto">Semua yang Anda butuhkan untuk mendigitalisasi warung, dalam satu tempat.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((item, i) => (
                        <div key={i} className="group p-7 rounded-2xl border border-zinc-200 bg-white hover:bg-black hover:border-black transition-all duration-500 cursor-default">
                            <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-5 text-zinc-600 group-hover:bg-white group-hover:text-black transition-all">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
