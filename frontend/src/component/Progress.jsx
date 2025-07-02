import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Animated number hook
function useAnimatedNumber(target, duration = 1200, start = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) {
      setValue(0);
      return;
    }
    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);

      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    }

    requestAnimationFrame(animate);
  }, [target, duration, start]);

  return value;
}

const stats = [
  {
    value: 450,
    label: "Satisfied customers",
   
    display: (val) => `${val}+`,
    color: "#6366f1",
  },
  {
    value: 4300,
    label: "Shipments delivered",
 
    display: (val) => `${val.toLocaleString()}+`,
    color: "#10b981",
  },
  {
    value: 250,
    label: "Units manufactured",
    
    display: (val) => `${val}M+`,
    color: "#f59e0b",
  },
  {
    value: 300,
    label: "Active suppliers",
   
    display: (val) => `${val}+`,
    color: "#ef4444",
  },
];

const StatBox = ({ value, label, description, display, color, inView }) => {
  const animatedValue = useAnimatedNumber(value, 1200, inView);

  return (
    <div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="stat-card"
      style={{ 
        background: "white",
        borderRadius: "1.5rem",
        padding: "2rem",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        transition: "transform 0.3s ease",
        textAlign: "center",
      }}
    >
      <div style={{
        fontSize: "clamp(2.25rem, 5vw, 3rem)",
        fontWeight: 800,
        color: color,
        marginBottom: "1rem",
        lineHeight: 1.2,
        fontFeatureSettings: "'tnum'",
      }}>
        {display(animatedValue)}
      </div>
      <h3 style={{ 
        fontSize: "1.25rem",
        fontWeight: 600,
        marginBottom: "0.75rem",
        color: "#1f2937",
      }}>
        {label}
      </h3>
      <p style={{ 
        color: "#6b7280",
        fontSize: "1rem",
        lineHeight: 1.5,
        maxWidth: "280px",
        margin: "0 auto",
      }}>
        {description}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section style={{ 
      background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
      padding: "6rem 1rem",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ 
        maxWidth: "1280px",
        margin: "0 auto",
        position: "relative",
      }}>
        <h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            textAlign: "center",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "#1f2937",
            marginBottom: "3rem",
          }}
        >
          Trusted by Global Businesses
        </h2>

        <div ref={ref} style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          padding: "1rem",
        }}>
          {stats.map((stat, index) => (
            <StatBox key={index} {...stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
