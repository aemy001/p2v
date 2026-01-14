import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="text-2xl font-black mb-4 inline-block text-blue-400 cursor-pointer">
              PVL
            </Link>
            <p className="text-gray-400">
              At PVL, our mission is to synthesize complex B2B logistics into a high-velocity distribution engine. As your asset-based 3PL partner, we provide high-bay warehousing infrastructure engineered for domestic distribution. PVL applies scientific rigor to your supply chain, ensuring your assets move from our docks to your partners with elite precision and scale.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
        <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About PVL
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
                     <li>
                <Link href="/privacy-policy" className="hover:text-blue-400 transition">
                 Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-blue-400 transition">
                Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-200">Contact PVL</h4>
            <p className="text-gray-400 mb-2">
              Direct communication for personalized logistics solutions.
            </p>
            <p className="text-blue-400 font-bold mb-2">
              Phone: +1 (555) 000-0000
            </p>
            <a
              href="mailto:contact@PVLlogistics.com"
              className="text-blue-400 font-bold hover:text-blue-300"
            >
              Email: contact@PVLlogistics.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; 2026 PVL Logistics.</p>
        </div>
      </div>
    </footer>
  );
}
