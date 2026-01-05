export default function Portfolio() {
    const portfolios = [
        {
            title: "Demo Kasir Kedai Kopi",
            src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
            title: "Studi Kasus Warung Harian",
            src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
            title: "Penggunaan Kasir Digital UMKM",
            src: "https://www.youtube.com/embed/uKU-EpmYMYs",
        }
    ];

    return (
        <section id="portfolio" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                        Portofolio & Demo Penggunaan
                    </h2>
                    <p className="text-gray-600">
                        Lihat bagaimana Warung Digital Galih membantu usaha lain.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolios.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                            <div className="aspect-video w-full bg-gray-200">
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
                            <div className="p-6">
                                <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
