import React from "react";
import "./global.css";

const TradierBrokerage = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src="https://tradier.com/favicon.ico"
          alt="Tradier Logo"
          className="logo"
        />
        <h2>Tradier Brokerage</h2>
        <div className="status">● Active</div>
      </div>

      <div className="pricing-section">
        <h2 className="title">Exclusive Pricing*</h2>
        <div className="pricing">
          <div className="price">
            <span>$0.00</span>
            <p>Per trade</p>
          </div>
          <div className="price">
            <span>$0.00</span>
            <p>Per contract</p>
          </div>
        </div>
        <p className="note">*Only when you trade through Sensa Market</p>
      </div>

      <div className="membership">
        <h3>Free Pro+ Membership</h3>
        <p>
          Connect a qualifying Tradier Brokerage account with at least $5,000
          and you'll be automatically upgraded to the Pro+ level for free,
          compliments of Tradier.
        </p>
        <a href="https://tradier.com" className="learn-more">
          Learn more.
        </a>
      </div>

      <div className="supported-countries">
        <h3>Supported Countries</h3>
        <div className="countries-list">
          <span className="country">🇺🇸 United States</span>
          <span className="country">🇸🇬 Singapore</span>
          <span className="country">🇩🇪 Germany</span>
          <span className="country">🇮🇱 Israel</span>
          <span className="country">🇨🇭 Switzerland</span>
          <span className="country">🇫🇷 France</span>
          <span className="country">🇧🇷 Brazil</span>
          <span className="country">🇩🇰 Denmark</span>
          <span className="more-countries">+168 more</span>
        </div>
      </div>

      <div className="commission-details">
        <h3>Commission Details*</h3>
        <p>$0.00 equity commission.</p>
        <p>$0.00 per trade & $0.00 per contract.</p>
        <p>U.S. and International traders are eligible.</p>
        <p>
          Exchange fees are not included. View full pricing details{" "}
          <a
            href="https://tradier.com/individuals/pricing"
            className="learn-more"
          >
            here
          </a>
          .
        </p>
      </div>

      <div className="action-buttons">
        <a
          href="https://onboarding.tradier.com/signup?promo=UPLEG3&platform=224"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="open-account">Open Account</button>
        </a>
        <a
          href="https://auth.tradier.com/login?redirectUrl=%2Fauthorize%3Fclient_id%3DEVBms3RFcW26ha9rUvuIFDoM6dCgK93n%26scope%3Dmarket,read,stream,trade,write%26state%3Duniquemyme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="connect">Connect ➔</button>
        </a>
      </div>
    </div>
  );
};

export default TradierBrokerage;
