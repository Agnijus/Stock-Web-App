const Educational = () => {
  return (
    <section className="educational-container">
      <div className="title">Navigating the Stock Market</div>
      <p>
        The stock market is vast and multifaceted. This guide is designed to
        provide you with essential insights to understand stock trading, whether
        you're looking at domestic stocks or global markets.
      </p>

      <section className="section-introduction">
        <div className="heading-level2">The Essence of Stocks</div>
        <p>
          A stock represents fractional ownership in a corporation. Purchasing a
          stock makes you a shareholder and aligns your financial interests with
          the company's success. Shareholders can benefit from price
          appreciation and dividends, which are distributions of the company's
          earnings.
        </p>
      </section>

      <section className="section-markets">
        <div className="heading-level2">Global Stock Exchanges</div>
        <p>
          Stock exchanges are platforms where stocks are bought and sold.
          Examples like the NYSE and NASDAQ are just the tip of the iceberg,
          with exchanges around the world facilitating the trade of stocks
          across different sectors and industries.
        </p>
        <ul>
          <li>
            <strong>NYSE:</strong> A hub for long-established companies,
            boasting a significant market cap.
          </li>
          <li>
            <strong>NASDAQ:</strong> Favors tech-oriented companies and includes
            many modern industry leaders.
          </li>
        </ul>
        <p>
          Our platform provides access to an array of global exchanges, allowing
          you to diversify your portfolio internationally.
        </p>
      </section>

      <section className="section-trading">
        <div className="heading-level2">Trading Terminology</div>
        <p>
          Grasping the common terms used in stock trading is fundamental to
          navigating the markets effectively. Here's a glossary of terms you'll
          encounter:
        </p>
        <dl>
          <dt>Open:</dt>
          <dd>
            The first price at which the stock trades upon the market's opening.
          </dd>
          <dt>High:</dt>
          <dd>The peak price a stock reaches during the trading session.</dd>
          <dt>Low:</dt>
          <dd>The lowest price a stock drops to during the trading session.</dd>
          <dt>Close:</dt>
          <dd>
            The final trading price of the stock for the day, which becomes the
            next day's open.
          </dd>
        </dl>
      </section>

      <section className="section-chart-interpretation">
        <div className="heading-level2">Deciphering Price Charts</div>
        <p>
          Price charts plot the stock's price over time, with the x-axis
          representing time and the y-axis representing price. Each point on the
          graph corresponds to the stock's price at the end of a trading period.
          The time frames on our app—ranging from one day to one year—allow you
          to examine the stock's performance over different periods.
        </p>
      </section>

      <section className="section-market-analysis">
        <div className="heading-level2">Analyzing the Market</div>
        <p>
          To make informed decisions, traders analyze the market using several
          approaches:
        </p>
        <ul>
          <li>
            <strong>Fundamental Analysis:</strong> Examines company fundamentals
            like financial health and industry position.
          </li>
          <li>
            <strong>Technical Analysis:</strong> Studies past market data,
            primarily price and volume, to forecast future price movements.
          </li>
          <li>
            <strong>Quantitative Analysis:</strong> Employs mathematical models
            to identify trading opportunities.
          </li>
        </ul>
      </section>

      <section className="section-indicators">
        <div className="heading-level2">Essential Trading Metrics</div>
        <p>
          Here are some metrics and indicators commonly used in stock analysis:
        </p>
        <dl>
          <dt>Volume:</dt>
          <dd>
            Indicates how many shares have been traded during a given period,
            reflecting the stock's liquidity.
          </dd>
          <dt>PE Ratio:</dt>
          <dd>
            Shows how a stock's market value compares to its earnings, providing
            a measure of relative value.
          </dd>
          <dt>EPS:</dt>
          <dd>
            Represents the company's profit divided by the number of outstanding
            shares, gauging its profitability.
          </dd>
          <dt>Beta:</dt>
          <dd>
            Measures a stock's volatility compared to the overall market, useful
            for assessing risk.
          </dd>
        </dl>
      </section>

      <section className="section-timings">
        <div className="heading-level2">Trading Hours Across the Globe</div>
        <p>
          Trading hours differ by exchange. While the NYSE and NASDAQ operate
          from 9:30 AM to 4:00 PM ET, international markets vary, with our app
          offering real-time information on these differences. Pre-market and
          after-hours trading are also available, extending opportunities beyond
          standard hours.
        </p>
      </section>

      <section className="section-valuation">
        <div className="heading-level2">Stock Valuation Techniques</div>
        <p>
          Valuation is the technique of estimating the intrinsic value of a
          stock. Here are some of the methods investors use to evaluate stocks:
        </p>
        <ul>
          <li>
            <strong>Discounted Cash Flow (DCF):</strong> A method that values a
            company based on its projected cash flows, adjusted to their present
            value.
          </li>
          <li>
            <strong>Comparable Company Analysis:</strong> Valuing a stock by
            comparing it to similar companies in the industry based on valuation
            metrics.
          </li>
          <li>
            <strong>Dividend Discount Model (DDM):</strong> A valuation model
            that estimates the value of a stock based on the dividend it pays to
            shareholders.
          </li>
        </ul>
      </section>

      <section className="section-risk">
        <div className="heading-level2">Risk Factors in Stock Trading</div>
        <p>
          Stock trading involves various risks. Understanding these can help
          manage potential losses:
        </p>
        <ul>
          <li>
            <strong>Market Risk:</strong> The risk of investments declining in
            value due to economic developments or other events that affect the
            entire market.
          </li>
          <li>
            <strong>Liquidity Risk:</strong> The risk that an investor might not
            be able to buy/sell stocks at the desired time or price.
          </li>
          <li>
            <strong>Concentration Risk:</strong> The risk associated with having
            a significant portion of investments in a single stock or sector.
          </li>
        </ul>
      </section>

      <section className="section-order-types">
        <div className="heading-level2">Order Types and Execution</div>
        <p>
          When placing stock trades, you can choose from several order types,
          each with its own strategy and risk:
        </p>
        <ul>
          <li>
            <strong>Market Order:</strong> An order to buy or sell a stock at
            the best available current price.
          </li>
          <li>
            <strong>Limit Order:</strong> An order to buy or sell a stock at a
            specific price or better.
          </li>
          <li>
            <strong>Stop Loss Order:</strong> An order to sell a stock when it
            reaches a particular price, used to limit an investor's loss on a
            position.
          </li>
        </ul>
      </section>

      <footer>
        <div className="footer-content">
          This guide lays the groundwork for your trading pursuits. As you
          advance, you'll learn to harness various strategies and tools to
          decipher market movements and steer your investment journey.
        </div>
      </footer>
    </section>
  );
};
export default Educational;
