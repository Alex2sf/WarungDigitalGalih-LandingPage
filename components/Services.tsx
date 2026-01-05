import { Monitor, Smartphone, Settings, BarChart } from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: <Monitor className="w-6 h-6 text-brand-orange" />,
            title: "Website Kasir",
            desc: "Akses dari laptop atau PC untuk manajemen yang lebih luas."
        },
        {
            icon: <Smartphone className="w-6 h-6 text-brand-orange" />,
            title: "Aplikasi Kasir",
            desc: "Kasir portable di HP Android, bawa kemana saja."
        },
        {
            icon: <Settings className="w-6 h-6 text-brand-orange" />,
            title: "Setup & Pendampingan",
            desc: "Kami bantu input data awal dan training karyawan sampai bisa."
        },
        {
            icon: <BarChart className="w-6 h-6 text-brand-orange" />,
            title: "Laporan & Analitik",
            desc: "Analisa data penjualan untuk strategi bisnis ke depan."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-gray-900">Layanan Lengkap</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((item, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-orange/30 transition-colors group">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
