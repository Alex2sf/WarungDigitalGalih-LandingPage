import { MessageCircle } from "lucide-react";

export default function CTA() {
    return (
        <section id="cta" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                    Siap Bikin Warung Kamu <span className="text-brand-orange">Naik Kelas?</span>
                </h2>
                <p className="text-xl text-gray-600 mb-10">
                    Konsultasi gratis sekarang juga. Kami siap membantu digitalisasi usaha Anda.
                </p>
                <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-green-500 rounded-full hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1"
                >
                    <MessageCircle className="mr-2 w-6 h-6" />
                    Hubungi via WhatsApp
                </a>
            </div>
        </section>
    );
}
