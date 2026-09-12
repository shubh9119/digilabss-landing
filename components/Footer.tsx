export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#stats" },
    { label: "Process", href: "#process" },
    { label: "Schedule Call", href: "#book" },
  ];

  return (
    <footer className="border-t border-gray-200/80 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-apple-blue via-indigo-600 to-purple-600 shadow-sm">
                <span className="text-xs font-bold text-white">D</span>
              </div>
              <span className="text-base font-bold tracking-tight text-apple-black">
                digilabss
              </span>
            </div>
            <p className="text-xs text-apple-gray-5 max-w-xs text-center md:text-left">
              Bespoke performance marketing & algorithmic growth architectures for Tier 1 brands.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm font-semibold text-apple-gray-6 transition-colors hover:text-apple-blue"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright & Location */}
          <div className="text-center md:text-right text-xs text-apple-gray-5 space-y-1">
            <p>&copy; {currentYear} Digilabss Global LLC. All rights reserved.</p>
            <p>New York • London • Global Performance</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
