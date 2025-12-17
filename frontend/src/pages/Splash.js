import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home", { replace: true });
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={container}>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        SurakshaVerse
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Realtime Cyber Defense Readiness
      </motion.p>

      <motion.div
        style={loader}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
}

const container = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "radial-gradient(circle at top, #0b2a3f, #050b14)",
  color: "#00e5ff",
};

const loader = {
  marginTop: "30px",
  width: "45px",
  height: "45px",
  border: "4px solid #00e5ff",
  borderTop: "4px solid transparent",
  borderRadius: "50%",
};

export default Splash;
