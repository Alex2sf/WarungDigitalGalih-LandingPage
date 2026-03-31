export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white py-16 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50 8L5 45H15V90H85V45H95L50 8Z" fill="currentColor" />
                                <rect x="30" y="55" width="16" height="35" fill="#171717" rx="2" />
                                <rect x="54" y="52" width="22" height="16" fill="#555" rx="3" />
                                <rect x="57" y="62" width="16" height="3" fill="#444" rx="1" />
                                <circle cx="59" cy="57" r="1.5" fill="#444" />
                                <circle cx="63" cy="57" r="1.5" fill="#444" />
                                <circle cx="67" cy="57" r="1.5" fill="#444" />
                            </svg>
                            <div>
                                <span className="font-display font-extrabold text-lg tracking-tight block leading-tight">WarungGalih</span>
                                <span className="text-[10px] text-zinc-600 font-medium tracking-[0.15em] uppercase">Digital Solutions</span>
                            </div>
                        </div>
                        <p className="text-zinc-600 text-sm leading-relaxed max-w-xs">
                            Solusi kasir digital simpel untuk warung dan kedai UMKM Indonesia.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-bold text-sm text-zinc-400 uppercase tracking-wider mb-4">Navigasi</h4>
                        <div className="space-y-3">
                            <a href="#hero" className="block text-zinc-500 hover:text-white transition-colors text-sm">Beranda</a>
                            <a href="#solution" className="block text-zinc-500 hover:text-white transition-colors text-sm">Fitur</a>
                            <a href="#portfolio" className="block text-zinc-500 hover:text-white transition-colors text-sm">Portofolio</a>
                            <a href="#pricing" className="block text-zinc-500 hover:text-white transition-colors text-sm">Harga</a>
                            <a href="#cta" className="block text-zinc-500 hover:text-white transition-colors text-sm">Kontak</a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-sm text-zinc-400 uppercase tracking-wider mb-4">Kontak</h4>
                        <div className="space-y-3">
                            <a href="https://wa.me/628978544104" target="_blank" rel="noopener noreferrer" className="block text-zinc-500 hover:text-white transition-colors text-sm">
                                WhatsApp: 0897-8544-104
                            </a>
                            <p className="text-zinc-500 text-sm">Indonesia</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-zinc-700 text-xs">
                        &copy; {new Date().getFullYear()} Warung Digital Galih. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6 text-zinc-700 text-xs">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
