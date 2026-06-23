import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          background: "#0a8f3d",
          color: "white",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <Image
          src="/logo.png"
          alt="SwadKart Logo"
          width={250}
          height={250}
          style={{ margin: "0 auto" }}
        />

        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          SwadKart
        </h1>

        <h2 style={{ marginTop: "10px" }}>
          Nature Se Seedha Aap Tak
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "20px auto",
            fontSize: "20px",
          }}
        >
          Premium Quality Spices, Dry Fruits, Seeds &
          Healthy Foods Delivered With Purity,
          Freshness and Trust.
        </p>
      </section>

      {/* About Section */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "#f5f5f5",
        }}
      >
        <h2 style={{ color: "#0a8f3d" }}>
          Welcome to SwadKart
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "20px auto",
            fontSize: "18px",
          }}
        >
          SwadKart brings premium spices, dry fruits,
          seeds and healthy food products directly
          to your home. We focus on purity, freshness
          and customer satisfaction.
        </p>
      </section>

      {/* Contact Section */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "#ffffff",
        }}
      >
        <h2 style={{ color: "#0a8f3d" }}>
          Contact Us
        </h2>

        <p>
          📱 WhatsApp:
          <a
            href="https://wa.me/918471009169"
            target="_blank"
            style={{
              color: "#0a8f3d",
              marginLeft: "8px",
            }}
          >
            +91 8471009169
          </a>
        </p>

        <p>
          📧 Email:
          <a
            href="mailto:roshkiran02@gmail.com"
            style={{
              color: "#0a8f3d",
              marginLeft: "8px",
            }}
          >
            roshkiran02@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}