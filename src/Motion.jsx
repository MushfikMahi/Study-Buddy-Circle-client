import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};
const Motion = () => {
    return (
        <div className="pt-24">
            <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <motion.h1 variants={itemVariants}
      >
        Galleries Amsterdam Zuid nightwalk
      </motion.h1>
      <ul>
        <motion.li variants={itemVariants}>
          Amsterdam Zuid nightwalk
        </motion.li>
        <motion.li variants={itemVariants}>
          White lines of Canary Wharf
        </motion.li>
      </ul>
    </motion.article>
        </div>
    );
};

export default Motion;