import { motion } from "framer-motion";

const RiskGauge = ({ value, level }) => {
  const radius = 70;
  const stroke = 8;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  const getColor = () => {
    if (level === "High") return "#ff4d4d";
    if (level === "Medium") return "#ffb84d";
    return "#4dff88";
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={level === "High" ? "pulse-danger" : ""}
      style={{
        width: "180px",
        margin: "0 auto",
        textAlign: "center",
        position: "relative"
      }}
    >
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#2a2f3a"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <motion.circle
          stroke={getColor()}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </svg>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{
          position: "absolute",
          top: "52%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "26px",
          fontWeight: "bold",
          color: getColor()
        }}
      >
        {value}%
      </motion.div>

      <div style={{ marginTop: "12px", fontSize: "14px", color: "#c9d6e3" }}>
        System Risk
      </div>
    </motion.div>
  );
};

export default RiskGauge;
