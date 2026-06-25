```tsx
export default function Home() {
  const products = [
    { name: "Haldi Powder", price: "₹55", weight: "200g" },
    { name: "Lal Mirch Powder", price: "₹65", weight: "200g" },
    { name: "Jeera", price: "₹90", weight: "200g" },
    { name: "Ajwain", price: "₹90", weight: "200g" },
    { name: "Choti Elaichi", price: "₹850", weight: "200g" },
    { name: "Stevia", price: "₹399", weight: "200g" },
  ];

  return (
    <main style={{ padding: "20px", background: "#f8fff8" }}>
      <h1 style={{ textAlign: "center", color: "green" }}>
        SwadKart
      </h1>

      <p style={{ textAlign: "center" }}>
        Nature Se Seedha Aap Tak
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "12px",
              background: "#fff",
              textAlign: "center",
            }}
          >
            <h2>{product.name}</h2>

            <p><b>{product.price}</b></p>
            <p>{product.weight}</p>

            <a
              href="https://wa.me/918471009169"
              target="_blank"
            >
              <button
                style={{
                  background: "green",
                  color: "white",
                  padding: "10px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Order on WhatsApp
              </button>
            </a>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <a
          href="https://www.facebook.com/people/SwadKart/61590928815698/"
          target="_blank"
        >
          <button
            style={{
              margin: "10px",
              padding: "12px 20px",
              background: "#1877F2",
              color: "white",
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
              margin: "10px",
              padding: "12px 20px",
              background: "#E1306C",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Instagram
          </button>
        </a>
      </div>
    </main>
  );
}
```
