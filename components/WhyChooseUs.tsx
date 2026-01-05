import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
    const reasons = [
        "Fokus UMKM & warung kecil",
        "Mudah digunakan (User Friendly)",
        "Bisa custom sesuai kebutuhan",
        "Support & pendampingan teknis",
    ];

    return (
        <section className="py-24 bg-brand-green text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                        Kenapa Memilih Kami?
                    </h2>
                    <p className="text-green-50 text-lg max-w-2xl mx-auto">
                        Kami bukan sekadar aplikasi, tapi partner digital untuk mengembangkan usaha Anda.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
                            <CheckCircle2 className="w-10 h-10 text-yellow-300 mb-4" />
                            <span className="font-bold text-center">{reason}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
