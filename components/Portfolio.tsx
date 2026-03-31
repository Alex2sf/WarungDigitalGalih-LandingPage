export default function Portfolio() {
    const portfolios = [
        {
            title: "DEMO KASIR DIGITAL KEDAI KOPI",
            src: "https://www.youtube.com/embed/vwJV_d-M6V8",
            tag: "Kedai Kopi"
        },
        {
            title: "DEMO KASIR DIGITAL TOKO KELONTONG",
            src: "https://www.youtube.com/embed/V9Dq0Pubeew",
            tag: "Kelontong"
        },
        {
            title: "DEMO KASIR DIGITAL DEPOT AIR",
            src: "https://www.youtube.com/embed/uKU-EpmYMYs",
            tag: "Depot Air"
        }
    ];

    return (
        <section id="portfolio" className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background ambient */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-500 text-sm font-medium mb-6">
                        Showcase
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4">
                        Portofolio & Demo Penggunaan
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto">
                        Lihat bagaimana Warung Digital Galih membantu usaha lain.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolios.map((item, index) => (
                        <div key={index} className="group bg-zinc-900/50 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1">
                            <div className="aspect-video w-full bg-zinc-900 relative">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={item.src}
                                    title={item.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <div className="p-5 flex items-center justify-between">
                                <h3 className="font-bold text-sm text-zinc-300 uppercase tracking-wide">{item.title}</h3>
                                <span className="text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-500 font-medium shrink-0 ml-2">{item.tag}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
