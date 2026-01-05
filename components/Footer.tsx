import { ShoppingBag } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center text-white">
                            <ShoppingBag size={20} />
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight">
                            Warung Digital Galih
                        </span>
                    </div>

                    <div className="flex space-x-6 text-gray-400">
                        <a href="#hero" className="hover:text-white transition-colors">Beranda</a>
                        <a href="#solution" className="hover:text-white transition-colors">Fitur</a>
                        <a href="#portfolio" className="hover:text-white transition-colors">Portofolio</a>
                        <a href="#cta" className="hover:text-white transition-colors">Kontak</a>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Warung Digital Galih. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
