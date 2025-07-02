 import React from "react";

const cards = [
    {
        title: "Global Network of Suppliers",
        description: "Emphasize and showcase an extensive network of reliable and high-quality suppliers worldwide",
        icon: (
            <svg width="48" height="48" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2.5" />
                <path d="M12 2v20M2 12h20" stroke="#fff" strokeWidth="2.5" />
            </svg>
        ),
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Cost-effective Solutions",
        description: "Emphasize your ability to negotiate favorable terms, secure competitive pricing",
        icon: (
            <svg width="48" height="48" fill="none" stroke="#f97316" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" />
                <path d="M12 17v-6" />
                <circle cx="12" cy="8" r="1" />
            </svg>
        ),
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Quality Assurance",
        description: "Showcase a rigorous quality control process to ensure that products meet or exceed client specifications",
        icon: (
            <svg width="48" height="48" fill="none" stroke="#f97316" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M6 12l4 4 8-8" />
                <circle cx="12" cy="12" r="10" />
            </svg>
        ),
        image: "computer-algorithm-computer-code-concept_60438-3923.avif"
    }
];

function Card({ title, description, icon, image }) {
    return (
        <div className="card hover-image-card">
            <div className="card-image-container">
                <img src={image} alt={title} className="card-image" />
            </div>
            <div className="card-content">
                <div className="card-icon">{icon}</div>
                <div className="card-title">{title}</div>
                <div className="card-desc">{description}</div>
            </div>
        </div>
    );
}

const WhyChooseSection = () => (
    <section className="why-choose">
        <h2>
            Why Choose <span className="highlight">Our Sourcing Agent™</span>
        </h2>
        <div className="underline" />
        <div className="card-grid-wrapper">
            <div className="card-grid">
                {cards.map((card) => (
                    <Card key={card.title} {...card} />
                ))}
            </div>
        </div>
        <style>{`
      .why-choose {
        background: #f7fafd;
        padding: 3.5rem 1rem 2.5rem 1rem;
        text-align: center;
      }
      .why-choose h2 {
        font-size: 2.1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #22223b;
      }
      .why-choose .highlight {
        color:rgb(39, 169, 205);
      }
      .why-choose .underline {
        width: 60px;
        height: 5px;
        background:rgb(33, 229, 243);
        border-radius: 3px;
        margin: 0.5rem auto 2.2rem auto;
      }
      .card-grid-wrapper {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }
      .card-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }
      .card {
        background: #fff;
        border-radius: 18px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.04);
        min-height: 320px;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2.3rem 1.5rem 2.1rem 1.5rem;
        transition: box-shadow 0.3s, transform 0.3s;
        cursor: pointer;
      }
      .hover-image-card .card-image-container {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        pointer-events: none;
      }
      .hover-image-card .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.4s cubic-bezier(.4,2,.3,1);
        border-radius: 18px;
        filter: brightness(0.7);
      }
      .hover-image-card:hover .card-image {
        opacity: 1;
      }
      .hover-image-card .card-content {
        position: relative;
        z-index: 2;
        color: #22223b;
        transition: color 0.3s;
      }
      .hover-image-card:hover .card-content {
        color: #fff;
        text-shadow: 0 2px 8px rgba(0,0,0,0.25);
      }
      .card-icon {
        margin-bottom: 1.2rem;
        font-size: 2.4rem;
      }
      .card-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.7rem;
      }
      .card-desc {
        font-size: 1.05rem;
        font-weight: 400;
        line-height: 1.5;
        opacity: 0.92;
      }
      @media (max-width: 900px) {
        .card-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 1.3rem;
        }
        .card {
          min-height: 220px;
        }
      }
      @media (max-width: 600px) {
        .why-choose {
          padding: 2rem 0.2rem 1.5rem 0.2rem;
        }
        .card-grid-wrapper {
          overflow-x: auto;
        }
        .card-grid {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          min-width: 600px;
          width: max-content;
        }
        .card {
          min-width: 260px;
          max-width: 320px;
          flex-shrink: 0;
          padding: 1.3rem 0.7rem 1.1rem 0.7rem;
        }
        .card-title {
          font-size: 1.1rem;
        }
        .card-icon {
          font-size: 2rem;
        }
      }
    `}</style>
    </section>
);

export default WhyChooseSection;
