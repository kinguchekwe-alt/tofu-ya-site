import Link from "next/link";

const FAN_FAVORITES = [
  {
    name: "Galbi Combo",
    price: "$29.99",
    photo: "/images/galbi-combo.jpg",
    alt: "Galbi combo plate with rice and dipping sauce",
  },
  {
    name: "Bulgogi Combo",
    price: "$24.99",
    photo: "/images/bulgogi-combo.jpg",
    alt: "Bulgogi combo with banchan side dishes",
  },
  {
    name: "Galbi",
    price: "$28.99",
    photo: "/images/food-2.jpg",
    alt: "Grilled galbi short ribs topped with sesame seeds and scallions",
  },
  {
    name: "Pork Bulgogi Combo",
    price: "$22.99",
    photo: "/images/pork-bulgogi-combo.jpg",
    alt: "Spicy pork bulgogi combo",
  },
  {
    name: "Chicken Bulgogi Combo",
    price: "$22.99",
    photo: "/images/chicken-bulgogi-combo.jpg",
    alt: "Chicken bulgogi combo with rice and vegetables",
  },
];

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="wrap">
          <h1>
            <span className="brand-mark">TOFU YA</span>
            <span className="brand-sub">Korean BBQ</span>
          </h1>
          <p className="slogan">&ldquo;Nothing brings people together like good food.&rdquo;</p>
          <div className="hero-image">
            <img src="/images/food-3.jpg" alt="Sizzling dolsot bibimbap with fresh vegetables and a fried egg" />
          </div>
          <div className="hero-actions">
            <Link className="btn btn-fill" href="/menu">
              View Menu
            </Link>
            <Link className="btn btn-red" href="/contact">
              Order Now
            </Link>
          </div>
        </div>
      </section>
      <div className="checker-strip"></div>

      <section className="section-paper">
        <div className="wrap">
          <div className="meaning-block">
            <p className="script-head">Nothing brings people together like good food.</p>
            <p>
              For over two decades, Tofu Ya has been a reliable community anchor on Sawtelle
              Boulevard — a welcoming kitchen where UCLA students, Westside families and food
              lovers gather over steaming, bubbling stone pots.
            </p>
            <Link className="btn btn-outline-light" href="/about" style={{ marginTop: 14 }}>
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="section-warm">
        <div className="wrap">
          <div className="section-head center">
            <h2>Fan Favorites</h2>
            <p>The dishes our Sawtelle regulars keep coming back for.</p>
          </div>
          <div className="dish-grid">
            {FAN_FAVORITES.map((dish) => (
              <div className="dish-card" key={dish.name}>
                <img className="dish-photo" src={dish.photo} alt={dish.alt} />
                <div className="dish-info">
                  <h3>{dish.name}</h3>
                  <p className="price">{dish.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head center">
            <h2>Find Us</h2>
            <p>One Sawtelle staple — dine in, take out, or order delivery.</p>
          </div>
          <div className="location-grid single">
            <div className="location-card">
              <span className="neighborhood">Sawtelle</span>
              <address>
                2021 Sawtelle Blvd
                <br />
                Los Angeles, CA 90025
              </address>
              <span className="phone">(310) 473-2627</span>
              <p className="blurb">
                Open Sun–Thu: 11:30 AM – 9:30 PM · Fri–Sat: 11:30 AM – 10:30 PM. Dine-in and
                takeout available.
              </p>
              <div className="card-actions">
                <Link className="btn btn-outline btn-sm" href="/menu">
                  Menu
                </Link>
                <Link className="btn btn-outline btn-sm" href="/contact">
                  Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lunch-band band-orange">
        <div className="wrap">
          <div>
            <h2>Ready to eat?</h2>
            <p>Sizzling BBQ, bubbling soon tofu, and hearty rice bowls made to warm the soul.</p>
          </div>
          <Link className="btn btn-outline-light" href="/contact">
            Find Your Way Here
          </Link>
        </div>
      </section>
    </div>
  );
}
