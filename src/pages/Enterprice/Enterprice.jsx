import HeroSection from '../../component/EnterpriceComp/Herosection/Herosection';
import Navbar from "../../component/EnterpriceComp/Navbar/Navbar";
import Platform from '../../component/EnterpriceComp/Platform/Platform';
import Partner from '../../component/EnterpriceComp/Partner/Partner';
import Webflow from '../../component/EnterpriceComp/Webflow/Webflow'
import Demo from '../../component/EnterpriceComp/Demo/Demo'

function Enterprice() {
  return (
    
    <div className='enterprice'>
      <div className="navControl">
        <Navbar />
      </div>
      <div className="heroGuard">
        <HeroSection />
      </div>
      <div className="platform">
        <Platform />
      </div>
      <div className="partner">
        <Partner />
      </div>
      <div className="webflow">
        <Webflow />
      </div>
      <div className="demo">
        <Demo />
      </div>
    </div>
  );
}

export default Enterprice;