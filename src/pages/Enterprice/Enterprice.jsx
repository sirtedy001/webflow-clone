import HeroSection from '../../component/EnterpriceComp/Herosection/Herosection';
import Navbar from "../../component/EnterpriceComp/Navbar/Navbar";

function Enterprice() {
  return (
    
    <div className='enterprice'>
      <div className="navControl">
        <Navbar />
      </div>
      <div className="heroGuard">
        <HeroSection />
      </div>
    </div>
  );
}

export default Enterprice;