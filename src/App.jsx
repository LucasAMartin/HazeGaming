import styles from "./style";
import { FavoriteGame, Business, ManageLibrary, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./Components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.flexCenter} pb-16`}>
      <div className={`${styles.boxWidth} ${styles.paddingX} fixed z-50 sm:pt-24 pt-20`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <FavoriteGame />
        <ManageLibrary />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;