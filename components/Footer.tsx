import Link from "next/link";

const DELIVERY_LINKS = [
  { label: "DoorDash", href: "https://www.doordash.com/store/tofu-ya-los-angeles-3013/1043950/" },
  { label: "Grubhub", href: "https://www.grubhub.com/restaurant/tofu-ya-2021-sawtelle-blvd-los-angeles/2264610" },
  { label: "Uber Eats", href: "https://www.ubereats.com/store/tofu-ya/nrMW7zyKRJ2061ZbmhNhag" },
  { label: "Postmates", href: "https://postmates.com/store/tofu-ya/nrMW7zyKRJ2061ZbmhNhag" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <span className="brand">TOFU YA</span>
            </div>
            <p>Authentic Korean BBQ &amp; customizable soon tofu soups on Sawtelle Boulevard, Los Angeles.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/contact">Location &amp; Hours</Link></li>
            </ul>
          </div>
          <div>
            <h4>Sawtelle</h4>
            <ul>
              <li>2021 Sawtelle Blvd</li>
              <li>Los Angeles, CA 90025</li>
              <li><a href="tel:+13104732627">(310) 473-2627</a></li>
            </ul>
          </div>
          <div>
            <h4>Order &amp; Review</h4>
            <ul>
              <li>
                <a href="https://www.yelp.com/biz/tofu-ya-los-angeles" target="_blank" rel="noopener noreferrer">
                  Read our reviews on Yelp
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
              {DELIVERY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    Order on {link.label}
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Tofu Ya</span>
          <span>Prices subject to change.</span>
        </div>
      </div>
    </footer>
  );
}
