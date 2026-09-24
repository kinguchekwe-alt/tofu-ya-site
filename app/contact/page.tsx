import Link from "next/link";

const DELIVERY_LINKS = [
  { label: "DoorDash", sub: "Delivery", href: "https://www.doordash.com/store/tofu-ya-los-angeles-3013/1043950/" },
  { label: "Grubhub", sub: "Delivery", href: "https://www.grubhub.com/restaurant/tofu-ya-2021-sawtelle-blvd-los-angeles/2264610" },
  { label: "Uber Eats", sub: "Delivery", href: "https://www.ubereats.com/store/tofu-ya/nrMW7zyKRJ2061ZbmhNhag" },
  { label: "Postmates", sub: "Delivery", href: "https://postmates.com/store/tofu-ya/nrMW7zyKRJ2061ZbmhNhag" },
];

export default function Contact() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <h1>Contact &amp; Order</h1>
          <p>
            Call ahead, check the map for directions, or order delivery from your favorite app —
            dine-in and takeout are always available at our Sawtelle location.
          </p>
        </div>
      </section>
      <div className="checker-strip"></div>

      <section className="contact-loc" id="sawtelle">
        <div className="wrap two-col">
          <div>
            <span className="tag tag-shop" style={{ marginBottom: 10 }}>
              Sawtelle
            </span>
            <h2>Location &amp; Hours</h2>
            <table className="hours-table">
              <tbody>
                <tr>
                  <td>Address</td>
                  <td>
                    2021 Sawtelle Blvd
                    <br />
                    Los Angeles, CA 90025
                  </td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>
                    <a href="tel:+13104732627">(310) 473-2627</a>
                  </td>
                </tr>
                <tr>
                  <td>Sun – Thu</td>
                  <td>11:30 AM – 9:30 PM</td>
                </tr>
                <tr>
                  <td>Fri – Sat</td>
                  <td>11:30 AM – 10:30 PM</td>
                </tr>
                <tr>
                  <td>Service</td>
                  <td>Dine-in · Takeout · Delivery</td>
                </tr>
              </tbody>
            </table>

            <div className="order-options">
              <a className="order-option" href="tel:+13104732627">
                <span>
                  <span className="option-name">Call to Order</span>
                  <br />
                  <span className="option-sub">Dine-in or takeout, ready when you arrive</span>
                </span>
                <span className="option-arrow" aria-hidden="true">→</span>
              </a>
              <a
                className="order-option"
                href="https://www.yelp.com/biz/tofu-ya-los-angeles"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <span className="option-name">
                    Read Reviews on Yelp
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </span>
                  <br />
                  <span className="option-sub">See what the neighborhood is saying</span>
                </span>
                <span className="option-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="map-frame">
            <iframe
              title="Map of Tofu Ya, Sawtelle location"
              src="https://www.google.com/maps?q=2021+Sawtelle+Blvd,+Los+Angeles,+CA+90025&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="section-warm">
        <div className="wrap">
          <div className="section-head center">
            <h2>Order Delivery</h2>
            <p>Craving Tofu Ya at home? We&apos;re on all your favorite apps.</p>
          </div>
          <div className="delivery-grid">
            {DELIVERY_LINKS.map((link) => (
              <a
                key={link.label}
                className="delivery-link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  {link.label}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </span>
                <span className="delivery-sub">{link.sub}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="lunch-band band-orange">
        <div className="wrap">
          <div>
            <h2>Prefer to see the menu first?</h2>
            <p>Korean BBQ, soon tofu, cold noodles and more.</p>
          </div>
          <Link className="btn btn-outline-light" href="/menu">
            View Menu
          </Link>
        </div>
      </section>
    </div>
  );
}
