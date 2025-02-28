import { motion } from 'framer-motion';
import { useState } from 'react';

const AnimatedLogo = ({ className = '' }) => {
  const [hovering, setHovering] = useState(false);

  const logoVariants = {
    initial: {
      y: [0, -10, 0],
      scale: 1,
      transition: {
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }
      }
    },
    hover: {
      rotateY: 360,
      scale: 1.1,
      y: 0,
      transition: {
        duration: 2.5,
        ease: [0.6, 0.01, -0.05, 0.95],
        scale: {
          duration: 1.5,
          ease: "easeInOut"
        }
      }
    }
  };

  // Array of logo variations for different backgrounds
  const logos = [
    '/images/LOGO/logo white-only.png',
    '/images/LOGO/logo blue-backblackline.png',
    '/images/LOGO/LOGO.png'
  ];

  // Function to determine which logo to use based on background
  const getLogoSrc = () => {
    // You can add logic here to determine which logo to use based on background
    // For now, we'll use the white logo as default
    return logos[0];
  };

  return (
    <motion.div
      className={`relative ${className}`}
      initial="initial"
      whileHover="hover"
      animate="initial"
      whileHover="hover"

    >
      <motion.img
        variants={logoVariants}
        src={getLogoSrc()}
        alt="Arkangel Clinic"
        className="h-12 w-auto drop-shadow-lg transition-all duration-300"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      />
    </motion.div>
  );
};

export default AnimatedLogo;
