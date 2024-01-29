import { useSelector } from "react-redux";
import React from "react";

const Educational = () => {
  const { isDarkModeActive } = useSelector((state) => state.menu);
  return (
    <section
      className={`educational-container ${
        isDarkModeActive ? "educational-dark" : ""
      }`}
    >
      <h2 className="title">Navigating the Stock Market</h2>
      <p className="intro-text">
        The stock market is vast and multifaceted. This guide is designed to
        provide you with essential insights to understand stock trading, whether
        you're looking at domestic stocks or global markets.
      </p>

      <div className="educational-card">
        <h3 className="educational-card-title">The Essence of Stocks</h3>
        <p className="educational-card-text">
          A stock represents fractional ownership in a corporation. Purchasing a
          stock makes you a shareholder and aligns your financial interests with
          the company's success. Shareholders can benefit from price
          appreciation and dividends, which are distributions of the company's
          earnings.
        </p>
      </div>

      <div className="educational-card">
        <h3 className="educational-card-title">Global Stock Exchanges</h3>
        <p className="educational-card-text">
          Stock exchanges are platforms where stocks are bought and sold.
          Examples like the NYSE and NASDAQ are just the tip of the iceberg,
          with exchanges around the world facilitating the trade of stocks
          across different sectors and industries.
        </p>
        <p className="educational-card-text">
          <strong>NYSE:</strong> A hub for long-established companies, boasting
          a significant market cap.
        </p>
        <p className="educational-card-text">
          <strong>NASDAQ:</strong> Favors tech-oriented companies and includes
          many modern industry leaders.
        </p>
        <p className="educational-card-text">
          Our platform provides access to an array of global exchanges, allowing
          you to diversify your portfolio internationally.
        </p>
      </div>

      <div className="educational-card">
        <h3 className="educational-card-title">Trading Terminology</h3>
        <p className="educational-card-text">
          Understanding key terms is crucial before starting your trading
          journey. Here's a glossary of terms you'll encounter:
        </p>
        <p className="educational-card-text">
          <strong>Open:</strong> The first price at which the stock trades upon
          the market's opening.
        </p>
        <p className="educational-card-text">
          <strong>High:</strong> The peak price a stock reaches during the
          trading session.
        </p>
        <p className="educational-card-text">
          <strong>Low:</strong> The lowest price a stock drops to during the
          trading session.
        </p>
        <p className="educational-card-text">
          <strong>Close:</strong> The final trading price of the stock for the
          day, which becomes the next day's open.
        </p>
      </div>

      <div className="educational-card">
        <h3 className="educational-card-title">Essential Trading Metrics</h3>
        <p className="educational-card-text">
          Understand the metrics and indicators commonly used in stock analysis
          to make informed decisions:
        </p>
        <p className="educational-card-text">
          <strong>Volume:</strong> Reflects the total number of shares traded
          during a specific period, indicating the stock's liquidity.
        </p>
        <p className="educational-card-text">
          <strong>PE Ratio:</strong> Compares a stock's market value to its
          earnings, offering insight into its relative value.
        </p>
        <p className="educational-card-text">
          <strong>EPS (Earnings Per Share):</strong> Calculates the company's
          profit per outstanding share, serving as an indicator of
          profitability.
        </p>
        <p className="educational-card-text">
          <strong>Beta:</strong> Evaluates a stock's volatility relative to the
          overall market, aiding in risk assessment.
        </p>
      </div>

      <div className="educational-card">
        <h3 className="educational-card-title">
          Trading Hours Across the Globe
        </h3>
        <p className="educational-card-text">
          Trading hours vary by exchange. Major exchanges like the NYSE and
          NASDAQ operate during specific times, but international markets have
          their own schedules. Our app offers real-time information on trading
          hours, including pre-market and after-hours sessions, to help you
          seize opportunities around the clock.
        </p>
      </div>

      <div className="educational-card">
        <h3 className="educational-card-title">Stock Valuation Techniques</h3>
        <p className="educational-card-text">
          Valuation techniques are used to estimate the intrinsic value of
          stocks. Understanding these methods can guide your investment
          decisions:
        </p>
        <p className="educational-card-text">
          <strong>Discounted Cash Flow (DCF):</strong> Assesses a company's
          value based on its projected cash flows, adjusted to present value.
        </p>
        <p className="educational-card-text">
          <strong>Comparable Company Analysis:</strong> Estimates a stock's
          value by comparing it with similar companies in the industry, using
          specific valuation metrics.
        </p>
        <p className="educational-card-text">
          <strong>Dividend Discount Model (DDM):</strong> Values a stock based
          on the dividends it provides to shareholders, projecting future
          dividend payments.
        </p>
      </div>

      <div className="educational-card">
        <h3 className="educational-card-title">
          Risk Factors in Stock Trading
        </h3>
        <p className="educational-card-text">
          Awareness of risk factors is crucial in stock trading to manage
          potential losses effectively:
        </p>
        <p className="educational-card-text">
          <strong>Market Risk:</strong> The possibility of investment value
          declining due to economic shifts or events impacting the entire
          market.
        </p>
        <p className="educational-card-text">
          <strong>Liquidity Risk:</strong> The chance of not being able to
          execute buy/sell orders at the desired time or price.
        </p>
        <p className="educational-card-text">
          <strong>Concentration Risk:</strong> The hazard of concentrating a
          significant portion of investments in a single stock or sector.
        </p>
      </div>

      <div className="educational-card">
        <h3 className="educational-card-title">Order Types and Execution</h3>
        <p className="educational-card-text">
          The stock market offers various order types, each catering to
          different strategies and risks:
        </p>
        <p className="educational-card-text">
          <strong>Market Order:</strong> Executes a trade immediately at the
          best available price.
        </p>
        <p className="educational-card-text">
          <strong>Limit Order:</strong> Sets a specific price for buying or
          selling a stock, ensuring the trade only occurs at that price or
          better.
        </p>
        <p className="educational-card-text">
          <strong>Stop Loss Order:</strong> Designed to limit potential losses
          by setting a specific price at which a stock is automatically sold.
        </p>
      </div>

      <footer className="educational-footer">
        <p className="footer-content">
          This guide is a starting point for your trading pursuits. As you
          advance, you'll learn to harness various strategies and tools to
          decipher market movements and steer your investment journey.
        </p>
      </footer>
    </section>
  );
};

export default Educational;
