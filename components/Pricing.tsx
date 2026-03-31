import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 text-sm font-medium mb-6">
                        Pricing
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-zinc-900 mb-6">
                        Pilihan Harga yang Fleksibel
                    </h2>
                    <p className="text-lg text-zinc-500">
                        Pilih paket yang paling sesuai dengan kebutuhan bisnis dan skala warung Anda.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 items-start">
                    {/* Per Transaksi */}
                    <div className="group bg-zinc-50 border border-zinc-200 rounded-2xl p-8 hover:border-zinc-400 transition-all duration-300 flex flex-col h-full">
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-zinc-900 mb-1">Per Transaksi</h3>
                            <p className="text-zinc-500 text-sm">Cocok untuk mencoba sistem kami tanpa komitmen awal.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-5xl font-black text-zinc-900">Rp 500</span>
                            <span className="text-zinc-400 font-medium ml-1">/ transaksi</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-zinc-600" />
                                </div>
                                <span className="text-zinc-600 text-sm">Fitur POS Basic</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-zinc-600" />
                                </div>
                                <span className="text-zinc-600 text-sm">Laporan Standar</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-zinc-600" />
                                </div>
                                <span className="text-zinc-600 text-sm">Bayar sesuai pemakaian</span>
                            </li>
                        </ul>
                        <a href="#cta" className="block w-full text-center px-6 py-4 border border-zinc-300 text-zinc-700 font-bold rounded-xl hover:bg-zinc-100 transition-colors text-sm">
                            Mulai Sekarang
                        </a>
                    </div>

                    {/* Subscription - Featured */}
                    <div className="bg-black border border-black rounded-2xl p-8 md:-translate-y-4 relative flex flex-col h-full shadow-2xl shadow-black/20">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <span className="bg-white text-black text-[11px] font-black tracking-widest px-4 py-1.5 rounded-full shadow-lg uppercase">
                                Terpopuler
                            </span>
                        </div>
                        <div className="mb-8 mt-2">
                            <h3 className="text-lg font-bold text-white mb-1">Berlangganan</h3>
                            <p className="text-zinc-500 text-sm">Akses penuh dengan dukungan fitur khusus untuk bisnis Anda.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-5xl font-black text-white">50k</span>
                            <span className="text-zinc-500 font-medium ml-1">/ bulan</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-zinc-300 text-sm">Semua Fitur POS Premium</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-zinc-300 text-sm">Laporan Lengkap & Analitik</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center mr-3 shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-black" />
                                </div>
                                <span className="text-white text-sm font-bold">Bebas Request Fitur Sesuai Kebutuhan</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-zinc-300 text-sm">Support prioritas WhatsApp</span>
                            </li>
                        </ul>
                        <a href="#cta" className="block w-full text-center px-6 py-4 bg-white text-black font-black rounded-xl hover:bg-zinc-200 transition-all text-sm hover:scale-[1.02]">
                            Berlangganan Sekarang
                        </a>
                    </div>

                    {/* Pembayaran Langsung */}
                    <div className="group bg-zinc-50 border border-zinc-200 rounded-2xl p-8 hover:border-zinc-400 transition-all duration-300 flex flex-col h-full">
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-zinc-900 mb-1">Satu Kali Bayar</h3>
                            <p className="text-zinc-500 text-sm">Beli sekali untuk kepemilikan penuh seumur hidup.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-5xl font-black text-zinc-900">Custom</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-zinc-600" />
                                </div>
                                <span className="text-zinc-600 text-sm">Lisensi Seumur Hidup</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-zinc-600" />
                                </div>
                                <span className="text-zinc-600 text-sm">Deploy di Server Sendiri</span>
                            </li>
                            <li className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-zinc-600" />
                                </div>
                                <span className="text-zinc-600 text-sm">Free Maintenance 1 Tahun</span>
                            </li>
                        </ul>
                        <a href="#cta" className="block w-full text-center px-6 py-4 border border-zinc-300 text-zinc-700 font-bold rounded-xl hover:bg-zinc-100 transition-colors text-sm">
                            Hubungi Tim Kami
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
