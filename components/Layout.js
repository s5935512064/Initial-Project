import Navbar from "./Navbar";
import Footer from "./Footer";
import Cookies from "./Cookies";
import { motion, AnimatePresence } from "framer-motion";


const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
};

const Layout = ({ children }) => {


    return (
        <>
            <Navbar />
            <motion.main
                variants={variants} // Pass the variant object into Framer Motion
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: "spring", duration: 1.5 }} // Set the transition to linear
            >

                {children}

            </motion.main>
            <Footer />
        </>
    );
};

export default Layout;