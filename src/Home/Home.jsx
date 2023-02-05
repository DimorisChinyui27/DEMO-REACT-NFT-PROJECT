import "@stripe/stripe-js";
import { Download, Features, SectionWrapper } from '../components';
import assets from '../assets';
import styles from '../styles/Global';

const Home = () => {
      return (
        <>  
            <SectionWrapper 
              title="Discover the Bentley NFT Collection"
              description="A revolutionary new way to own and collect exclusive, one-of-a-kind luxury vehicles in the form of non-fungible tokens."
              showBtn
              mockupImg={assets.homeHero}
              banner="banner"
            />
            <SectionWrapper 
              title="What is our mission?"
              description="To transform luxury car collecting with NFT ownership of rare, exclusive vehicles via a secure and accessible marketplace powered by blockchain technology."
              mockupImg={assets.Thumb}
              reverse
              second
            />
            <Features />
            
            <SectionWrapper 
              title="launch Date?"
              description="Get ready for a revolution in luxury car collecting! The Bentley GT NFT Marketplace Car Collection is launching soon and it's set to change the game. This cutting-edge platform will allow you to own and showcase rare and exclusive luxury vehicles in the form of non-fungible tokens (NFTs)."
              mockupImg={assets.mockup}
              reverse
            />
            <Download />

            <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
               <p className={`${styles.pText} ${styles.whiteText}`}>Made by Dimoris Chinyui@{" "}
               <span className="bold">Demo project 2023</span>
               </p>
            </div>
        </> 
    )
}

export default Home;
