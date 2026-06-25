```tsx
import Image from "next/image";

const products = [
  {
    name: "Haldi Powder",
    price: "₹55",
    weight: "200g",
    image: "/haldi.jpg",
  },
  {
    name: "Lal Mirch Powder",
    price: "₹65",
    weight: "200g",
    image: "/lalmirch.jpg",
  },
  {
    name: "Jeera",
    price: "₹90",
    weight: "200g",
    image: "/jeera.jpg",
  },
  {
    name: "Ajwain",
    price: "₹90",
    weight: "200g",
    image: "/ajwain.jpg",
  },
  {
    name: "Choti Elaichi",
    price: "₹850",
    weight: "200g",
    image: "/elaichi.jpg",
  },
  {
    name: "Stevia",
    price: "₹399",
    weight: "200g",
    image: "/stevia.jpg",
  },
];

export default function Home() {
  return (
    <main style={{ background: "#f5f9f5" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "#0a8f35",
          color: "white",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>
          SwadKart
        </h1>

        <h2>Nature Se Seedha Aap Tak</h2>

        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          Premium Quality Spices, Dry Fruits & Healthy Foods
        </p>

        <a href="https://wa.me/918471009169" target="_blank">
          <button
            style={{
              padding: "15px 30px",
              background: "#ffb400",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Order on WhatsApp
          </button>
        </a>
      </section>

      {/* Products */}
      <section style={{ padding: "50px 20px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#0a8f35",
          }}
        >
          Our Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {products.map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={400}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3>{item.name}</h3>

                <p>{item.weight}</p>

                <h2 style={{ color: "#0a8f35" }}>
                  {item.price}
                </h2>

                <a
                  href={`https://wa.me/918471009169?text=I want to order ${item.name}`}
                  target="_blank"
                >
                  <button
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "#25D366",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Order Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <section
        style={{
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h2>Follow SwadKart</h2>

        <a
          href="https://www.facebook.com/people/SwadKart/61590928815698/"
          target="_blank"
        >
          <button
            style={{
              background: "#1877F2",
              color: "white",
              padding: "12px 25px",
              margin: "10px",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Facebook
          </button>
        </a>

        <a
          href="https://www.instagram.com/swadkart02/"
          target="_blank"
        >
          <button
            style={{
              background: "#E1306C",
              color: "white",
              padding: "12px 25px",
              margin: "10px",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Instagram
          </button>
        </a>
      </section>
    </main>
  );
}
```
