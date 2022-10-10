import React from "react";
import { motion } from "framer-motion";

import Menu from "../components/Menu";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div>
      <Menu />
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.4 }}
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}
