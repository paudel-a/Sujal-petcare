const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Benefits", href: "#benefits" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="bg-gray-950 px-6 py-10 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#" className="text-xl font-bold tracking-wide">
              SUJAL PETCARE
            </a>

            <p className="mt-2 text-sm text-gray-400">
              Pure Himalayan craftsmanship for your best friend.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6">
          <p className="text-center text-sm text-gray-500">
            © 2026 Sujal Petcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
