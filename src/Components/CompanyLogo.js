import React from "react";
import cloud from '../Assets/Company-logos/cloud.png';
import architect from '../Assets/Company-logos/architect.png';
import coin from '../Assets/Company-logos/coin.png';
import fashion from '../Assets/Company-logos/fashion.png';
import mobile from '../Assets/Company-logos/mobile.png';
import profile from '../Assets/Company-logos/profile.png';
import saas from '../Assets/Company-logos/saas.png';

const CompanyLogo = () => {
  return (
    <>
      <section className="space-top-short space-bottom-short" id="company">
        <div className="company-logo fixed-width">
          <div className="root">
            <img src={architect} alt="logo0" />
            <img src={cloud} alt="logo1" />
            <img src={coin} alt="logo2" />
            <img src={mobile} alt="logo3" />
            <img src={profile} alt="logo4" />
            <img src={saas} alt="logo5" />
            <img src={fashion} alt="logo6" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyLogo;
