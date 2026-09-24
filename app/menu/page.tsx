import Link from "next/link";

type MenuItem = { name: string; price?: string; desc?: string; image?: string };
type MenuGroup = { subhead?: string; note?: string; items: MenuItem[] };
type MenuCategory = {
  id: string;
  label: string;
  title: string;
  note?: string;
  image?: string;
  groups: MenuGroup[];
};

const CATEGORIES: MenuCategory[] = [
  {
    id: "salads",
    label: "Salads",
    title: "Salads",
    groups: [
      {
        items: [
          {
            name: "Green Salad",
            price: "$6.99",
            desc: "A mix of fresh greens, shredded carrots and purple cabbage served with a side of creamy dressing.",
            image: "/images/menu/salads.jpg",
          },
          {
            name: "BBQ Beef Ribs with Salad",
            price: "$20.99",
            desc: "Tender BBQ beef ribs garnished with sesame seeds and scallions, served with a fresh salad.",
          },
          { name: "Tofu with Salad", price: "$14.99" },
          { name: "Chicken Teriyaki with Salad", price: "$17.99" },
        ],
      },
    ],
  },
  {
    id: "cold-noodles",
    label: "Cold Noodles",
    title: "Cold Noodles",
    groups: [
      {
        items: [
          {
            name: "Spicy Cold Noodles",
            price: "$14.99",
            desc: "Spicy buckwheat noodles.",
            image: "/images/menu/bibim-naengmyeon.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "bbq",
    label: "BBQ",
    title: "BBQ",
    note: "Served with steamed rice and assorted side dishes.",
    groups: [
      {
        items: [
          {
            name: "Galbi",
            price: "$28.99",
            desc: "B.B.Q. beef ribs marinated in a house special sauce.",
            image: "/images/menu/galbi.jpg",
          },
          {
            name: "Chicken Bulgogi",
            price: "$20.99",
            desc: "B.B.Q. slices of chicken marinated in house spicy sauce.",
            image: "/images/menu/chicken-bulgogi.jpg",
          },
          { name: "Pork Bulgogi", price: "$20.99", desc: "B.B.Q. slices of pork marinated in house spicy sauce." },
          {
            name: "Pork Katsu",
            price: "$20.99",
            desc: "Pork cutlet.",
            image: "/images/menu/pork-katsu.jpg",
          },
          { name: "Chicken Katsu", price: "$20.99", desc: "Chicken cutlet." },
          { name: "Fish Katsu", price: "$20.99", desc: "Fish cutlet." },
          { name: "Chicken Teriyaki", price: "$20.99", desc: "Grilled chicken topped with teriyaki sauce." },
        ],
      },
    ],
  },
  {
    id: "sundubu",
    label: "Sundubu",
    title: "Sundubu (Soon Tofu)",
    note: "Served with steamed rice and assorted side dishes.",
    groups: [
      {
        items: [
          {
            name: "Seafood Sundubu",
            price: "$15.99",
            desc: "Clam, shrimp, oyster.",
            image: "/images/menu/seafood-sundubu.jpg",
          },
          { name: "Seafood & Beef Sundubu", price: "$15.99", desc: "Clam, shrimp, oyster, beef." },
          { name: "Oyster Sundubu", price: "$15.99", desc: "Oyster." },
          {
            name: "Mushroom Sundubu",
            price: "$15.99",
            desc: "Mushroom, beef.",
            image: "/images/menu/mushroom-sundubu.jpg",
          },
          {
            name: "Kimchi Sundubu",
            price: "$15.99",
            desc: "Kimchi and beef.",
            image: "/images/menu/kimchi-sundubu.jpg",
          },
          { name: "Pork Sundubu", price: "$15.99", desc: "Pork." },
          { name: "Clam Sundubu", price: "$15.99", desc: "Clam." },
          {
            name: "Beef Sundubu",
            price: "$15.99",
            desc: "Beef. One of our most-ordered sundubu.",
            image: "/images/menu/beef-sundubu.jpg",
          },
          {
            name: "Dumpling Sundubu",
            price: "$15.99",
            desc: "Dumplings, beef.",
            image: "/images/menu/dumpling-sundubu.jpg",
          },
          { name: "Denjang Sundubu", price: "$15.99", desc: "Miso, seaweed, onion, mushroom, beef." },
          { name: "Chicken Sundubu", price: "$15.99", desc: "White meat chicken." },
          {
            name: "Vegetable Sundubu",
            price: "$15.99",
            desc: "Vegetarian. Broccoli, mushroom, squash, carrot, onion.",
            image: "/images/menu/vegetable-sundubu.jpg",
          },
          { name: "Ham, Sausage, Kimchi", price: "$16.99", desc: "K-Army (ham, sausage, kimchi)." },
          { name: "Squid", price: "$16.99", desc: "Squid." },
          { name: "Crab", price: "$16.99", desc: "Crab." },
          { name: "Special Seafood", price: "$17.99", desc: "Clam, shrimp, oyster, squid, crab." },
        ],
      },
    ],
  },
  {
    id: "combo",
    label: "Combo",
    title: "Combo",
    note: "Our most popular way to order — a BBQ or specialty plate with your choice of sundubu or cold noodles on the side.",
    groups: [
      {
        items: [
          {
            name: "Galbi Combo",
            price: "$29.99",
            desc: "B.B.Q. beef ribs seasoned with special sauce, with a choice of sundubu or cold noodles. #1 most-liked dish.",
            image: "/images/menu/galbi-combo.jpg",
          },
          {
            name: "Bulgogi Combo",
            price: "$24.99",
            desc: "Thin slices of beef marinated in soy sauce, with a choice of sundubu or cold noodles. #2 most-liked dish.",
            image: "/images/menu/bulgogi.jpg",
          },
          {
            name: "Pork Bulgogi Combo",
            price: "$22.99",
            desc: "Thin slices of pork marinated in a spicy sauce, with a choice of sundubu or cold noodles.",
          },
          {
            name: "Chicken Bulgogi Combo",
            price: "$22.99",
            desc: "Thin slices of chicken marinated in a spicy sauce, with a choice of sundubu or cold noodles.",
            image: "/images/menu/chicken-bulgogi.jpg",
          },
          {
            name: "Chicken Teriyaki Combo",
            price: "$22.99",
            desc: "Grilled chicken teriyaki with a choice of sundubu or cold noodles.",
          },
          {
            name: "Chicken Katsu Combo",
            price: "$22.99",
            desc: "Chicken cutlet with a choice of sundubu.",
          },
          {
            name: "Pork Katsu Combo",
            price: "$22.99",
            desc: "Pork cutlet with a choice of sundubu.",
            image: "/images/menu/pork-katsu.jpg",
          },
          {
            name: "Kimchi Dolsot Bibimbap Combo",
            price: "$20.99",
            desc: "Served in a piping hot earthenware pot with rice, pork, cooked vegetables and kimchi.",
          },
          {
            name: "Dolsot Bibimbap Combo",
            price: "$20.99",
            desc: "Served in a piping hot earthenware pot with rice, cooked vegetables and beef.",
            image: "/images/menu/dolsot-bibimbop.jpg",
          },
          {
            name: "Bibimbap Combo",
            price: "$19.99",
            desc: "Rice topped with various cooked vegetables, beef and a fried egg, served with gochujang (red chili paste).",
          },
          {
            name: "Udon & California Roll",
            price: "$18.99",
            desc: "Japanese udon noodles with avocado, imitation crab meat and cucumber roll.",
          },
        ],
      },
    ],
  },
  {
    id: "specials",
    label: "Specials",
    title: "Specials",
    groups: [
      {
        items: [
          {
            name: "Dolsot Bibimbap",
            price: "$18.99",
            desc: "Served in a piping hot earthenware pot with rice, cooked vegetables and beef.",
          },
          {
            name: "Kimchi Dolsot Bibimbap",
            price: "$18.99",
            desc: "Served in a piping hot earthenware pot with rice, pork, cooked vegetables and kimchi.",
          },
          {
            name: "Bibimbap",
            price: "$17.99",
            desc: "Rice topped with various cooked vegetables, beef and a fried egg, served with gochujang (red chili paste).",
          },
          { name: "Udon", price: "$14.99", desc: "Plain Japanese udon noodles." },
          { name: "Kimchi or Fish Cake Udon", price: "$15.99" },
          {
            name: "California Roll",
            price: "$9.99",
            desc: "Avocado, imitation crab meat and cucumber.",
          },
          { name: "Kimchi Pancake", price: "$14.99", desc: "Fried Korean pancake with kimchi." },
          {
            name: "Seafood Pancake",
            price: "$17.99",
            desc: "Fried Korean pancake with a variety of seafood.",
            image: "/images/menu/seafood-pancake.png",
          },
          { name: "Potato Pancake", price: "$14.99", desc: "Fried Korean pancake made with potatoes." },
          {
            name: "Fried Dumpling",
            price: "$9.99",
            desc: "Veggie, beef, chicken, pork and kimchi options available.",
            image: "/images/menu/fried-mandu.jpg",
          },
        ],
      },
      {
        subhead: "Also on the Menu",
        note: "A few more house favorites — ask your server for current pricing.",
        items: [
          {
            name: "Lunch Box",
            desc: "A weekday favorite — ask your server for today's protein and pricing.",
            image: "/images/menu/lunch-box.jpg",
          },
          {
            name: "Galbi Lunch Box",
            desc: "Grilled galbi served lunch-box style with rice and banchan.",
            image: "/images/menu/lunch-box.jpg",
          },
          {
            name: "Kimchi Bokkeumbap",
            desc: "Kimchi fried rice tossed with vegetables and finished with a fried egg on top.",
            image: "/images/menu/kimchi-bokkeumbap.jpg",
          },
          {
            name: "Japchae",
            desc: "Stir-fried glass noodles with vegetables and a hint of sesame — a classic Korean favorite.",
            image: "/images/menu/japchae.jpg",
          },
          {
            name: "Chicken Wings",
            desc: "Korean-style glazed fried chicken wings, finished with sesame and scallion.",
            image: "/images/menu/chicken-wings.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    title: "Drinks",
    groups: [
      {
        items: [
          { name: "Fresh Juice", desc: "Carrot, apple or orange.", price: "$6.99" },
          { name: "Soda", desc: "Coke, Diet Coke, Sprite or Sunkist.", price: "$3.99" },
          { name: "Barley Tea", desc: "Hot or iced.", price: "$4.99" },
          { name: "Green Tea", desc: "Hot or iced.", price: "$4.99" },
          { name: "Oolong Tea", desc: "Hot or iced.", price: "$4.99" },
          {
            name: "San Pellegrino",
            desc: "Sparkling water — blood orange, lemon or orange flavors available.",
            price: "$4.75",
          },
          { name: "Bottled Water", desc: "Pure and refreshing bottled water.", price: "$3.99" },
          { name: "Perrier", price: "$4.99" },
        ],
      },
    ],
  },
];

export default function Menu() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h1>Our Menu</h1>
          <p>Korean BBQ, bubbling soon tofu, cold noodles and more — jump to a section below.</p>
          <nav className="menu-tabs" aria-label="Jump to menu section">
            {CATEGORIES.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`} className="menu-tab">
                {cat.label}
              </a>
            ))}
          </nav>
        </div>
      </section>
      <div className="checker-strip"></div>

      <div className="wrap">
        {CATEGORIES.map((category) => (
          <section className="menu-section" id={category.id} key={category.id}>
            <div className="menu-cat-head">
              <div>
                <h2 className="script-head">{category.title}</h2>
                {category.note && <p className="menu-cat-note">{category.note}</p>}
              </div>
            </div>

            {category.image && category.groups.every((g) => g.items.length === 0) && (
              <img
                className="menu-cat-photo"
                src={category.image}
                alt={`${category.title} at Tofu Ya`}
              />
            )}

            {category.groups.map((group, gi) => (
              <div key={gi}>
                {group.subhead && <p className="menu-subhead">{group.subhead}</p>}
                {group.note && <p className="menu-cat-note" style={{ marginBottom: 10 }}>{group.note}</p>}
                <ul className="menu-list">
                  {group.items.map((item) => (
                    <li className="menu-row" key={item.name}>
                      {item.image && (
                        <img
                          className="menu-thumb"
                          src={item.image}
                          alt={`${item.name} at Tofu Ya`}
                        />
                      )}
                      <div className="name-wrap">
                        <span className="name">{item.name}</span>
                        {item.desc && <p className="desc">{item.desc}</p>}
                      </div>
                      <span className="price">{item.price ?? "Ask for pricing"}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </div>

      <div className="wrap" style={{ paddingBottom: 8 }}>
        <div className="note-box">
          Every combo and BBQ plate comes with steamed rice and a rotating selection of
          house-made banchan (side dishes) like kimchi, seasoned bean sprouts and japchae. Menu
          items and prices may shift day to day — call ahead to confirm before you visit.
        </div>
      </div>

      <section className="lunch-band">
        <div className="wrap">
          <div>
            <h2>Craving it already?</h2>
            <p>Call ahead or stop by our Sawtelle location.</p>
          </div>
          <Link className="btn btn-outline-light" href="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
