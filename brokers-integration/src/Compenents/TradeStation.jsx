import React from "react";
import "./global.css";

const TradeStation = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src="https://www.tradestation.com/favicon.ico"
          alt="Tradier Logo"
          className="logo"
        />
        <h2>Trade Station</h2>
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
          Connect a qualifying TradeStation account with at least $10,000 and
          you'll be automatically upgraded to the Pro+ level for free,
          compliments of TradeStation
        </p>
        <a
          href="https://www.tradestation.com/m"
          className="learn-more"
          target="blank"
          rel="noopener noreferrer"
        >
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
            href="https://www.tradestation.com/pricing/service-fees/"
            className="learn-more"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </div>

      <div className="action-buttons" target="_blank" rel="noopener noreferrer">
        <a href="https://getstarted2.tradestation.com/intro?_gl=1*r77gun*_gcl_au*MTY1NjMxMzczMi4xNzI5NTg3ODU3&_ga=2.118717452.461595305.1729587857-1659194607.1729587857">
          <button className="open-account">Open Account</button>
        </a>
        <a
          href="https://signin.tradestation.com/login?state=hKFo2SBlVnNBVTdhRWZGZHY3WjNxM214MVBBb1JZMlFUVENsWqFupWxvZ2luo3RpZNkgWnlJV3F2Yjd3UFItTUhydHF4anU5aTdjN3hURlNsWmqjY2lk2SBZUlNiYlFoV213N2JuTXZXYjhnOFZDd1plT2xRcEE3Ug&client=YRSbbQhWmw7bnMvWb8g8VCwZeOlQpA7R&protocol=oauth2&response_type=code&audience=https%3A%2F%2Fapi.tradestation.com&redirect_uri=https%3A%2F%2Fwww.sensamarket.com%2Ftradestation%2Fauth&scope=openid%20MarketData%20profile%20ReadAccount%20Trade%20Matrix%20OptionSpreads%20email%20offline_access"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="connect">Connect ➔</button>
        </a>
      </div>
    </div>
  );
};

export default TradeStation;
