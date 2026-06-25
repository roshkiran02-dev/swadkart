export default function Home() {
  return (
    <main>
      {/* Cover Banner */}
      <img
        src="/Cover.jpg"
        alt="SwadKart Cover"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />

      {/* Content Section */}
      <section
        style={{
          padding: "50px 20px",
          textAlign: "center",
          background: "#f8fff8",
        }}
      >
        <h1
          style={{
            color: "#0a7a2f",
            fontSize: "48px",
            marginBottom: "15px",
          }}
        >
          SwadKart
        </h1>

        <h2 style={{ color: "#444", marginBottom: "20px" }}>
          Nature Se Seedha Aap Tak
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "20px",
            lineHeight: "1.8",
          }}
        >
          Premium Quality Spices, Dry Fruits, Seeds & Healthy Foods.
          Fresh, Natural and Hygienically Packed Products Delivered to
          Your Home.
        </p>

        {/* Buttons */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://www.facebook.com/people/SwadKart/61590928815698/"
            target="_blank"
            style={{
              background: "#1877F2",
              color: "white",
              padding: "15px 30px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Order on Facebook
          </a>

          <a
            href="https://www.instagram.com/swadkart02/"
            target="_blank"
            style={{
              background: "#E1306C",
              color: "white",
              padding: "15px 30px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Order on Instagram
          </a>
        </div>

        {/* Contact */}
        <div style={{ marginTop: "40px" }}>
          <h3>Contact Us</h3>
          <p>📱 WhatsApp: +91 8471009169</p>
          <p>📧 Email: roshkiran02@gmail.com</p>
        </div>
      </section>
    </main>
  );
}