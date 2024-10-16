import React from 'react'; 
import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer'; 

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <motion.section
      className="hero-wrapper"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      
      
      <div className="paddings innerwidth flexCenter hero-container">
        {/* Left side */}
        <div className="flexColStart hero-left">
          <motion.div
            className="hero-title"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="orange-circle" />
            <h1>
              Discover <br />
              Most Suitable <br />
              Home.
            </h1>
          </motion.div>
          <div className="flexCenter hero-description">
            <span className="secondaryText">
              Explore a selection of properties <br />
              to help you choose your dream home.
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" placeholder="Enter location..." />
            <button className="button">search</button>
          </div>

          <div className="flexCenter stats">
            <motion.div
              className="flexColstart stats"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <span>
                <CountUp start={8800} end={9000} duration={4} /><span className="plus-symbol">+</span>
              </span>
              <br />
              <span className="secondaryText">Premium Products</span>
            </motion.div>

            <motion.div
              className="flexColstart stats"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <span>
                <CountUp start={1950} end={2000} duration={4} /><span className="plus-symbol">+</span>
              </span>
              <br />
              <span className="secondaryText">Happy Customers</span>
            </motion.div>

            <motion.div
              className="flexColstart stats"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <span>
                <CountUp end={28} /><span className="plus-symbol">+</span>
              </span>
              <br />
              <span className="secondaryText">Award Winnings</span>
            </motion.div>
          </div>
        </div>

        {/* Right side */}
        <div className="flexCenter hero-right">
          <motion.div
            className="image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <img src="./hero-image.png" alt="Hero" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;