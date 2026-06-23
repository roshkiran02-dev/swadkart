```tsx
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#059669",
          color: "white",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h1 style={{ fontSize: "72px", fontWeight: "bold" }}>SwadKart</h1>

        <h2 style={{ fontSize: "32px", marginTop: "10px" }}>
          Nature Se Seedha Aap Tak
        </h2>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "800px",
            margin: "30px auto",
          }}
        >
          Premium Quality Spices, Dry Fruits & Healthy Foods delivered with
          purity, freshness and trust.
        </p>

        <a
          href="https://www.facebook.com/people/SwadKart/61590928815698/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              backgroundColor: "#fbbf24",
              color: "black",
              padding: "15px 30px",
              fontSize: "18px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Visit Our Facebook Page
          </button>
        </a>
      </section>

      {/* About Section */}
      <section
        style={{
          backgroundColor: "#ecfdf5",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h2
          style={{
            color: "#047857",
            fontSize: "48px",
            fontWeight: "bold",
          }}
        >
          Welcome to SwadKart
        </h2>

        <p
          style={{
            maxWidth: "1000px",
            margin: "30px auto",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          SwadKart brings premium spices, dry fruits, seeds and healthy food
          products directly to your home. Our mission is to provide natural,
          hygienically packed and high-quality products at affordable prices.
        </p>
      </section>
    </div>
  );
}
```
