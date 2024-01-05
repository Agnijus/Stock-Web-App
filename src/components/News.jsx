import { fetchNewsData } from "./features/stock/stockSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { SyncLoader } from "react-spinners";
import { useEffect } from "react";

const News = () => {
  const dispatch = useDispatch();
  // const { newsData, loading, error } = useSelector((state) => state.stock);

  const newsData = {
    items: "50",
    sentiment_score_definition:
      "x <= -0.35: Bearish; -0.35 < x <= -0.15: Somewhat-Bearish; -0.15 < x < 0.15: Neutral; 0.15 <= x < 0.35: Somewhat_Bullish; x >= 0.35: Bullish",
    relevance_score_definition:
      "0 < x <= 1, with a higher score indicating higher relevance.",
    feed: [
      {
        title: "Microsoft Stock Has These Major Catalysts Ahead In 2024",
        url: "https://www.investors.com/news/technology/microsoft-stock-has-these-major-catalysts-ahead-in-2024/",
        time_published: "20240105T181400",
        authors: ["Investor's Business Daily", "PATRICK SEITZ"],
        summary:
          "A host of Wall Street analysts have put Microsoft ( MSFT ) stock on their lists of top stock picks for 2024. They see the software giant getting a boost from several major catalysts in the year ahead, including monetizing its artificial intelligence initiatives.",
        banner_image:
          "https://www.investors.com/wp-content/uploads/2024/01/Stock-microsoft-cocreatorai-01-company.jpg",
        source: "Investors Business Daily",
        category_within_source: "n/a",
        source_domain: "www.investors.com",
        topics: [
          {
            topic: "Technology",
            relevance_score: "0.5",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.999996",
          },
          {
            topic: "Manufacturing",
            relevance_score: "0.5",
          },
        ],
        overall_sentiment_score: 0.233776,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "MSFT",
            relevance_score: "0.844427",
            ticker_sentiment_score: "0.473166",
            ticker_sentiment_label: "Bullish",
          },
          {
            ticker: "NVDA",
            relevance_score: "0.070725",
            ticker_sentiment_score: "-0.143845",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Mother Of All Reports Goes Against The Stock Market's Consensus Of Immaculate Everything - Apple  ( NASDAQ:AAPL ) ",
        url: "https://www.benzinga.com/markets/24/01/36514364/mother-of-all-reports-goes-against-the-stock-markets-consensus-of-immaculate-everything",
        time_published: "20240105T175909",
        authors: ["The Arora Report"],
        summary:
          "To gain an edge, this is what you need to know today. Please click here for a chart of SPDR S&P 500 ETF Trust SPY which represents the benchmark stock market index S&P 500 ( SPX ) . Non-farm private payrolls came at 164K vs. 132K consensus. Non-farm payrolls came at 216K vs. 162K consensus.",
        banner_image:
          "https://cdn.benzinga.com/files/nicholas-cappello-wb63zqj5gne-unsplash_12_10.jpg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Markets",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Economy - Monetary",
            relevance_score: "0.158519",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.999691",
          },
          {
            topic: "Manufacturing",
            relevance_score: "0.333333",
          },
          {
            topic: "Earnings",
            relevance_score: "0.158519",
          },
          {
            topic: "Technology",
            relevance_score: "0.333333",
          },
          {
            topic: "Finance",
            relevance_score: "0.333333",
          },
        ],
        overall_sentiment_score: 0.290052,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "MSFT",
            relevance_score: "0.118064",
            ticker_sentiment_score: "0.02919",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "GOOG",
            relevance_score: "0.118064",
            ticker_sentiment_score: "0.02919",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "META",
            relevance_score: "0.118064",
            ticker_sentiment_score: "0.02919",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "NVDA",
            relevance_score: "0.118064",
            ticker_sentiment_score: "0.02919",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "AAPL",
            relevance_score: "0.118064",
            ticker_sentiment_score: "0.02919",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "TSLA",
            relevance_score: "0.118064",
            ticker_sentiment_score: "0.02919",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "IVZ",
            relevance_score: "0.059194",
            ticker_sentiment_score: "0.248071",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "APELY: 3 Top-Rated Tech Stocks to Buy Poised for New Year Gains This Week",
        url: "https://stocknews.com/news/apely-ob-qmco-dv-3-top-rated-tech-stocks-to-buy-poised-for-new-year/",
        time_published: "20240105T180225",
        authors: ["StockNews.com Staff"],
        summary:
          "The thriving global technology industry is driven by widespread cloud adoption and pandemic-accelerated digital transformation. Against this scenario, investors could consider investing in top tech stocks Alps Alpine Co., Ltd. ( APELY ) , Outbrain Inc. ( OB ) , and Quantum Corporation ( QMCO ) ...",
        banner_image:
          "https://stocknews.com/wp-content/uploads/2022/08/Kritika-Sarmah_Image-3.jpg",
        source: "Stocknews.com",
        category_within_source: "n/a",
        source_domain: "stocknews.com",
        topics: [
          {
            topic: "Earnings",
            relevance_score: "0.99999",
          },
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.999365",
          },
        ],
        overall_sentiment_score: 0.303434,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "DTST",
            relevance_score: "0.0312",
            ticker_sentiment_score: "0.276248",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "APELY",
            relevance_score: "0.245649",
            ticker_sentiment_score: "0.212819",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "DV",
            relevance_score: "0.09341",
            ticker_sentiment_score: "0.133355",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "OB",
            relevance_score: "0.155051",
            ticker_sentiment_score: "0.251931",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title: "IBD Stock Of The Day: The Buying Opportunity In Weight Loss",
        url: "https://www.investors.com/research/ibd-stock-of-the-day/novo-nordisk-stock-lingers-in-a-buy-zone-after-snagging-two-obesity-deals/",
        time_published: "20240105T180100",
        authors: ["Investor's Business Daily", "ALLISON GATLIN"],
        summary:
          "Novo Nordisk Stock Lingers In Buy Zone After Snagging Two Obesity Deals Investor's Business Daily ...",
        banner_image:
          "https://www.investors.com/wp-content/uploads/2024/01/SOTD-1-4-2024NVO.png",
        source: "Investors Business Daily",
        category_within_source: "n/a",
        source_domain: "www.investors.com",
        topics: [
          {
            topic: "Life Sciences",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.999365",
          },
        ],
        overall_sentiment_score: 0.130124,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "NVO",
            relevance_score: "0.404098",
            ticker_sentiment_score: "0.232614",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "LLY",
            relevance_score: "0.350564",
            ticker_sentiment_score: "0.141762",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "REGN",
            relevance_score: "0.120431",
            ticker_sentiment_score: "0.032569",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "AMGN",
            relevance_score: "0.120431",
            ticker_sentiment_score: "0.032569",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "OMGA",
            relevance_score: "0.120431",
            ticker_sentiment_score: "0.106572",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "PFE",
            relevance_score: "0.120431",
            ticker_sentiment_score: "0.032569",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "BIIB",
            relevance_score: "0.060388",
            ticker_sentiment_score: "0.337437",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "Beyond Bitcoin: How Spot ETFs Could Reshape The Global Financial Landscape - BlackRock  ( NYSE:BLK ) ",
        url: "https://www.benzinga.com/markets/cryptocurrency/24/01/36514021/beyond-bitcoin-how-spot-etfs-could-reshape-the-global-financial-landscape",
        time_published: "20240105T182736",
        authors: ["Murtuza Merchant"],
        summary:
          "The Securities and Exchange Commission ( SEC ) is on the precipice of a landmark decision: approving the first-ever spot Bitcoin BTC/USD Exchange-Traded Funds ( ETFs ) . This seemingly innocuous bureaucratic step could disrupt the crypto market, traditional finance and the global ...",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/bitcoin_shutter4.jpg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "News",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Finance",
            relevance_score: "1.0",
          },
          {
            topic: "Blockchain",
            relevance_score: "0.451494",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.999162",
          },
        ],
        overall_sentiment_score: 0.075814,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "BLK",
            relevance_score: "0.125134",
            ticker_sentiment_score: "0.154849",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "IVZ",
            relevance_score: "0.062761",
            ticker_sentiment_score: "0.13408",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "WT",
            relevance_score: "0.062761",
            ticker_sentiment_score: "0.13408",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "CRYPTO:BTC",
            relevance_score: "0.843611",
            ticker_sentiment_score: "0.208917",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "Canoo's stock sinks toward a record low, even as Wedbush sees 1,800% rally potential",
        url: "https://www.marketwatch.com/story/canoos-stock-sinks-toward-a-record-low-even-as-wedbush-sees-1-800-rally-potential-d0990a94",
        time_published: "20240105T175800",
        authors: ["Tomi Kilgore"],
        summary:
          'Canoo\'s stock continued into record-low territory Friday, even after Wedbush analyst Dan Ives recommended investing in the electric-vehicle maker, which he said has a "golden opportunity" to benefit in the current last-mile delivery market.',
        banner_image: "https://images.mktw.net/im-25504651/social",
        source: "MarketWatch",
        category_within_source: "Top Stories",
        source_domain: "www.marketwatch.com",
        topics: [
          {
            topic: "Retail & Wholesale",
            relevance_score: "0.5",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.992549",
          },
          {
            topic: "Manufacturing",
            relevance_score: "0.5",
          },
        ],
        overall_sentiment_score: 0.154104,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "GOEV",
            relevance_score: "0.503018",
            ticker_sentiment_score: "0.348038",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "WMT",
            relevance_score: "0.179121",
            ticker_sentiment_score: "0.123882",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "VanEck pledges 5% of spot Bitcoin ETF profits to core devs after SEC approval",
        url: "https://cointelegraph.com/news/vaneck-pledges-profits-core-devs-spot-bitcoin-etf",
        time_published: "20240105T175323",
        authors: ["Turner Wright"],
        summary:
          "As many asset managers are awaiting a decision from the SEC, VanEck said it signed a pledge to donate profits from its spot crypto ETF to Bitcoin core developers through Brink.",
        banner_image:
          "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2024-01/7dc3b2e7-b11c-4c99-b87f-7c042d1c26d0.jpg",
        source: "Cointelegraph",
        category_within_source: "n/a",
        source_domain: "cointelegraph.com",
        topics: [
          {
            topic: "Finance",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.990786",
          },
        ],
        overall_sentiment_score: 0.263915,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "BLK",
            relevance_score: "0.130926",
            ticker_sentiment_score: "0.151067",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "IVZ",
            relevance_score: "0.130926",
            ticker_sentiment_score: "0.151067",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "WT",
            relevance_score: "0.130926",
            ticker_sentiment_score: "0.151067",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "CRYPTO:BTC",
            relevance_score: "0.930197",
            ticker_sentiment_score: "0.439932",
            ticker_sentiment_label: "Bullish",
          },
          {
            ticker: "CRYPTO:ETH",
            relevance_score: "0.59016",
            ticker_sentiment_score: "0.266507",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "Spotlight on AT&T: Analyzing the Surge in Options Activity - AT&T  ( NYSE:T ) ",
        url: "https://www.benzinga.com/markets/options/24/01/36514507/spotlight-on-at-t-analyzing-the-surge-in-options-activity",
        time_published: "20240105T180141",
        authors: ["Benzinga Insights"],
        summary:
          "Whales with a lot of money to spend have taken a noticeably bearish stance on AT&T. Looking at options history for AT&T T we detected 12 trades. If we consider the specifics of each trade, it is accurate to state that 33% of the investors opened trades with bullish expectations and 66% with ...",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2023/movers_image_0.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Markets",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.980922",
          },
          {
            topic: "Earnings",
            relevance_score: "0.796627",
          },
          {
            topic: "Technology",
            relevance_score: "0.5",
          },
          {
            topic: "Finance",
            relevance_score: "0.5",
          },
        ],
        overall_sentiment_score: 0.044601,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "T",
            relevance_score: "0.70655",
            ticker_sentiment_score: "0.068273",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "WFC",
            relevance_score: "0.092927",
            ticker_sentiment_score: "-0.141115",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Glancy Prongay & Murray LLP Reminds Investors of Looming Deadline in the Class Action Lawsuit Against Veradigm Inc.  ( MDRX )  - Veradigm  ( NASDAQ:MDRX ) ",
        url: "https://www.benzinga.com/pressreleases/24/01/g36514681/glancy-prongay-murray-llp-reminds-investors-of-looming-deadline-in-the-class-action-lawsuit-agains",
        time_published: "20240105T180956",
        authors: ["Globe Newswire"],
        summary: "LOS ANGELES, Jan. 05, 2024 ( GLOBE NEWSWIRE ) --",
        banner_image:
          "https://www.benzinga.com/next-assets/images/schema-image-default.png",
        source: "Benzinga",
        category_within_source: "News",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.955357",
          },
          {
            topic: "Earnings",
            relevance_score: "0.977154",
          },
          {
            topic: "Mergers & Acquisitions",
            relevance_score: "0.108179",
          },
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: 0.007227,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "MDRX",
            relevance_score: "0.665853",
            ticker_sentiment_score: "-0.003763",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "META",
            relevance_score: "0.048133",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Crypto For Newbies In 2024: How To Navigate Price Trends and Make Those 10x Decisions",
        url: "https://www.benzinga.com/markets/cryptocurrency/24/01/36514833/crypto-for-newbies-in-2024-how-to-navigate-price-trends-and-make-those-10x-decisions",
        time_published: "20240105T182048",
        authors: ["Locx Labs"],
        summary:
          "Stablecoin liquidity is up as new investors deploy fresh capital, Bitcoin ( $BTC ) mining stocks are zooming, and the top ten cryptocurrencies are already showing signs of recovery after the Matrixport ETF report sent a chill through the market.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/screenshot_2024-01-05_at_11.50.09_pm.png?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Markets",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Economy - Monetary",
            relevance_score: "0.158519",
          },
          {
            topic: "Blockchain",
            relevance_score: "0.928139",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.95493",
          },
        ],
        overall_sentiment_score: 0.233729,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "CRYPTO:BTC",
            relevance_score: "0.222838",
            ticker_sentiment_score: "0.1114",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "CRYPTO:ETH",
            relevance_score: "0.090134",
            ticker_sentiment_score: "0.102789",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Agilon Health Investigated by Block & Leviton For Potential Securities Law Violations; Investors Who Have Lost Money Are Encouraged to Contact the Firm - Agilon Health  ( NYSE:AGL ) ",
        url: "https://www.benzinga.com/pressreleases/24/01/g36514676/agilon-health-investigated-by-block-leviton-for-potential-securities-law-violations-investors-who-",
        time_published: "20240105T180943",
        authors: ["Globe Newswire"],
        summary:
          "BOSTON, Jan. 05, 2024 ( GLOBE NEWSWIRE ) -- Block & Leviton is investigating Agilon Health, Inc. AGL for potential securities law violations. Investors who have lost money in their Agilon Health investment should contact the firm to learn more about how they might recover those losses.",
        banner_image:
          "https://www.benzinga.com/next-assets/images/schema-image-default.png",
        source: "Benzinga",
        category_within_source: "News",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Life Sciences",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.929393",
          },
        ],
        overall_sentiment_score: -0.104066,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "AGL",
            relevance_score: "0.588876",
            ticker_sentiment_score: "-0.218514",
            ticker_sentiment_label: "Somewhat-Bearish",
          },
        ],
      },
      {
        title:
          "OceanFirst Financial Corp. Schedules Earnings Conference Call - OceanFirst Financial  ( NASDAQ:OCFC ) ",
        url: "https://www.benzinga.com/pressreleases/24/01/g36514616/oceanfirst-financial-corp-schedules-earnings-conference-call",
        time_published: "20240105T180654",
        authors: ["Globe Newswire"],
        summary:
          "RED BANK, N.J., Jan. 05, 2024 ( GLOBE NEWSWIRE ) -- OceanFirst Financial Corp. OCFC, the holding company for OceanFirst Bank, today announced that it will issue its earnings release for the quarter ended December 31, 2023 on Thursday, January 18, 2024 after the market close.",
        banner_image:
          "https://www.benzinga.com/next-assets/images/schema-image-default.png",
        source: "Benzinga",
        category_within_source: "News",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Economy - Monetary",
            relevance_score: "0.310843",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.858979",
          },
          {
            topic: "Earnings",
            relevance_score: "0.158519",
          },
          {
            topic: "Finance",
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: 0.099392,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "OCFC",
            relevance_score: "0.272029",
            ticker_sentiment_score: "0.087697",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "UAE market cap soars as top 16 national companies hit AED 2.7 trillion",
        url: "https://www.business-standard.com/world-news/uae-market-cap-soars-as-top-16-national-companies-hit-aed-2-7-trillion-124010501394_1.html",
        time_published: "20240105T180405",
        authors: ["ANI"],
        summary:
          "As of January 2024, the aggregate market capitalisation of the top 16 national companies listed on local exchanges stood at AED2.7 trillion. Driven by planned market expansions and existing valuations exceeding AED 3.6 trillion, this figure is anticipated to experience significant growth, ...",
        banner_image:
          "https://bsmedia.business-standard.com/_media/bs/img/article/2023-05/01/full/1682918677-7338.jpg?im=FitAndFill=(826,465)",
        source: "Business Standard",
        category_within_source: "GoogleRSS",
        source_domain: "www.business-standard.com",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.839681",
          },
        ],
        overall_sentiment_score: 0.314309,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [],
      },
      {
        title:
          "Glancy Prongay & Murray LLP Reminds Investors of Looming Deadline in the Class Action Lawsuit Against Illumina, Inc.  ( ILMN )  - Illumina  ( NASDAQ:ILMN ) ",
        url: "https://www.benzinga.com/pressreleases/24/01/g36514487/glancy-prongay-murray-llp-reminds-investors-of-looming-deadline-in-the-class-action-lawsuit-agains",
        time_published: "20240105T180103",
        authors: ["Globe Newswire"],
        summary: "LOS ANGELES, Jan. 05, 2024 ( GLOBE NEWSWIRE ) --",
        banner_image:
          "https://www.benzinga.com/next-assets/images/schema-image-default.png",
        source: "Benzinga",
        category_within_source: "News",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Life Sciences",
            relevance_score: "0.5",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.796627",
          },
          {
            topic: "Mergers & Acquisitions",
            relevance_score: "0.108179",
          },
          {
            topic: "Technology",
            relevance_score: "0.5",
          },
        ],
        overall_sentiment_score: 0.038814,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "META",
            relevance_score: "0.06697",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "ILMN",
            relevance_score: "0.59928",
            ticker_sentiment_score: "0.071099",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Mark Cuban says 'good businesses' embrace diversity: 'The loss of DEI-phobic companies is my gain'",
        url: "https://www.cnbc.com/2024/01/05/mark-cuban-on-diversity-the-loss-of-dei-phobic-companies-is-my-gain.html",
        time_published: "20240105T184432",
        authors: ["Ashton Jackson"],
        summary:
          "Mark Cuban has a different stance on diversity, equity and inclusion than some of his fellow billionaires. Here's why he says DEI matters in the workplace.",
        banner_image:
          "https://image.cnbcfm.com/api/v1/image/107352430-dumpling_daughter-Still-01.png?v=1703797598&w=750&h=422&vtcrop=y",
        source: "CNBC",
        category_within_source: "Top News",
        source_domain: "www.cnbc.com",
        topics: [
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.77141",
          },
        ],
        overall_sentiment_score: 0.214779,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "GOOG",
            relevance_score: "0.071784",
            ticker_sentiment_score: "-0.032643",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title: "OceanFirst Financial Corp. Schedules Earnings Conference Call",
        url: "https://www.globenewswire.com/news-release/2024/01/05/2804822/8280/en/OceanFirst-Financial-Corp-Schedules-Earnings-Conference-Call.html",
        time_published: "20240105T180600",
        authors: ["OceanFirst Financial Corp."],
        summary:
          "RED BANK, N.J., Jan. 05, 2024 ( GLOBE NEWSWIRE ) -- OceanFirst Financial Corp. ( NASDAQ:OCFC ) , the holding company for OceanFirst Bank, today announced that it will issue its earnings release for the quarter ended December 31, 2023 on Thursday, January 18, 2024 after the market close.",
        banner_image:
          "https://ml.globenewswire.com/Resource/Download/2bad282d-f47d-4669-8e84-2b829fd15b69",
        source: "GlobeNewswire",
        category_within_source: "n/a",
        source_domain: "www.globenewswire.com",
        topics: [
          {
            topic: "Economy - Monetary",
            relevance_score: "0.310843",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.77141",
          },
          {
            topic: "Earnings",
            relevance_score: "0.158519",
          },
          {
            topic: "Finance",
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: 0.101838,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "OCFC",
            relevance_score: "0.211191",
            ticker_sentiment_score: "0.073153",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title: "Why Shares in GE HealthCare Technologies Soared in December",
        url: "https://www.fool.com/investing/2024/01/05/why-shares-in-ge-healthcare-technologies-soared-in/",
        time_published: "20240105T182905",
        authors: ["Lee Samaha"],
        summary:
          "New product introductions encourage investors to believe this healthcare stock is headed for greatness.",
        banner_image:
          "https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F760329%2Fct-scan-1.jpg&op=resize&w=700",
        source: "Motley Fool",
        category_within_source: "n/a",
        source_domain: "www.fool.com",
        topics: [
          {
            topic: "Earnings",
            relevance_score: "0.614606",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.684621",
          },
          {
            topic: "Manufacturing",
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: 0.413342,
        overall_sentiment_label: "Bullish",
        ticker_sentiment: [
          {
            ticker: "SPGI",
            relevance_score: "0.095138",
            ticker_sentiment_score: "0.307583",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "GE",
            relevance_score: "0.767999",
            ticker_sentiment_score: "0.624487",
            ticker_sentiment_label: "Bullish",
          },
        ],
      },
      {
        title:
          "Albula Investment Fund sells Swan Energy's shares worth Rs 157 crore",
        url: "https://www.business-standard.com/markets/news/albula-investment-fund-sells-swan-energy-s-shares-worth-rs-157-crore-124010501313_1.html",
        time_published: "20240105T182056",
        authors: ["Press Trust of India"],
        summary:
          "Albula Investment Fund on Friday sold shares of Swan Energy for Rs 157 crore through an open market transaction. Bandhan Mutual Fund ( MF ) , Samco MF, BNP Paribas Arbitrage, Societe Generale, and Resonance Opportunities Fund, among others were the buyers of shares.",
        banner_image:
          "https://bsmedia.business-standard.com/_media/bs/img/article/2023-11/02/full/1698944883-1263.jpg?im=FitAndFill=(826,465)",
        source: "Business Standard",
        category_within_source: "GoogleRSS",
        source_domain: "www.business-standard.com",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.684621",
          },
        ],
        overall_sentiment_score: 0.296411,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "SCGLF",
            relevance_score: "0.204072",
            ticker_sentiment_score: "0.314309",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title: "Healthcare Champions Kick Off 2024 - Moderna  ( NASDAQ:MRNA ) ",
        url: "https://www.benzinga.com/general/24/01/36514593/healthcare-champions-kick-off-2024",
        time_published: "20240105T180623",
        authors: ["Upwallstreet"],
        summary:
          "Surprisingly, it is not Big Tech that kicked off 2024 but healtchare champions. Moderna Inc MRNA shares rose after Oppenheimer upgraded the stock due to the Covid-19 vaccine star possibly marketing as many as five products by 2026.",
        banner_image:
          "https://cdn.benzinga.com/files/medical-banner-with-doctor-wearing-goggles_1.jpg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "General",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Life Sciences",
            relevance_score: "0.5",
          },
          {
            topic: "Retail & Wholesale",
            relevance_score: "0.5",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.684621",
          },
          {
            topic: "Earnings",
            relevance_score: "0.938238",
          },
        ],
        overall_sentiment_score: 0.117668,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "MRNA",
            relevance_score: "0.410059",
            ticker_sentiment_score: "0.205317",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "WBA",
            relevance_score: "0.142565",
            ticker_sentiment_score: "-0.011521",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "BONK Meme Coin Leads Solana: Is NuggetRush The Next Crypto Gem In Ethereum?",
        url: "https://www.benzinga.com/markets/cryptocurrency/24/01/36514580/bonk-meme-coin-leads-solana-is-nuggetrush-the-next-crypto-gem-in-ethereum",
        time_published: "20240105T180549",
        authors: ["Locx Labs"],
        summary:
          "Crypto has been on a tear since October 2023. With Bitcoin prices rallying, other altcoins have also benefited. Among them, Solana ( SOL ) has gone up more than 10X, rising from as low as $10 to above $110. As SOL prices boomed, the Solana ecosystem blossomed as enterprising developers launched ...",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/screenshot_2024-01-05_at_11.05.21_pm.png?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Markets",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Finance",
            relevance_score: "1.0",
          },
          {
            topic: "Blockchain",
            relevance_score: "0.682689",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.684621",
          },
        ],
        overall_sentiment_score: 0.109104,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "COIN",
            relevance_score: "0.05654",
            ticker_sentiment_score: "0.211992",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "CRYPTO:BTC",
            relevance_score: "0.05654",
            ticker_sentiment_score: "0.049116",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "CRYPTO:ETH",
            relevance_score: "0.277118",
            ticker_sentiment_score: "0.207196",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "CRYPTO:SHIB",
            relevance_score: "0.112797",
            ticker_sentiment_score: "-0.207526",
            ticker_sentiment_label: "Somewhat-Bearish",
          },
          {
            ticker: "CRYPTO:DOGE",
            relevance_score: "0.16849",
            ticker_sentiment_score: "-0.037769",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Asahi to Begin Brewing Beer in U.S. Through Acquisition of WI-Based Octopi Brewing - Canada NewsWire",
        url: "https://www.newswire.ca/news-releases/asahi-to-begin-brewing-beer-in-u-s-through-acquisition-of-wi-based-octopi-brewing-807254287.html",
        time_published: "20240105T180000",
        authors: [],
        summary:
          "Asahi to Begin Brewing Beer in U.S. Through Acquisition of WI-Based Octopi Brewing Canada ...",
        banner_image: null,
        source: "Canada Newswire",
        category_within_source: "n/a",
        source_domain: "www.newswire.ca",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.684621",
          },
        ],
        overall_sentiment_score: 0.450452,
        overall_sentiment_label: "Bullish",
        ticker_sentiment: [
          {
            ticker: "ASBRF",
            relevance_score: "0.865692",
            ticker_sentiment_score: "0.694179",
            ticker_sentiment_label: "Bullish",
          },
        ],
      },
      {
        title:
          "A Look Into Bank Bradesco Inc's Price Over Earnings - Bank Bradesco  ( NYSE:BBD ) ",
        url: "https://www.benzinga.com/news/24/01/36514942/a-look-into-bank-bradesco-incs-price-over-earnings",
        time_published: "20240105T183015",
        authors: ["Benzinga Insights"],
        summary:
          "In the current session, the stock is trading at $3.45, after a 2.07% spike. Over the past month, Bank Bradesco Inc. BBD stock increased by 2.37%, and in the past year, by 25.10%.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2023/movers_image_18.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "News",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Earnings",
            relevance_score: "0.614606",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.459462",
          },
        ],
        overall_sentiment_score: 0.096274,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [],
      },
      {
        title:
          "A Closer Look at UnitedHealth Group's Options Market Dynamics - UnitedHealth Group  ( NYSE:UNH ) ",
        url: "https://www.benzinga.com/markets/options/24/01/36514508/a-closer-look-at-unitedhealth-groups-options-market-dynamics",
        time_published: "20240105T180146",
        authors: ["Benzinga Insights"],
        summary:
          "Financial giants have made a conspicuous bearish move on UnitedHealth Group. Our analysis of options history for UnitedHealth Group UNH revealed 17 unusual trades. Delving into the details, we found 35% of traders were bullish, while 64% showed bearish tendencies.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2023/movers_image_0.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Markets",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Life Sciences",
            relevance_score: "0.5",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.459462",
          },
          {
            topic: "Earnings",
            relevance_score: "0.158519",
          },
          {
            topic: "Finance",
            relevance_score: "0.5",
          },
        ],
        overall_sentiment_score: 0.132754,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "HCSG",
            relevance_score: "0.093289",
            ticker_sentiment_score: "0.176017",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "UNH",
            relevance_score: "0.758753",
            ticker_sentiment_score: "0.313067",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "TecCrypto: Revolutionizing Home-Based Earning with State-of-the-Art Cloud Mining Solutions",
        url: "https://www.benzinga.com/pressreleases/24/01/g36514765/teccrypto-revolutionizing-home-based-earning-with-state-of-the-art-cloud-mining-solutions",
        time_published: "20240105T181500",
        authors: ["Globe Newswire"],
        summary:
          "London, UK, Jan. 05, 2024 ( GLOBE NEWSWIRE ) -- TecCrypto, a pioneering force in cloud mining, unveils its cutting-edge platform for 2024, designed to transform how individuals earn from home through cryptocurrency mining.",
        banner_image:
          "https://www.benzinga.com/next-assets/images/schema-image-default.png",
        source: "Benzinga",
        category_within_source: "Markets",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Earnings",
            relevance_score: "0.158519",
          },
          {
            topic: "Blockchain",
            relevance_score: "0.682689",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.413559",
          },
        ],
        overall_sentiment_score: 0.389974,
        overall_sentiment_label: "Bullish",
        ticker_sentiment: [
          {
            ticker: "AWON",
            relevance_score: "0.053629",
            ticker_sentiment_score: "0.111712",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "CRYPTO:BTC",
            relevance_score: "0.498827",
            ticker_sentiment_score: "0.495178",
            ticker_sentiment_label: "Bullish",
          },
          {
            ticker: "CRYPTO:LTC",
            relevance_score: "0.107016",
            ticker_sentiment_score: "0.120079",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "How Is The Market Feeling About AutoZone? - AutoZone  ( NYSE:AZO ) ",
        url: "https://www.benzinga.com/short-sellers/24/01/36515259/how-is-the-market-feeling-about-autozone",
        time_published: "20240105T184522",
        authors: ["Benzinga Insights"],
        summary:
          "AutoZone's AZO short percent of float has fallen 22.4% since its last report. The company recently reported that it has 369 thousand shares sold short, which is 2.39% of all regular shares that are available for trading. Based on its trading volume, it would take traders 2.0 days to cover their ...",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2023/movers_image_1.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Trading",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Retail & Wholesale",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.365926",
          },
        ],
        overall_sentiment_score: 0.241618,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "AZO",
            relevance_score: "0.224903",
            ticker_sentiment_score: "0.085754",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          " ( WMT )  - Analyzing Walmart's Short Interest - Walmart  ( NYSE:WMT ) ",
        url: "https://www.benzinga.com/short-sellers/24/01/36515258/wmt-analyzing-walmarts-short-interest",
        time_published: "20240105T184518",
        authors: ["Benzinga Insights"],
        summary:
          "Walmart's WMT short percent of float has risen 27.03% since its last report. The company recently reported that it has 13.35 million shares sold short, which is 0.94% of all regular shares that are available for trading. Based on its trading volume, it would take traders 1.22 days to cover their ...",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2023/movers_image_0.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Trading",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Retail & Wholesale",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.365926",
          },
        ],
        overall_sentiment_score: 0.267375,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "WMT",
            relevance_score: "0.224903",
            ticker_sentiment_score: "0.158881",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "How Is The Market Feeling About Public Service Enterprise? - Public Service Enterprise  ( NYSE:PEG ) ",
        url: "https://www.benzinga.com/short-sellers/24/01/36515257/how-is-the-market-feeling-about-public-service-enterprise",
        time_published: "20240105T184512",
        authors: ["Benzinga Insights"],
        summary:
          "Public Service Enterprise's PEG short percent of float has fallen 8.44% since its last report. The company recently reported that it has 9.09 million shares sold short, which is 2.06% of all regular shares that are available for trading.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2023/movers_image_1.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Trading",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Energy & Transportation",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.365926",
          },
        ],
        overall_sentiment_score: 0.237013,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "PEG",
            relevance_score: "0.218817",
            ticker_sentiment_score: "0.080451",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Looking At KE Holdings's Recent Unusual Options Activity - KE Holdings  ( NYSE:BEKE ) ",
        url: "https://www.benzinga.com/markets/options/24/01/36514509/looking-at-ke-holdingss-recent-unusual-options-activity",
        time_published: "20240105T180152",
        authors: ["Benzinga Insights"],
        summary:
          "Investors with significant funds have taken a bullish position in KE Holdings BEKE, a development that retail traders should be aware of. This was brought to our attention today through our monitoring of publicly accessible options data at Benzinga.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2023/movers_image_5.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Markets",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Earnings",
            relevance_score: "0.158519",
          },
          {
            topic: "Real Estate & Construction",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.316726",
          },
        ],
        overall_sentiment_score: 0.126824,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "BEKE",
            relevance_score: "0.686288",
            ticker_sentiment_score: "0.18218",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "TCTZF",
            relevance_score: "0.089129",
            ticker_sentiment_score: "0.029024",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Ron Insana: Here's why 2024 just might be a 'normal' year for the U.S. economy",
        url: "https://www.cnbc.com/2024/01/05/ron-insana-heres-why-2024-just-might-be-a-normal-year-for-the-us-economy.html",
        time_published: "20240105T181223",
        authors: ["Ron Insana"],
        summary:
          "Ordinary times may be ahead for the U.S. markets and economy.",
        banner_image:
          "https://image.cnbcfm.com/api/v1/image/107352728-1703868985448-107352728-1703868802006-gettyimages-1892490186-lastday145448_x7umz8c9.jpg?v=1704475190&w=1920&h=1080",
        source: "CNBC",
        category_within_source: "Top News",
        source_domain: "www.cnbc.com",
        topics: [
          {
            topic: "Economy - Monetary",
            relevance_score: "0.576289",
          },
          {
            topic: "Real Estate & Construction",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.310843",
          },
        ],
        overall_sentiment_score: -0.079559,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "RDFN",
            relevance_score: "0.055236",
            ticker_sentiment_score: "-0.064854",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Class 1 Nickel and Technologies Ltd. Announces Private Placement",
        url: "https://www.globenewswire.com/news-release/2024/01/05/2804818/0/en/Class-1-Nickel-and-Technologies-Ltd-Announces-Private-Placement.html",
        time_published: "20240105T175100",
        authors: ["Class 1 Nickel and Technologies Limited"],
        summary:
          'TORONTO, Jan. 05, 2024 ( GLOBE NEWSWIRE ) -- Class 1 Nickel and Technologies Ltd. ( CSE: NICO/OTCQB: NICLF ) ( "Class 1 Nickel" or the "Company" ) is pleased to announce that it proposes to complete a non-brokered private placement ( the "Private Placement" ) pursuant to which it will issue ...',
        banner_image:
          "https://ml.globenewswire.com/Resource/Download/3c839ca6-77b4-42d1-a5e5-fcf79d3b183f",
        source: "GlobeNewswire",
        category_within_source: "n/a",
        source_domain: "www.globenewswire.com",
        topics: [
          {
            topic: "Economy - Monetary",
            relevance_score: "0.158519",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.310843",
          },
        ],
        overall_sentiment_score: 0.135452,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "MALRF",
            relevance_score: "0.095899",
            ticker_sentiment_score: "0.114752",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Domino's Pizza, Restaurant Brands, Sweetgreen In This Analyst's 2024 Top Picks: What's Cooking In For Other Restaurant Companies? - Yum Brands  ( NYSE:YUM ) , Restaurant Brands Intl  ( NYSE:QSR ) , Papa John's International  ( NASDAQ:PZZA ) , Sweetgreen  ( NYSE:SG ) ",
        url: "https://www.benzinga.com/analyst-ratings/analyst-color/24/01/36513604/dominos-pizza-restaurant-brands-sweetgreen-in-this-analysts-2024-top-picks-whats-co",
        time_published: "20240105T182459",
        authors: ["Shivani Kumaresan"],
        summary:
          "Oppenheimer analyst Brian Bittner has provided the analysis on some of the quick service restaurant chains. The analyst believes YUM represents a diversified business model that drives superior growth, yet is armed with blue-chip-like resiliency.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/dpz_co.png?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "General",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Earnings",
            relevance_score: "0.938793",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.266143",
          },
        ],
        overall_sentiment_score: 0.306294,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [],
      },
      {
        title:
          "Glancy Prongay & Murray LLP Reminds Investors of Looming Deadline in the Class Action Lawsuit Against NuScale Power Corporation  ( SMR )  - NuScale Power  ( NYSE:SMR ) ",
        url: "https://www.benzinga.com/pressreleases/24/01/g36514334/glancy-prongay-murray-llp-reminds-investors-of-looming-deadline-in-the-class-action-lawsuit-agains",
        time_published: "20240105T175605",
        authors: ["Globe Newswire"],
        summary: "LOS ANGELES, Jan. 05, 2024 ( GLOBE NEWSWIRE ) --",
        banner_image:
          "https://www.benzinga.com/next-assets/images/schema-image-default.png",
        source: "Benzinga",
        category_within_source: "News",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.214378",
          },
          {
            topic: "Mergers & Acquisitions",
            relevance_score: "0.108179",
          },
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
          {
            topic: "Blockchain",
            relevance_score: "0.158519",
          },
        ],
        overall_sentiment_score: 0.096789,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "META",
            relevance_score: "0.067727",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "SMR",
            relevance_score: "0.201244",
            ticker_sentiment_score: "0.063063",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Glancy Prongay & Murray LLP Reminds Investors of Looming Deadline in the Class Action Lawsuit Against The Beauty Health Company  ( SKIN )  - Beauty Health  ( NASDAQ:SKIN ) ",
        url: "https://www.benzinga.com/pressreleases/24/01/g36514276/glancy-prongay-murray-llp-reminds-investors-of-looming-deadline-in-the-class-action-lawsuit-agains",
        time_published: "20240105T175344",
        authors: ["Globe Newswire"],
        summary: "LOS ANGELES, Jan. 05, 2024 ( GLOBE NEWSWIRE ) --",
        banner_image:
          "https://www.benzinga.com/next-assets/images/schema-image-default.png",
        source: "Benzinga",
        category_within_source: "News",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.214378",
          },
          {
            topic: "Mergers & Acquisitions",
            relevance_score: "0.108179",
          },
          {
            topic: "Real Estate & Construction",
            relevance_score: "0.5",
          },
          {
            topic: "Technology",
            relevance_score: "0.5",
          },
        ],
        overall_sentiment_score: 0.103616,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "META",
            relevance_score: "0.056275",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "SKIN",
            relevance_score: "0.167709",
            ticker_sentiment_score: "0.093419",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title: "Synopsys closes in on $35 billion acquisition of Ansys: report",
        url: "https://www.marketwatch.com/story/synopsys-closes-in-on-35-billion-acquisition-of-ansys-report-4d395276",
        time_published: "20240105T182800",
        authors: ["Jon Swartz"],
        summary:
          "Synopsys Inc. is in advanced talks to acquire Ansys Inc. for about $35 billion in a $400 per share cash-and-stock deal that could be one of the first big tech transactions of the new year, according to a Wall Street Journal report Friday.",
        banner_image: "https://images.mktw.net/im-836982/social",
        source: "MarketWatch",
        category_within_source: "Top Stories",
        source_domain: "www.marketwatch.com",
        topics: [
          {
            topic: "Mergers & Acquisitions",
            relevance_score: "0.158519",
          },
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.161647",
          },
        ],
        overall_sentiment_score: 0.161052,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "SNPS",
            relevance_score: "0.837089",
            ticker_sentiment_score: "0.247593",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "CDNS",
            relevance_score: "0.514619",
            ticker_sentiment_score: "0.132355",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "ANSS",
            relevance_score: "0.963653",
            ticker_sentiment_score: "0.258788",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "Retailers could suffer 'perfect storm' of Red Sea, Panama Canal disruption",
        url: "https://www.marketwatch.com/story/retailers-could-suffer-perfect-storm-of-red-sea-and-panama-canal-disruption-says-logistics-expert-93027161",
        time_published: "20240105T182300",
        authors: ["James Rogers"],
        summary:
          "Global supply chains are under pressure from the Houthi attacks in the Red Sea and the Panama Canal drought.",
        banner_image: "https://images.mktw.net/im-93650097/social",
        source: "MarketWatch",
        category_within_source: "Top Stories",
        source_domain: "www.marketwatch.com",
        topics: [
          {
            topic: "Retail & Wholesale",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.161647",
          },
        ],
        overall_sentiment_score: -0.091486,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "TGT",
            relevance_score: "0.083541",
            ticker_sentiment_score: "-0.047984",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "NXGPF",
            relevance_score: "0.041828",
            ticker_sentiment_score: "-0.335202",
            ticker_sentiment_label: "Somewhat-Bearish",
          },
          {
            ticker: "WMT",
            relevance_score: "0.125025",
            ticker_sentiment_score: "-0.05399",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "CRYPTO:NXT",
            relevance_score: "0.041828",
            ticker_sentiment_score: "-0.335202",
            ticker_sentiment_label: "Somewhat-Bearish",
          },
        ],
      },
      {
        title:
          "Why StoneCo Shares Are Trading Higher Friday - StoneCo  ( NASDAQ:STNE ) ",
        url: "https://www.benzinga.com/markets/equities/24/01/36513440/why-stoneco-shares-are-trading-higher-friday",
        time_published: "20240105T180453",
        authors: ["Nabaparna Bhattacharya"],
        summary:
          "StoneCo Ltd. STNE shares are trading higher after the company said it received the Financeira License from the Brazilian Central Bank. The license is organized as a Sociedade de Crédito, Financiamento e Investimento ( SCFI ) , the company said in a press release.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/marketup.shutterstock.jpg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Markets",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Economy - Monetary",
            relevance_score: "0.158519",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.161647",
          },
          {
            topic: "Earnings",
            relevance_score: "0.158519",
          },
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: 0.401142,
        overall_sentiment_label: "Bullish",
        ticker_sentiment: [
          {
            ticker: "STNE",
            relevance_score: "0.773597",
            ticker_sentiment_score: "0.386375",
            ticker_sentiment_label: "Bullish",
          },
        ],
      },
      {
        title:
          "Bill To Legalize Cannabis Cafés In CA Returns, SC Sen. Fights To Invalidate 'Smell Of Weed' And More",
        url: "https://www.benzinga.com/markets/cannabis/24/01/36514532/bill-to-legalize-cannabis-caf-s-in-ca-returns-sc-sen-fights-to-invalidate-smell-of-weed-and-more",
        time_published: "20240105T180356",
        authors: ["Jelena Martinovic"],
        summary:
          "A measure aimed at legalizing cannabis cafés in California is being brought back by Assemblymember Matt Haney. Bill 374, which Gov. Gavin Newsom ( D ) vetoed in October, sought to allow cannabis stores to operate traditional kitchens statewide and host events on their premises.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/clem-onojeghuo-zlABb6Gke24-unsplash.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "News",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.161647",
          },
        ],
        overall_sentiment_score: 0.088512,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [],
      },
      {
        title:
          "Weight-Loss Drug Boom: Philanthropy Powerhouse Emerges As Lilly Endowment Comes Closer To Gates Foundation - Eli Lilly  ( NYSE:LLY ) ",
        url: "https://www.benzinga.com/general/biotech/24/01/36514235/weight-loss-drug-boom-philanthropy-powerhouse-emerges-as-lilly-endowment-comes-closer-to-gates-fo",
        time_published: "20240105T175137",
        authors: ["Vandana Singh"],
        summary:
          "The Lilly Endowment, the principal stakeholder in pharmaceutical giant Eli Lilly & Co. LLY, has witnessed an exceptional surge in its assets, reaching an estimated $60 billion amid the soaring success of the company's weight-loss drug, Mounjaro, which bolstered Eli Lilly's stocks by almost 60% ...",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/Ozempic-and-other-drugs-for-weight-loss.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "General",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Life Sciences",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.161647",
          },
        ],
        overall_sentiment_score: 0.210521,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "LLY",
            relevance_score: "0.868543",
            ticker_sentiment_score: "0.34658",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "QDOSE® Multi-purpose Voxel Dosimetry Software  ( Personalized Dosimetry in Molecular Radiotherapy )  Receives USFDA 510 ( k )  Clearance",
        url: "https://www.newswire.ca/news-releases/qdose-r-multi-purpose-voxel-dosimetry-software-personalized-dosimetry-in-molecular-radiotherapy-receives-usfda-510-k-clearance-870570174.html",
        time_published: "20240105T183500",
        authors: ["Versant Medical Physics & Radiation Safety"],
        summary:
          "QDOSE® Multi-purpose Voxel Dosimetry Software ( Personalized Dosimetry in Molecular Radiotherapy ) Receives ... Canada ...",
        banner_image:
          "https://mma.prnewswire.com/media/2312013/Versant_Medical_Physics_and_Radiation_Safety_Logo.jpg?p=facebook",
        source: "Canada Newswire",
        category_within_source: "n/a",
        source_domain: "www.newswire.ca",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.158519",
          },
        ],
        overall_sentiment_score: 0.405166,
        overall_sentiment_label: "Bullish",
        ticker_sentiment: [],
      },
      {
        title:
          '"Top Pick for 2024": Analyst Bullish On Phathom Pharmaceuticals On Voquezna Launch In Erosive GERD, Projecting $55.6M In Sales - Phathom Pharmaceuticals  ( NASDAQ:PHAT ) ',
        url: "https://www.benzinga.com/analyst-ratings/analyst-color/24/01/36514112/top-pick-for-2024-analyst-bullish-on-phathom-pharmaceuticals-on-voquezna-launch-in-",
        time_published: "20240105T185240",
        authors: ["Nabaparna Bhattacharya"],
        summary:
          'Needham analyst Joseph Stringer reiterated a Buy rating on Phathom Pharmaceuticals, Inc. PHAT, raising the price target to $26 from $23. "PHAT is our top pick for 2024", the analyst notes, adding it to the Needham Conviction List, replacing Vaxcyte, Inc. PCVX.',
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/phat_co.png?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "General",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Life Sciences",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.108179",
          },
        ],
        overall_sentiment_score: 0.083596,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "PCVX",
            relevance_score: "0.310843",
            ticker_sentiment_score: "0.190585",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "PHAT",
            relevance_score: "0.769861",
            ticker_sentiment_score: "0.315435",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "Immunocore's Pipeline Is Among The Strongest In Broader Biotech Universe: Analyst - Immunocore Hldgs  ( NASDAQ:IMCR ) ",
        url: "https://www.benzinga.com/markets/equities/24/01/36514373/immunocores-pipeline-is-among-the-strongest-in-broader-biotech-universe-analyst",
        time_published: "20240105T184728",
        authors: ["Nabaparna Bhattacharya"],
        summary:
          "H.C. Wainwright analyst Patrick R. Trucchio reiterated a Buy rating on Immunocore Holdings Plc IMCR with a price target of $90. On January 5, Immunocore announced multiple near-term data readouts are expected and expanded the pipeline to autoimmune disease indications, both clear positives for ...",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/imcr.png?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "General",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Life Sciences",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.108179",
          },
        ],
        overall_sentiment_score: 0.265244,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "IMCR",
            relevance_score: "0.915764",
            ticker_sentiment_score: "0.43028",
            ticker_sentiment_label: "Bullish",
          },
        ],
      },
      {
        title:
          "If You Invested $1000 In This Stock 5 Years Ago, You Would Have $2,200 Today - Caterpillar  ( NYSE:CAT ) ",
        url: "https://www.benzinga.com/news/24/01/36514947/if-you-invested-1000-in-this-stock-5-years-ago-you-would-have-2-200-today",
        time_published: "20240105T183022",
        authors: ["Benzinga Insights"],
        summary:
          "Caterpillar CAT has outperformed the market over the past 5 years by 4.59% on an annualized basis producing an average annual return of 17.29%. Currently, Caterpillar has a market capitalization of $145.81 billion.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2023/valuestock_image_3.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "News",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.108179",
          },
        ],
        overall_sentiment_score: 0.160819,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "CAT",
            relevance_score: "0.983605",
            ticker_sentiment_score: "0.387251",
            ticker_sentiment_label: "Bullish",
          },
        ],
      },
      {
        title:
          "$100 Invested In This Stock 10 Years Ago Would Be Worth $300 Today - Xylem  ( NYSE:XYL ) ",
        url: "https://www.benzinga.com/news/24/01/36514943/100-invested-in-this-stock-10-years-ago-would-be-worth-300-today",
        time_published: "20240105T183017",
        authors: ["Benzinga Insights"],
        summary:
          "Xylem XYL has outperformed the market over the past 10 years by 2.61% on an annualized basis producing an average annual return of 12.39%. Currently, Xylem has a market capitalization of $26.97 billion.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2023/valuestock_image_0.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "News",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.108179",
          },
        ],
        overall_sentiment_score: 0.160819,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "XYL",
            relevance_score: "0.983605",
            ticker_sentiment_score: "0.387251",
            ticker_sentiment_label: "Bullish",
          },
        ],
      },
      {
        title:
          "Meta's AI boss turned down Google director job over low pay, didn't want to move to California",
        url: "https://cointelegraph.com/news/meta-artificial-intelligence-ai-boss-turned-down-google-director-job-over-low-pay-california",
        time_published: "20240105T183000",
        authors: ["Tristan Greene"],
        summary:
          '"Obviously, the stock option package would have ended up stratospheric," lamented Meta\'s chief AI scientist, Yann LeCun.',
        banner_image:
          "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2024-01/9afcf399-e9aa-4a8e-89a2-ff304aaedd0e.jpg",
        source: "Cointelegraph",
        category_within_source: "n/a",
        source_domain: "cointelegraph.com",
        topics: [
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.108179",
          },
        ],
        overall_sentiment_score: 0.082374,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "GOOG",
            relevance_score: "0.690822",
            ticker_sentiment_score: "0.052155",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "AI 'Is Going To Be The Next Goldrush': Analyst Breaks Down Huge Artificial Intelligence Opportunities In 2024 - Apple  ( NASDAQ:AAPL ) , Adobe  ( NASDAQ:ADBE ) ",
        url: "https://www.benzinga.com/trading-ideas/long-ideas/24/01/36514761/ai-is-going-to-be-the-next-goldrush-analyst-breaks-down-huge-artificial-intelligence-opp",
        time_published: "20240105T181427",
        authors: ["Neil Dennis"],
        summary:
          "Artificial intelligence ( AI ) is rapidly advancing, with each of the major tech companies participating in some capacity, and the opportunities are not monopolized by the Magnificent Seven.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/Ivan-Feinseth.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Trading",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "IPO",
            relevance_score: "0.158519",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.108179",
          },
          {
            topic: "Manufacturing",
            relevance_score: "0.5",
          },
          {
            topic: "Technology",
            relevance_score: "0.5",
          },
        ],
        overall_sentiment_score: 0.26895,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "MSFT",
            relevance_score: "0.178459",
            ticker_sentiment_score: "0.122414",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "GOOG",
            relevance_score: "0.089797",
            ticker_sentiment_score: "0.088024",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "NVDA",
            relevance_score: "0.178459",
            ticker_sentiment_score: "0.137906",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "AAPL",
            relevance_score: "0.178459",
            ticker_sentiment_score: "0.137906",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "INTC",
            relevance_score: "0.264897",
            ticker_sentiment_score: "0.233559",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "ADBE",
            relevance_score: "0.178459",
            ticker_sentiment_score: "-0.268663",
            ticker_sentiment_label: "Somewhat-Bearish",
          },
          {
            ticker: "MDB",
            relevance_score: "0.178459",
            ticker_sentiment_score: "0.080894",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Why Castor Maritime Shares Are Gaining Friday - Castor Maritime  ( NASDAQ:CTRM ) ",
        url: "https://www.benzinga.com/markets/equities/24/01/36513623/why-castor-maritime-shares-are-gaining-friday",
        time_published: "20240105T181226",
        authors: ["Nabaparna Bhattacharya"],
        summary:
          "Castor Maritime Inc. CTRM on Friday said it inked a pact to sell M/V Magic Venus, a 2010-built Kamsarmax bulk carrier vessel, for a price of $17.5 million. The pact was formed by the company with an entity owned by a family member of the company's chairman, CEO and CFO.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/shutterstock_2193275733.jpg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "General",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Energy & Transportation",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.108179",
          },
        ],
        overall_sentiment_score: 0.217263,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "CTRM",
            relevance_score: "0.686739",
            ticker_sentiment_score: "0.33259",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title: "How Can You Tell If Weed Is Still Fresh, Safe And Tastes Good?",
        url: "https://www.benzinga.com/markets/cannabis/24/01/36514720/how-long-is-weed-good-for-how-can-you-tell-if-its-still-fresh",
        time_published: "20240105T181151",
        authors: ["El Planteo"],
        summary:
          "Imagine a resinous fruit, a cloud of smoke: a symbol of flourishing nature. For cannabis enthusiasts, a pivotal question often arises: How can I ensure my weed is fresh? Adopting a responsible stance, with a focus on harm reduction, several factors need consideration when obtaining high-quality ...",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/is_your_weed_fresh.png?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Markets",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.108179",
          },
        ],
        overall_sentiment_score: 0.071541,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [],
      },
      {
        title:
          "$100 Invested In SBA Comms 20 Years Ago Would Be Worth This Much Today - SBA Comms  ( NASDAQ:SBAC ) ",
        url: "https://www.benzinga.com/news/24/01/36514396/100-invested-in-sba-comms-20-years-ago-would-be-worth-this-much-today",
        time_published: "20240105T180023",
        authors: ["Benzinga Insights"],
        summary:
          "SBA Comms SBAC has outperformed the market over the past 20 years by 13.83% on an annualized basis producing an average annual return of 21.21%. Currently, SBA Comms has a market capitalization of $26.53 billion.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2023/valuestock_image_3.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Trading",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.108179",
          },
        ],
        overall_sentiment_score: 0.158543,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [],
      },
      {
        title:
          "If You Invested $1000 In This Stock 15 Years Ago, You Would Have $59,000 Today - Cadence Design Sys  ( NASDAQ:CDNS ) ",
        url: "https://www.benzinga.com/news/24/01/36514390/if-you-invested-1000-in-this-stock-15-years-ago-you-would-have-59-000-today",
        time_published: "20240105T180019",
        authors: ["Benzinga Insights"],
        summary:
          "Cadence Design Sys CDNS has outperformed the market over the past 15 years by 19.77% on an annualized basis producing an average annual return of 31.64%. Currently, Cadence Design Sys has a market capitalization of $69.63 billion.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2023/valuestock_image_3.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Trading",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.108179",
          },
        ],
        overall_sentiment_score: 0.156267,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [],
      },
      {
        title:
          "Goldman Sachs' Unusual Bonus Tactic May Lead To An Unexpected Exit Wave - Goldman Sachs Gr  ( NYSE:GS ) ",
        url: "https://www.benzinga.com/government/24/01/36507712/goldman-sachs-unusual-bonus-tactic-may-lead-to-an-unexpected-exit-wave",
        time_published: "20240105T175118",
        authors: ["Anusuya Lahiri"],
        summary:
          'Goldman Sachs Group, Inc GS employees reportedly feel apprehensive at the beginning of 2024, following a tumultuous previous year that began with a significant layoff dubbed "David\'s Demolition Day." CEO David Solomon, however, is not expected to conduct mass firings this January.',
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/goldmansachsheadquarters.jpg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "News",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Finance",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.108179",
          },
        ],
        overall_sentiment_score: 0.315676,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "GS",
            relevance_score: "0.432291",
            ticker_sentiment_score: "0.383064",
            ticker_sentiment_label: "Bullish",
          },
        ],
      },
    ],
  };

  const newsData2 = [
    {
      category: "top news",
      datetime: 1704484585,
      headline:
        "Microsoft, OpenAI sued for copyright infringement by non-fiction book authors in class action claim",
      id: 7331916,
      image:
        "https://image.cnbcfm.com/api/v1/image/107336444-1700489877002-107336444-1700489069138-107336444-1700488990843-gettyimages-1778707567-js1_7818_bjti3i4c.jpg?v=1700489892&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "The new copyright infringement lawsuit against Microsoft and OpenAI comes a week after The New York Times filed a similer complaint in New York.",
      url: "https://www.cnbc.com/2024/01/05/microsoft-openai-sued-over-copyright-infringement-by-authors.html",
    },
    {
      category: "top news",
      datetime: 1704484140,
      headline:
        "New York AG seeks bigger $370 million fine from Donald Trump, lifetime ban from commercial real estate",
      id: 7331914,
      image: "https://images.mktw.net/im-78686586/social",
      related: "",
      source: "MarketWatch",
      summary:
        "New York Attorney General Letitia James asked a Manhattan judge on Friday for a bigger $370 million penalty and harsh sanctions against former President Donald Trump and his real-estate business.",
      url: "https://www.marketwatch.com/story/new-york-ag-seeks-bigger-370-million-fine-from-donald-trump-lifetime-ban-from-commercial-real-estate-9077b344",
    },
    {
      category: "top news",
      datetime: 1704483540,
      headline:
        "This is why the S&P 500 can be expected to continue to outperform small-cap stocks",
      id: 7331904,
      image: "https://images.mktw.net/im-06853048/social",
      related: "",
      source: "MarketWatch",
      summary:
        'Also, surviving financial disaster, a gold surprise, a shocking "hottest" housing market and the continuing adventures of the Moneyist.',
      url: "https://www.marketwatch.com/story/this-is-why-the-s-p-500-can-be-expected-to-continue-to-outperform-small-cap-stocks-f78c8b87",
    },
    {
      category: "top news",
      datetime: 1704483420,
      headline:
        "Department of Justice edges toward antitrust case vs. Apple: report",
      id: 7331905,
      image: "https://images.mktw.net/im-18123347/social",
      related: "",
      source: "MarketWatch",
      summary: "",
      url: "https://www.marketwatch.com/story/department-of-justice-edges-toward-antitrust-case-vs-apple-report-cd49165e",
    },
    {
      category: "top news",
      datetime: 1704482640,
      headline:
        "JPMorgan, Bank of America lead earnings parade of U.S. largest banks to cap off tough year",
      id: 7331900,
      image: "https://images.mktw.net/im-86720285/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Citigroup, Wells Fargo, Morgan Stanley and Goldman all on deck amid mostly lower profit expectations during Q4.",
      url: "https://www.marketwatch.com/story/jpmorgan-bank-of-america-lead-earnings-parade-of-u-s-largest-banks-to-cap-off-tough-year-5d4233e1",
    },
    {
      category: "top news",
      datetime: 1704482340,
      headline:
        "Reddit, Shein and Stripe may lead a revived IPO market in 2024",
      id: 7331901,
      image: "https://images.mktw.net/im-56550068/social",
      related: "",
      source: "MarketWatch",
      summary:
        "After two years with few deals, the IPO market is expected to bounce back this year.",
      url: "https://www.marketwatch.com/story/reddit-shein-and-stripe-may-lead-a-revived-ipo-market-in-2024-9ca8693c",
    },
    {
      category: "top news",
      datetime: 1704482160,
      headline:
        "Gold’s moves show ‘Fed policy trumps geopolitics’ in the futures market",
      id: 7331902,
      image: "https://images.mktw.net/im-55682343/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Gold futures fall on Friday to post a weekly loss for the first time in a month.",
      url: "https://www.marketwatch.com/story/golds-moves-show-fed-policy-trumps-geopolitics-in-the-futures-market-0e000f4e",
    },
    {
      category: "top news",
      datetime: 1704482100,
      headline: "This will not save Social Security",
      id: 7331903,
      image: "https://images.mktw.net/im-06854438/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Removing Social Security’s taxable wage cap doesn’t help very much",
      url: "https://www.marketwatch.com/story/this-will-not-save-social-security-a1d62c01",
    },
    {
      category: "top news",
      datetime: 1704481800,
      headline: "This is part of the recipe for a good retirement",
      id: 7331894,
      image: "https://images.mktw.net/im-25972477/social",
      related: "",
      source: "MarketWatch",
      summary: "Do you love to talk about your career? Or do you keep mum?",
      url: "https://www.marketwatch.com/story/this-is-part-of-the-recipe-for-a-good-retirement-a0d1e6d0",
    },
    {
      category: "top news",
      datetime: 1704481500,
      headline: "What are the rules for taking a 401(k) hardship distribution?",
      id: 7331895,
      image: "https://images.mktw.net/im-69348265/social",
      related: "",
      source: "MarketWatch",
      summary: "Plans are not required to allow hardship withdrawals",
      url: "https://www.marketwatch.com/story/what-are-the-rules-for-taking-a-401-k-hardship-distribution-530fbe01",
    },
    {
      category: "top news",
      datetime: 1704481200,
      headline:
        "News and analysis for those planning for or living in retirement",
      id: 7331896,
      image: "https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png",
      related: "",
      source: "MarketWatch",
      summary: "Retirement news and analysis",
      url: "https://www.marketwatch.com/story/news-and-analysis-for-those-planning-for-or-living-in-retirement-522a6c1b",
    },
    {
      category: "top news",
      datetime: 1704480096,
      headline:
        "Constellation Brands posts strong results in beer, overshadowing misses elsewhere",
      id: 7331891,
      image:
        "https://image.cnbcfm.com/api/v1/image/104204796-GettyImages-478989028.jpg?v=1696548176&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "Fortunately, beer is doing well enough to offset the horrendous performance in wine and spirits.",
      url: "https://www.cnbc.com/2024/01/05/constellation-brands-posts-strong-results-in-beer-misses-elsewhere.html",
    },
    {
      category: "top news",
      datetime: 1704479700,
      headline:
        "Synopsys closes in on $35 billion acquisition of Ansys: report",
      id: 7331888,
      image: "https://images.mktw.net/im-836982/social",
      related: "",
      source: "MarketWatch",
      summary: "",
      url: "https://www.marketwatch.com/story/synopsys-closes-in-on-35-billion-acquisition-of-ansys-report-4d395276",
    },
    {
      category: "top news",
      datetime: 1704478980,
      headline:
        "Retailers could suffer ‘perfect storm’ of Red Sea and Panama Canal disruption, says logistics expert",
      id: 7331881,
      image: "https://images.mktw.net/im-93650097/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Global supply chains are under pressure from the Houthi attacks in the Red Sea and the Panama Canal drought.",
      url: "https://www.marketwatch.com/story/retailers-could-suffer-perfect-storm-of-red-sea-and-panama-canal-disruption-says-logistics-expert-93027161",
    },
    {
      category: "top news",
      datetime: 1704478343,
      headline:
        "Ron Insana: Here’s why 2024 just might be a ‘normal’ year for the U.S. economy",
      id: 7331876,
      image:
        "https://image.cnbcfm.com/api/v1/image/107352728-1703868985448-107352728-1703868802006-gettyimages-1892490186-lastday145448_x7umz8c9.jpg?v=1704475190&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary: "Ordinary times may be ahead for the U.S. markets and economy.",
      url: "https://www.cnbc.com/2024/01/05/ron-insana-heres-why-2024-just-might-be-a-normal-year-for-the-us-economy.html",
    },
    {
      category: "top news",
      datetime: 1704477480,
      headline:
        "Canoo’s stock sinks toward a record low, even as Wedbush sees 1,800% rally potential",
      id: 7331873,
      image: "https://images.mktw.net/im-25504651/social",
      related: "",
      source: "MarketWatch",
      summary:
        'Canoo\'s stock continued into record-low territory Friday, even after Wedbush analyst Dan Ives recommended investing in the electric-vehicle maker, which he said has a "golden opportunity" to benefit in the current last-mile delivery market.',
      url: "https://www.marketwatch.com/story/canoos-stock-sinks-toward-a-record-low-even-as-wedbush-sees-1-800-rally-potential-d0990a94",
    },
    {
      category: "top news",
      datetime: 1704475800,
      headline:
        "King dollar makes a comeback: buck on track for best start to a year in nearly a decade.",
      id: 7331869,
      image: "https://images.mktw.net/im-222299/social",
      related: "",
      source: "MarketWatch",
      summary: "The greenback is off to a strong start in 2024.",
      url: "https://www.marketwatch.com/story/king-dollar-makes-a-comeback-buck-on-track-for-best-start-to-a-year-in-nearly-a-decade-9f7d78e8",
    },
    {
      category: "top news",
      datetime: 1704475440,
      headline:
        "FDA authorizes Florida plan to import cheaper prescription drugs from Canada",
      id: 7331867,
      image: "https://images.mktw.net/im-781397/social",
      related: "",
      source: "MarketWatch",
      summary:
        "The FDA on Friday authorized a Florida program to import prescription drugs from Canada, making the Sunshine State the first to get the regulator's green light for such a plan.",
      url: "https://www.marketwatch.com/story/fda-authorizes-florida-drug-importation-program-as-first-step-toward-bringing-in-cheaper-prescription-drugs-from-canada-52c347b4",
    },
    {
      category: "top news",
      datetime: 1704474742,
      headline: "10-year swings back above 4% after December jobs report",
      id: 7331865,
      image:
        "https://image.cnbcfm.com/api/v1/image/107353236-1704209750810-gettyimages-1902278013-wallst245217_oznf4wgl.jpeg?v=1704210073&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "U.S. Treasury yields continued to rise Friday as investors assessed a hotter-than-expected December labor market.",
      url: "https://www.cnbc.com/2024/01/05/10-year-treasury-yield-tops-4percent-ahead-of-nonfarm-payrolls.html",
    },
    {
      category: "top news",
      datetime: 1704474693,
      headline:
        "Here are the kinds of stocks Jim Cramer is looking for in this year's market",
      id: 7331868,
      image:
        "https://image.cnbcfm.com/api/v1/image/107090850-1658245078529-NUP_198367_01021_copy.jpg?v=1683819634&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        'The Investing Club holds its "Morning Meeting" every weekday at 10:20 a.m. ET.',
      url: "https://www.cnbc.com/2024/01/05/here-are-the-kinds-of-stocks-jim-cramer-is-looking-for-in-this-years-market.html",
    },
    {
      category: "top news",
      datetime: 1704473206,
      headline:
        "Goldman Sachs exec: The No. 1 trait bosses look for before hiring anyone",
      id: 7331863,
      image:
        "https://image.cnbcfm.com/api/v1/image/107287405-1692192446421-SB_DSC02233_1.jpg?v=1692198398&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "A candidate with a positive attitude will have an edge over one who comes off as bored or apathetic in a job interview, says Goldman Sachs’ Shekhinah Bass.",
      url: "https://www.cnbc.com/2024/01/05/goldman-sachs-exec-the-no-1-trait-bosses-look-for-before-hiring-anyone.html",
    },
    {
      category: "top news",
      datetime: 1704472740,
      headline:
        "The typical home in these cities will be worth at least $1,000,000 in 10 years",
      id: 7331858,
      image: "https://images.mktw.net/im-79931536/social",
      related: "",
      source: "MarketWatch",
      summary:
        '"The housing shortage is the biggest reason home values have risen so much over the past decade, and why they are expected to continue to rise," a Zillow economist says.',
      url: "https://www.marketwatch.com/story/the-typical-home-in-these-cities-will-be-worth-at-least-1-000-000-in-10-years-5ee69fca",
    },
    {
      category: "top news",
      datetime: 1704471060,
      headline:
        "Stuck in credit card debt? 0% balance transfer cards could be the way out in 2024 — if you know the rules",
      id: 7331851,
      image: "https://images.mktw.net/im-66969851/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Could a balance transfer credit card work for your effort to fight credit card debt in 2024?",
      url: "https://www.marketwatch.com/story/stuck-in-credit-card-debt-0-balance-transfer-cards-could-be-the-way-out-in-2024-if-you-know-the-rules-2a6c50fa",
    },
    {
      category: "top news",
      datetime: 1704471060,
      headline:
        "When can I file my 2023 income taxes with the IRS? What is the new standard deduction and child tax credit?",
      id: 7331852,
      image: "https://images.mktw.net/im-36994803/social",
      related: "",
      source: "MarketWatch",
      summary:
        "A Tax Guy column for trending tax questions at the start of 2024",
      url: "https://www.marketwatch.com/story/when-can-i-file-my-2023-income-taxes-with-the-irs-what-is-the-new-standard-deduction-and-child-tax-credit-7637f46c",
    },
    {
      category: "top news",
      datetime: 1704470960,
      headline:
        "This is the No. 1 state Americans moved to in 2023—it’s not Florida",
      id: 7331853,
      image:
        "https://image.cnbcfm.com/api/v1/image/107354821-1704469476855-gettyimages-960947110-r_bost170613-00029-01.jpeg?v=1704469710&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "U-Haul ranked the states with the largest number of movers in one-way U-Haul equipment in 2023.",
      url: "https://www.cnbc.com/2024/01/05/the-no-1-state-americans-moved-to-in-2023-its-not-florida.html",
    },
    {
      category: "top news",
      datetime: 1704468960,
      headline:
        "Biden administration says it’s penalizing three student-loan servicers over return to repayment",
      id: 7331838,
      image: "https://images.mktw.net/im-870828/social",
      related: "",
      source: "MarketWatch",
      summary:
        "The CFPB also released new evidence suggesting 450,000 borrowers were waiting for weeks to have paperwork processed",
      url: "https://www.marketwatch.com/story/biden-administration-says-its-penalizing-three-student-loan-servicers-over-return-to-repayment-3cbaa0c6",
    },
    {
      category: "top news",
      datetime: 1704468120,
      headline: "U.S. economy stumbles at year’s end, ISM finds",
      id: 7331834,
      image: "https://images.mktw.net/im-48679150/social",
      related: "",
      source: "MarketWatch",
      summary:
        "A barometer of business conditions at service-oriented companies fell in December to a seven-month low, suggesting a hiccup for the U.S. economy.",
      url: "https://www.marketwatch.com/story/u-s-economy-stumbles-at-year-end-ism-finds-d05caa72",
    },
    {
      category: "top news",
      datetime: 1704466980,
      headline:
        "Hellur! Tyler Perry’s former Atlanta-area chateau is up for sale—or auction",
      id: 7331824,
      image: "https://images.mktw.net/im-99043399/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Tyler Perry's luxurious former home, featured in his 2005 hit film, “Diary of a Mad Black Woman,” is on the market.",
      url: "https://www.marketwatch.com/story/hellur-tyler-perrys-former-atlanta-area-chateau-is-up-for-saleor-auction-ef963801",
    },
    {
      category: "top news",
      datetime: 1704466414,
      headline:
        "Want to land a better job in 2024? 4 simple steps to kickstart your search",
      id: 7331823,
      image:
        "https://image.cnbcfm.com/api/v1/image/107354504-1704405073516-Job_search_GettyImages-1820571350.jpeg?v=1704405330&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "According to a December CNBC|SurveyMonkey Workforce Survey, 36% of workers have seriously considered quitting their job in the last three months.",
      url: "https://www.cnbc.com/2024/01/05/want-to-land-a-better-job-in-2024-4-simple-steps-to-kickstart-your-search.html",
    },
    {
      category: "top news",
      datetime: 1704466320,
      headline:
        "These two bank stocks shine as the industry gets closer to turning a corner",
      id: 7331818,
      image: "https://images.mktw.net/im-74880283/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Interest rate pressure on the banking industry is expected to ease during 2024, but fourth-quarter numbers won’t be pretty",
      url: "https://www.marketwatch.com/story/these-two-bank-stocks-shine-as-the-industry-gets-closer-to-turning-a-corner-e6ec8538",
    },
    {
      category: "top news",
      datetime: 1704466200,
      headline:
        "The Nasdaq kicked off 2024 with its longest losing streak in over a year. This is what is driving it lower.",
      id: 7331819,
      image: "https://images.mktw.net/im-229927/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Investors likely waited until the new year to take profits in highflying technology stocks.",
      url: "https://www.marketwatch.com/story/the-nasdaq-kicked-off-2024-with-its-longest-losing-streak-in-over-a-year-this-is-what-is-driving-it-lower-ea2f6f0b",
    },
    {
      category: "top news",
      datetime: 1704465840,
      headline: "PayPal’s stock starts the new year with sustained skepticism",
      id: 7331820,
      image: "https://images.mktw.net/im-828408/social",
      related: "",
      source: "MarketWatch",
      summary:
        "PayPal shares posted annual declines in each of the past three years, and two analysts recently expressed skepticism that the stock will see much positive momentum in the near-term.",
      url: "https://www.marketwatch.com/story/paypals-stock-starts-the-new-year-with-sustained-skepticism-f46c332c",
    },
    {
      category: "top news",
      datetime: 1704465540,
      headline:
        "Goodbye, hefty pay raises. Hello, layoffs: 3 ways to prep for a tougher job market in 2024",
      id: 7331803,
      image: "https://images.mktw.net/im-25484701/social",
      related: "",
      source: "MarketWatch",
      summary:
        "The latest jobs report was rosy, but 2024 could bring fewer job listings, smaller perks for job-hoppers and the looming threat of potential layoffs.",
      url: "https://www.marketwatch.com/story/goodbye-hefty-pay-raises-hello-layoffs-3-ways-to-prep-for-a-tougher-job-market-in-2024-c59cd956",
    },
    {
      category: "top news",
      datetime: 1704465120,
      headline:
        "Medical Properties Trust’s stock drops sharply to approach 14-year low as tenant falls $50 million behind on rent",
      id: 7331804,
      image: "https://images.mktw.net/im-09043619/social",
      related: "",
      source: "MarketWatch",
      summary:
        'KeyBanc downgraded stock to sector-weight as it awaits "better clarity" the company\'s earnings trajectory.',
      url: "https://www.marketwatch.com/story/medial-properties-trust-stock-falls-20-to-approach-14-year-low-as-tenant-falls-50m-behind-on-rent-6ae18d20",
    },
    {
      category: "top news",
      datetime: 1704465060,
      headline:
        "Who is Bill Ackman, the hedge funder who used corporate-raiding tactics to push out Harvard’s president?",
      id: 7331805,
      image: "https://images.mktw.net/im-593544/social",
      related: "",
      source: "MarketWatch",
      summary:
        "The Harvard grad and donor used well-honed activist-investor moves to get what he wanted at the nation’s premier Ivy League school",
      url: "https://www.marketwatch.com/story/who-is-bill-ackman-the-hedge-funder-who-used-corporate-raiding-tactics-to-push-out-harvards-president-4f548027",
    },
    {
      category: "top news",
      datetime: 1704463561,
      headline:
        "Jim Cramer's top 10 things to watch in the stock market Friday",
      id: 7331798,
      image:
        "https://image.cnbcfm.com/api/v1/image/107310339-1696284141951-gettyimages-1713785527-img_4166_gn3bczle.jpeg?v=1699874173&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "Stock futures fell slightly Friday after a stronger-than-expected jobs report.",
      url: "https://www.cnbc.com/2024/01/05/jim-cramers-top-10-things-to-watch-in-the-stock-market-friday.html",
    },
    {
      category: "top news",
      datetime: 1704463202,
      headline:
        "Setting aside $20 a day could help you save $1 million for retirement—if you start early",
      id: 7331799,
      image:
        "https://image.cnbcfm.com/api/v1/image/107354278-1704381245288-gettyimages-1193214720-dsc07739.jpeg?v=1704381259&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "Aiming to save $1 million for retirement may seem like a lofty goal, but the process doesn't have to feel overwhelming. How to get there by saving $20 a day.",
      url: "https://www.cnbc.com/2024/01/05/how-to-save-1-million-dollars-for-retirement.html",
    },
    {
      category: "top news",
      datetime: 1704462840,
      headline: "Hey, billionaires! Stop giving money to Harvard.",
      id: 7331794,
      image: "https://images.mktw.net/im-29349379/social",
      related: "",
      source: "MarketWatch",
      summary:
        "One question arising from the Claudine Gay controversy: Why does anyone give money to a university with a $53 billion endowment?",
      url: "https://www.marketwatch.com/story/hey-billionaires-stop-giving-money-to-harvard-28a0a106",
    },
    {
      category: "top news",
      datetime: 1704462720,
      headline:
        "Palantir’s stock could fall 20% amid ‘unsustainable’ valuation, a new bear warns",
      id: 7331795,
      image: "https://images.mktw.net/im-831524/social",
      related: "",
      source: "MarketWatch",
      summary:
        "The controversy over Palantir Technologies shares rages on into the new year.",
      url: "https://www.marketwatch.com/story/palantirs-stock-could-fall-20-amid-unsustainable-valuation-a-new-bear-warns-63fcb632",
    },
    {
      category: "top news",
      datetime: 1704461400,
      headline:
        "Constellation Brands’ stock up after profit beat offsets soft sales and guidance",
      id: 7331775,
      image: "https://images.mktw.net/im-22485944/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Corona distributor tops profit estimates for the third quarter, but sales fall short and guidance is lowered.",
      url: "https://www.marketwatch.com/story/constellation-brands-q3-sales-lag-estimates-and-company-lowers-full-year-eps-guidance-497f3897",
    },
    {
      category: "top news",
      datetime: 1704459780,
      headline:
        "The 7 buzziest drinking and dining trends for 2024 include ‘porn star’ martinis and a vegan take on Nutella",
      id: 7331768,
      image: "https://images.mktw.net/im-32810625/social",
      related: "",
      source: "MarketWatch",
      summary:
        "These food and drink trends are poised to take off in the new year",
      url: "https://www.marketwatch.com/story/the-7-buzziest-drinking-and-dining-trends-for-2024-include-porn-star-martinis-and-a-vegan-take-on-nutella-de1cee7b",
    },
    {
      category: "top news",
      datetime: 1704459720,
      headline:
        "Agilon Health’s stock suffers record plunge after revenue, margin outlook cuts",
      id: 7331769,
      image: "https://images.mktw.net/im-92559462/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Agilon Health's stock was suffering a record plunge toward a record low Friday, after the provider of support services for primary care physicians cut its outlooks for margin, revenue and profitability, citing medical-service expenses.",
      url: "https://www.marketwatch.com/story/agilon-health-cuts-2023-revenue-medical-margin-outlook-but-provides-upbeat-2024-view-047141fd",
    },
    {
      category: "top news",
      datetime: 1704459600,
      headline:
        "MDMA therapy company Lykos raises $100M in Series A funding as it eyes FDA approval",
      id: 7331770,
      image: "https://images.mktw.net/im-468422/social",
      related: "",
      source: "MarketWatch",
      summary:
        "MAPS Public Benefit Corp. said Friday it raised $100 million in an oversubscribed Series A round of financing as it works to win approval from the U.S. Food and Drug Administration to become the first provider of psychedelic-assisted therapy PTSD.",
      url: "https://www.marketwatch.com/story/mdma-therapy-company-lykos-raises-100m-in-series-a-funding-as-it-eyes-fda-approval-985df985",
    },
    {
      category: "top news",
      datetime: 1704459000,
      headline:
        "Gold still outshining stocks and bonds since the turn of the century",
      id: 7331766,
      image: "https://images.mktw.net/im-65092263/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Stocks outpaced gold in 2023, but the yellow metal still posted stronger annualized returns since the turn of the century.",
      url: "https://www.marketwatch.com/story/gold-still-outshining-stocks-and-bonds-since-the-turn-of-the-century-cfd61d9d",
    },
    {
      category: "top news",
      datetime: 1704458520,
      headline: "Oil heads for weekly gain, buoyed by Middle East tensions",
      id: 7331761,
      image: "https://images.mktw.net/im-327316/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Oil futures rose Friday, on track for weekly gains as rising tensions in the Middle East stoke fears of a wider war that could crimp crude supplies.",
      url: "https://www.marketwatch.com/story/oil-heads-for-weekly-gain-buoyed-by-middle-east-tensions-fdb10a20",
    },
    {
      category: "top news",
      datetime: 1704456840,
      headline:
        "‘He just ignores us’: My youngest brother is on the title of our family home, but refuses to put me on the title. Should I put pressure on him?",
      id: 7331760,
      image: "https://images.mktw.net/im-71589656/social",
      related: "",
      source: "MarketWatch",
      summary:
        '"He never paid the mortgage on the house because he was too young at the time."',
      url: "https://www.marketwatch.com/story/he-just-ignores-us-my-youngest-brother-is-on-the-title-of-our-family-home-but-refuses-to-put-me-on-the-title-should-i-put-pressure-on-him-b7623257",
    },
    {
      category: "top news",
      datetime: 1704456120,
      headline:
        "Remy Cointreau, Pernod Ricard shares hit by China probe of EU brandy",
      id: 7331751,
      image: "https://images.mktw.net/im-45829894/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Shares in leading French makers of spirits plunged on Friday in wake of a Chinese investigation.",
      url: "https://www.marketwatch.com/story/remy-cointreau-pernod-ricard-shares-hit-by-china-probe-of-eu-brandy-c294fbea",
    },
    {
      category: "top news",
      datetime: 1704456000,
      headline: "The biggest issues retirees should keep an eye on this year",
      id: 7331752,
      image: "https://images.mktw.net/im-57669275/social",
      related: "",
      source: "MarketWatch",
      summary:
        "A 2024 policy wish list for America’s seniors, from four leading advocates.",
      url: "https://www.marketwatch.com/story/the-biggest-issues-retirees-should-keep-an-eye-on-this-year-92b2d9f5",
    },
    {
      category: "top news",
      datetime: 1704455220,
      headline:
        "‘Nobody ever told me’: How do I make sense of Social Security Disability Income & Veteran’s benefits? Please help.",
      id: 7331750,
      image: "https://images.mktw.net/im-48370640/social",
      related: "",
      source: "MarketWatch",
      summary:
        '"The Social Security Administration is going to sign me up for Medicare as a result of coming to the two-year point of my disability determination."',
      url: "https://www.marketwatch.com/story/nobody-ever-told-me-how-do-i-make-sense-of-social-security-disability-income-veterans-benefits-please-help-c7c65744",
    },
    {
      category: "top news",
      datetime: 1704454440,
      headline:
        "These stocks mostly doubled last year but are still the place to be, says Bank of America",
      id: 7331743,
      image: "https://images.mktw.net/im-28162519/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Cybersecurity stocks will benefit from structural tailwinds says Bank of America",
      url: "https://www.marketwatch.com/story/these-stocks-mostly-doubled-last-year-but-are-still-the-place-to-be-says-bank-of-america-0a36c782",
    },
    {
      category: "top news",
      datetime: 1704452461,
      headline:
        "Meta was our second-best stock performer last year. Here's what we see in store for 2024",
      id: 7331738,
      image:
        "https://image.cnbcfm.com/api/v1/image/107077494-16554689812022-06-17t122740z_1907601054_rc2jtu91k06h_rtrmadp_0_france-tech.jpeg?v=1691425504&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "Savvy use of AI and untapped potential in business messaging are reasons why we see more upside ahead for Meta.",
      url: "https://www.cnbc.com/2024/01/05/meta-was-our-second-best-performer-last-year-what-is-in-store-for-2024.html",
    },
    {
      category: "top news",
      datetime: 1704451320,
      headline: "U.S. bond yields continue to rise ahead of jobs report",
      id: 7331736,
      image: "https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png",
      related: "",
      source: "MarketWatch",
      summary:
        "Treasury yields rose Friday ahead of the crucial payrolls report on Friday, following the biggest one-day yield rise for the benchmark government bond in a month.",
      url: "https://www.marketwatch.com/story/u-s-bond-yields-continue-to-rise-ahead-of-jobs-report-62b2110f",
    },
    {
      category: "top news",
      datetime: 1704450000,
      headline:
        "Investing in Mobileye would be like going ‘dumpster diving,’ hedge fund manager says",
      id: 7331734,
      image: "https://images.mktw.net/im-635186/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Hayes slammed the Intel spinout as the \"poster child of the last hype cycle before AI'",
      url: "https://www.marketwatch.com/story/investing-in-mobileye-would-be-like-going-dumpster-diving-hedge-fund-manager-says-0eaaf217",
    },
    {
      category: "top news",
      datetime: 1704449940,
      headline:
        "Exxon Mobil to take write-down of as much as $2.6 billion on California assets",
      id: 7331735,
      image: "https://images.mktw.net/im-54389623/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Exxon Mobil late Thursday flagged it might write down the value of its California assets by as much as $2.6 billion.",
      url: "https://www.marketwatch.com/story/exxon-mobil-to-take-write-down-of-as-much-as-2-6-billion-on-california-assets-1ee03750",
    },
    {
      category: "top news",
      datetime: 1704448920,
      headline: "10 great places to live in the American Southwest",
      id: 7331724,
      image: "https://images.mktw.net/im-39898062/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Soak up the region’s culturally rich cuisine, art and architecture, plus stunning natural beauty and affordable cost of living in these 10 best places to live.",
      url: "https://www.marketwatch.com/story/10-great-places-to-live-in-the-american-southwest-6878044c",
    },
    {
      category: "top news",
      datetime: 1704448860,
      headline:
        "The 2024 Mazda CX-5 and the 2024 Hyundai Tucson: Two compact SUVs compared",
      id: 7331725,
      image: "https://images.mktw.net/im-02626772/social",
      related: "",
      source: "MarketWatch",
      summary:
        "The 2024 Mazda CX-5 and 2024 Hyundai Tucson are both attractively styled 2-row crossovers, but they’re very different beneath the skin.",
      url: "https://www.marketwatch.com/story/the-2024-mazda-cx-5-and-the-2024-hyundai-tucson-two-compact-suvs-compared-cb2d3b91",
    },
    {
      category: "top news",
      datetime: 1704448800,
      headline:
        "How to reduce your clutter without sending it all to the landfill",
      id: 7331726,
      image: "https://images.mktw.net/im-84793354/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Here’s how you can get rid of textiles, paper, e-waste and other clutter without sending everything to the landfill.",
      url: "https://www.marketwatch.com/story/how-to-reduce-your-clutter-without-sending-it-all-to-the-landfill-7428fde1",
    },
    {
      category: "top news",
      datetime: 1704445500,
      headline: "Tesla to recall 1.6 million vehicles in China",
      id: 7331709,
      image: "https://images.mktw.net/im-77677160/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Tesla will recall 1.62 million vehicles in China, over concerns about steering software, news agencies reported Friday, citing a government statement.",
      url: "https://www.marketwatch.com/story/tesla-to-recall-1-6-million-vehicles-in-china-cf228c19",
    },
    {
      category: "top news",
      datetime: 1704422580,
      headline: "Peloton partners with TikTok, and shares race 14% higher",
      id: 7331681,
      image: "https://images.mktw.net/im-610652/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Peloton Interactive Inc. shares surged Thursday after the connected-exercise platform announced an exclusive partnership with TikTok.",
      url: "https://www.marketwatch.com/story/peloton-partners-with-tiktok-and-shares-race-14-higher-3bd764df",
    },
    {
      category: "top news",
      datetime: 1704417120,
      headline:
        "European supermarket giant pulls PepsiCo products due to high prices",
      id: 7331671,
      image: "https://images.mktw.net/im-48571743/social",
      related: "",
      source: "MarketWatch",
      summary:
        "France-based Carrefour started removing items including Doritos and Lays chips, Pepsi and 7-Up soda, Lipton tea and Quaker foods from stores in France, Italy, Spain and Belgium on Thursday",
      url: "https://www.marketwatch.com/story/european-supermarket-giant-pulls-pepsico-products-due-to-high-prices-738a3b7b",
    },
    {
      category: "top news",
      datetime: 1704412680,
      headline:
        "AMC hits another record low close, extends losing streak to four days",
      id: 7331659,
      image: "https://images.mktw.net/im-82220415/social",
      related: "",
      source: "MarketWatch",
      summary:
        "AMC Entertainment Holdings Inc. hit another record-low close Thursday, ending the session at $5.30 after falling 5%.",
      url: "https://www.marketwatch.com/story/amc-hits-another-record-low-close-extends-losing-streak-to-four-days-9bcc4c54",
    },
    {
      category: "top news",
      datetime: 1704411473,
      headline:
        "Jim Cramer reviews the worst performers on the Nasdaq-100 in 2023",
      id: 7331656,
      image:
        "https://image.cnbcfm.com/api/v1/image/107133247-1665585515644-gettyimages-1432870941-8y2a1285_6ca01f58-ce49-426a-877e-c76847339434.jpeg?v=1704403960&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        '"You\'ve heard of the Dogs of the Dow? Well, now I want to talk to you about the Gnats of the Nasdaq, the worst performers in the Nasdaq-100," Cramer said.',
      url: "https://www.cnbc.com/2024/01/04/jim-cramer-reviews-the-worst-performers-on-the-nasdaq-100-in-2023.html",
    },
    {
      category: "top news",
      datetime: 1704411061,
      headline:
        "Jim Cramer says new leaders will catch Wall Street's eye in January",
      id: 7331655,
      image:
        "https://image.cnbcfm.com/api/v1/image/107059906-1652323139311-200222_IMG_7979.jpg?v=1691707814&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "CNBC's Jim Cramer on Thursday said the market will broaden throughout the month of January.",
      url: "https://www.cnbc.com/2024/01/04/jim-cramer-says-new-leaders-will-catch-wall-streets-eye-in-january.html",
    },
    {
      category: "top news",
      datetime: 1704408000,
      headline:
        "Verizon’s problems ‘aren’t just narrative’ — but here’s the bull case for the stock",
      id: 7331651,
      image: "https://images.mktw.net/im-682392/social",
      related: "",
      source: "MarketWatch",
      summary:
        'Wolfe Research analyst Peter Supino upgraded the stock to outperform from peer perform late Wednesday, writing that he and his team "really like" the risk-reward balance.',
      url: "https://www.marketwatch.com/story/verizons-problems-arent-just-narrative-but-heres-the-bull-case-for-the-stock-e6b2e9e5",
    },
    {
      category: "top news",
      datetime: 1704407220,
      headline:
        "Seize Russia’s frozen assets to support Ukraine’s military and finance its recovery",
      id: 7331650,
      image: "https://images.mktw.net/im-498138/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Russia must be held accountable for the devastation it has wrought.",
      url: "https://www.marketwatch.com/story/seize-russias-frozen-assets-to-support-ukraines-military-and-finance-its-recovery-0d704aa4",
    },
    {
      category: "top news",
      datetime: 1704405540,
      headline:
        "Microsoft gets closer to overtaking Apple as most valuable U.S. company",
      id: 7331648,
      image: "https://images.mktw.net/im-872097/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Now valued at $2.73 trillion, Microsoft is worth about $100 billion less than Apple, which is valued at $2.83 trillion.",
      url: "https://www.marketwatch.com/story/microsoft-gets-closer-to-overtaking-apple-as-most-valuable-u-s-company-c3d9b639",
    },
    {
      category: "top news",
      datetime: 1704404700,
      headline:
        "A payment method that some call ‘phantom debt’ just hit a new record",
      id: 7331647,
      image: "https://images.mktw.net/im-50659744/social",
      related: "",
      source: "MarketWatch",
      summary:
        'Wells Fargo economists say “there is no way to know when this phantom debt could create substantial problems."',
      url: "https://www.marketwatch.com/story/a-payment-method-that-some-call-phantom-debt-just-hit-a-new-record-1e48aa87",
    },
    {
      category: "top news",
      datetime: 1704403560,
      headline:
        "Why Red Sea chaos is driving oil buyers ‘into the arms of U.S. shale producers’",
      id: 7331636,
      image: "https://images.mktw.net/im-62023400/social",
      related: "",
      source: "MarketWatch",
      summary:
        "U.S. crude exports could be on track to break record as a result of attacks on shipping in the Red Sea, says veteran oil analyst.",
      url: "https://www.marketwatch.com/story/why-red-sea-chaos-is-driving-oil-buyers-into-the-arms-of-u-s-shale-producers-3a4b6235",
    },
    {
      category: "top news",
      datetime: 1704402960,
      headline:
        "Donald Trump tightens grip on landmark Manhattan skyscraper at center of NY court case",
      id: 7331637,
      image: "https://images.mktw.net/im-65008761/social",
      related: "",
      source: "MarketWatch",
      summary:
        "New York Attorney General, Trump Org. are wrapping up case before Manhattan judge",
      url: "https://www.marketwatch.com/story/donald-trump-tightens-grip-on-landmark-manhattan-skyscraper-at-center-of-ny-court-case-2ce764b0",
    },
    {
      category: "top news",
      datetime: 1704402061,
      headline:
        "Here's what to expect when Modelo and Corona beer maker Constellation Brands reports earnings Friday",
      id: 7331635,
      image:
        "https://image.cnbcfm.com/api/v1/image/103525542-GettyImages-170138993.jpg?v=1704388739&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "Everybody likes a comeback. Constellation Brands' has an opportunity to redeem itself with its before-the-bell quarterly numbers.",
      url: "https://www.cnbc.com/2024/01/04/what-to-expect-from-modelo-and-corona-beer-maker-constellation-brands-earnings.html",
    },
    {
      category: "top news",
      datetime: 1704401940,
      headline:
        "This earnings season will be the first big test of the market’s year-end rally. The forecasts don’t look great.",
      id: 7331630,
      image: "https://images.mktw.net/im-244038/social",
      related: "",
      source: "MarketWatch",
      summary:
        "As JPMorgan Chase and Delta lead off the earnings parade next Friday, analysts are wary about a year that's likely to be defined by continued high prices that will force shoppers to be more selective.",
      url: "https://www.marketwatch.com/story/this-earnings-season-will-be-the-first-big-test-of-the-markets-year-end-rally-the-forecasts-dont-look-great-80fc4ef8",
    },
    {
      category: "top news",
      datetime: 1704400860,
      headline:
        "‘The ETF is winning out long term’: BlackRock tops market share for ETFs, but 2023 flows point to Vanguard catching up",
      id: 7331626,
      image: "https://images.mktw.net/im-341402/social",
      related: "",
      source: "MarketWatch",
      summary:
        "BlackRock finished 2023 with the biggest market share in the exchange-traded fund industry.",
      url: "https://www.marketwatch.com/story/the-etf-is-winning-out-long-term-blackrock-tops-market-share-for-etfs-but-2023-flows-point-to-vanguard-catching-up-21148da3",
    },
    {
      category: "top news",
      datetime: 1704400200,
      headline:
        "SpaceX IPO could come as soon as 2025 or 2026, says money manager Vijay Marolia",
      id: 7331627,
      image: "https://images.mktw.net/im-93382282/social",
      related: "",
      source: "MarketWatch",
      summary:
        "IPO chatter has swirled around SpaceX and its Starlink satellite-internet constellation.",
      url: "https://www.marketwatch.com/story/spacex-ipo-could-come-as-soon-as-2025-or-2026-says-money-manager-vijay-marolia-defb5656",
    },
    {
      category: "top news",
      datetime: 1704398460,
      headline:
        "Enphase’s stock keeps falling after longtime bull abandons buy call",
      id: 7331619,
      image: "https://images.mktw.net/im-23026275/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Enphase Energy's stock fell again Thursday after a longtime bullish analyst recommended investors stop buying, given the uncertainty over when concerns about supply in the solar market will subside.",
      url: "https://www.marketwatch.com/story/enphases-stock-keeps-falling-after-longtime-bull-abandons-buy-call-38b66812",
    },
    {
      category: "top news",
      datetime: 1704397560,
      headline:
        "China prognostication is challenging. Witness 2023. And 2024 warning signs are flashing.",
      id: 7331618,
      image: "https://images.mktw.net/im-17411198/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Observers on lookout for evidence that slow economic growth is China’s new normal.",
      url: "https://www.marketwatch.com/story/china-prognostication-is-challenging-witness-2023-and-2024-warning-signs-are-flashing-d6eb1c8f",
    },
    {
      category: "top news",
      datetime: 1704396180,
      headline:
        "Eli Lilly launches home delivery of obesity drug Zepbound — but warns against its use for cosmetic weight loss",
      id: 7331612,
      image: "https://images.mktw.net/im-735118/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Eli Lilly & Co. on Thursday announced the launch of new digital health services that could help smooth patient access to the obesity drug Zepbound and other medications  — but also warned against the use of some of its most-popular drugs for cosmetic weight loss.",
      url: "https://www.marketwatch.com/story/eli-lilly-launches-digital-health-services-for-patients-with-obesity-migraine-and-diabetes-94c32500",
    },
    {
      category: "top news",
      datetime: 1704395728,
      headline:
        "Eli Lilly aims for a new high after launching DTC service for weight-loss drugs. Cramer says let it ride",
      id: 7331613,
      image:
        "https://image.cnbcfm.com/api/v1/image/106742803-16026237952020-10-13t203905z_1608884981_rc2whj9ipswl_rtrmadp_0_health-coronavirus-elililly.jpeg?v=1691596072&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "The latest catalyst for Eli Lilly is a corporate decision more common in the retail and entertainment industries, not pharmaceuticals.",
      url: "https://www.cnbc.com/2024/01/04/eli-lilly-shares-rise-on-new-dtc-service-for-drugs-cramer-says-hold-on.html",
    },
    {
      category: "top news",
      datetime: 1704394200,
      headline:
        "State lawmakers are revving up AI bills after quarter-century of inaction on tech by Congress",
      id: 7331605,
      image: "https://images.mktw.net/im-21214408/social",
      related: "",
      source: "MarketWatch",
      summary:
        "State legislatures are taking the lead in regulating artificial intelligence after a quarter-century in which Congress has failed to come up with substantive laws governing tech.",
      url: "https://www.marketwatch.com/story/state-lawmakers-are-revving-up-ai-bills-after-quarter-century-of-inaction-on-tech-by-congress-8db3f4d4",
    },
    {
      category: "top news",
      datetime: 1704394176,
      headline:
        "Jim Cramer sees the greatest PC refresh cycle ever coming and names 3 stocks that can benefit",
      id: 7331607,
      image:
        "https://image.cnbcfm.com/api/v1/image/107349230-1702956942717-gettyimages-1455352989-abrf01036.jpeg?v=1704382437&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "The rebound emerging in the personal computers market just got a major boost thanks to Microsoft.",
      url: "https://www.cnbc.com/2024/01/04/cramer-sees-big-pc-refresh-cycle-coming-msft-aapl-nvda-can-benefit.html",
    },
    {
      category: "top news",
      datetime: 1704393900,
      headline:
        "Trump’s businesses got $7.8 million from 20 countries when he was president: report",
      id: 7331606,
      image: "https://images.mktw.net/im-73887034/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Donald Trump's businesses received millions of dollars from foreign governments when he was president, a new report said Thursday, prompting congressional Democrats to charge that he violated the Constitution.",
      url: "https://www.marketwatch.com/story/trumps-businesses-got-7-8-million-from-20-countries-when-he-was-president-report-1ec4678d",
    },
    {
      category: "top news",
      datetime: 1704393120,
      headline:
        "Santa didn’t come to Wall Street and stocks now face rough sledding",
      id: 7331600,
      image: "https://images.mktw.net/im-712113/social",
      related: "",
      source: "MarketWatch",
      summary: "The market has suffered some serious internal deterioration.",
      url: "https://www.marketwatch.com/story/santa-didnt-come-to-wall-street-and-stocks-now-face-rough-sledding-6e3e6e43",
    },
    {
      category: "top news",
      datetime: 1704392700,
      headline:
        "Magnificent Seven’s stocks start year on back foot, but investors are buying their bonds",
      id: 7331598,
      image: "https://images.mktw.net/im-66295270/social",
      related: "",
      source: "MarketWatch",
      summary:
        'The stocks of the "Magnificent Seven" group have fared poorly so far in 2024, but investors in their bonds seem unfazed.',
      url: "https://www.marketwatch.com/story/magnificent-sevens-stocks-start-year-on-back-foot-but-investors-are-buying-their-bonds-decc2f22",
    },
    {
      category: "top news",
      datetime: 1704390077,
      headline:
        "Bitcoin rises as its volatile year continues ahead of an expected ETF approval soon",
      id: 7331579,
      image:
        "https://image.cnbcfm.com/api/v1/image/107259089-1687257616020-gettyimages-1318360131-cryptocurrency.jpeg?v=1704387392&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "Bitcoin rose on Thursday, recovering some of its losses from the previous day.",
      url: "https://www.cnbc.com/2024/01/04/bitcoin-rises-as-its-volatile-year-continues-ahead-of-an-expected-etf-approval-soon.html",
    },
    {
      category: "top news",
      datetime: 1704388380,
      headline:
        "What history says about stocks and the bond market ahead of a first Fed rate cut",
      id: 7331574,
      image: "https://images.mktw.net/im-672976/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Investors need to get the timing right when it comes to the start of a Fed easing cycle",
      url: "https://www.marketwatch.com/story/what-history-says-about-stocks-and-the-bond-market-ahead-of-a-first-fed-rate-cut-e208ec23",
    },
    {
      category: "top news",
      datetime: 1704388380,
      headline:
        "The hottest real-estate market of 2024 will be this snowy Northeastern city, Zillow says",
      id: 7331575,
      image: "https://images.mktw.net/im-03961778/social",
      related: "",
      source: "MarketWatch",
      summary:
        '"Although our temperatures are cold, our market is not," one real-estate broker says',
      url: "https://www.marketwatch.com/story/the-hottest-real-estate-market-of-2024-will-be-this-snowy-northeastern-city-zillow-says-f0ae6a64",
    },
    {
      category: "top news",
      datetime: 1704387660,
      headline:
        "U.S. mortgage rates nudge higher, but Freddie Mac expects rates to ‘drift downwards’ into the year",
      id: 7331576,
      image: "https://images.mktw.net/im-69796065/social",
      related: "",
      source: "MarketWatch",
      summary:
        "The 30-year mortgage rate is averaging at 6.62%, Freddie Mac said in its latest weekly survey on Thursday.",
      url: "https://www.marketwatch.com/story/u-s-mortgage-rates-nudge-higher-but-freddie-mac-expects-rates-to-drift-downwards-into-the-year-63bc8a2a",
    },
    {
      category: "top news",
      datetime: 1704385920,
      headline:
        "Amer Sports files initial public offering with 21 underwriters and $3.5 billion in 2022 revenue",
      id: 7331563,
      image: "https://images.mktw.net/im-37082841/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Company owns Arc’teryx, Salomon, Wilson, Peak Performance, and Atomic brands.",
      url: "https://www.marketwatch.com/story/amer-sports-files-initial-public-offering-with-21-underwriters-and-3-5b-in-2022-revenue-33054c96",
    },
    {
      category: "top news",
      datetime: 1704385860,
      headline: "St. Louis Fed names Alberto G. Musalem as new president",
      id: 7331564,
      image: "https://images.mktw.net/im-81204009/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Musalem won’t be a voting member this year of Fed panel that sets U.S. interest rates",
      url: "https://www.marketwatch.com/story/st-louis-fed-names-alberto-g-musalem-as-new-president-f2e8d43d",
    },
    {
      category: "top news",
      datetime: 1704384960,
      headline:
        "State-run IRAs hit $1 billion in assets in 2023. Will you be contributing to one this year?",
      id: 7331559,
      image: "https://images.mktw.net/im-98425336/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Seven states have plans in place, and most others are developing plans or considering doing so.",
      url: "https://www.marketwatch.com/story/state-run-iras-hit-1-billion-in-assets-in-2023-will-you-be-contributing-to-one-this-year-ab650022",
    },
    {
      category: "top news",
      datetime: 1704384480,
      headline:
        "‘How’s that for bouncing back?’ How to get through financial disasters",
      id: 7331558,
      image: "https://images.mktw.net/im-63014456/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Author Lynnette Khalfani-Cox revisits an old office years after a layoff to talk about her new book about bouncing back.",
      url: "https://www.marketwatch.com/story/hows-that-for-bouncing-back-how-to-get-through-financial-disasters-6e4632cd",
    },
    {
      category: "top news",
      datetime: 1704383422,
      headline:
        "Mobileye shares plunge after chipmaker warns of order pullback",
      id: 7331556,
      image:
        "https://image.cnbcfm.com/api/v1/image/107141221-1666806847373-gettyimages-1244238646-MOBILEYE_IPO.jpeg?v=1704382838&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "The auto chipmaker, majority-owned by Intel, warned that customer order numbers would fall short of the year-ago quarter, citing excess inventory.",
      url: "https://www.cnbc.com/2024/01/04/mobileye-shares-plunge-after-chipmaker-warns-of-order-pullback.html",
    },
    {
      category: "top news",
      datetime: 1704383291,
      headline:
        "Red Sea ship attacks risk hotter inflation and broader Mideast conflict. What investors must know",
      id: 7331557,
      image:
        "https://image.cnbcfm.com/api/v1/image/107350489-1703164648440-gettyimages-1804440745-photo_2023-11-20_21-33-49.jpeg?v=1704383452&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "Trade disruptions due to Iran-backed Houthi violence could reignite inflation and could lead to a wider conflict in the region.",
      url: "https://www.cnbc.com/2024/01/04/red-sea-ship-attacks-risk-hotter-inflation-broader-mideast-conflict.html",
    },
    {
      category: "top news",
      datetime: 1704382767,
      headline:
        "10-year Treasury yield approaching 4% again after strong jobs data",
      id: 7331544,
      image:
        "https://image.cnbcfm.com/api/v1/image/107353239-1704209750454-gettyimages-1902303732-wallst245287_rsf5dk5m.jpeg?v=1704359453&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "U.S. Treasury yields ticked higher Thursday following the release of fresh employment numbers.",
      url: "https://www.cnbc.com/2024/01/04/us-treasury-yields-investors-weigh-interest-rate-path-ahead.html",
    },
    {
      category: "top news",
      datetime: 1704382560,
      headline:
        "Houthi attacks on ships in the Red Sea could hit Next’s sales, clothes seller’s CEO warns",
      id: 7331543,
      image: "https://images.mktw.net/im-79893635/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Next PLC has warned that continued attacks by Houthis on cargo ships in the Red Sea risk disrupting its supply chains and delaying deliveries to the U.K. by up to two-and-a-half weeks.",
      url: "https://www.marketwatch.com/story/houthi-attacks-on-ships-in-the-red-sea-could-hit-nexts-sales-clothes-sellers-ceo-warns-76718062",
    },
    {
      category: "top news",
      datetime: 1704381900,
      headline:
        "Slam dunk! 76ers center Joel Embiid lists his fantastic Philly penthouse for $5.5 million",
      id: 7331539,
      image: "https://images.mktw.net/im-99493469/social",
      related: "",
      source: "MarketWatch",
      summary:
        "This Philadelphia condo has “wow” factor: the 2-bedroom, 2-bath penthouse offers more than 3,500 square feet spread over two floors.",
      url: "https://www.marketwatch.com/story/slam-dunk-76ers-center-joel-embiid-lists-his-fantastic-philly-penthouse-for-5-5-million-1331c688",
    },
    {
      category: "top news",
      datetime: 1704381660,
      headline:
        "Actively managed ETFs are growing in popularity. Here’s what you want one to look like.",
      id: 7331540,
      image: "https://images.mktw.net/im-69732449/social",
      related: "",
      source: "MarketWatch",
      summary:
        "A combination of low price-to-earnings valuation and high expected growth rates can set up good performance over the long term.",
      url: "https://www.marketwatch.com/story/actively-managed-etfs-are-growing-in-popularity-heres-what-you-want-one-to-look-like-fb8c39c1",
    },
    {
      category: "top news",
      datetime: 1704380529,
      headline:
        "4 in-demand side hustles for 2024—one pays as much as $150 per hour",
      id: 7331535,
      image:
        "https://image.cnbcfm.com/api/v1/image/107353781-1704297954021-guy-teenager-talking-looking-at-webcam-recording-v-2023-11-27-05-15-54-utc.jpg?v=1704298400&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "If you're one of the many Americans considering another source of income this year, consider offering your services as a house helper or local tour guide.",
      url: "https://www.cnbc.com/2024/01/04/4-in-demand-side-hustles-for-2024one-pays-as-much-as-150-per-hour.html",
    },
    {
      category: "top news",
      datetime: 1704379961,
      headline:
        "Qualcomm announces new chip to power Samsung and Google's competitor to Apple Vision Pro headset",
      id: 7331533,
      image:
        "https://image.cnbcfm.com/api/v1/image/107251332-1685995822958-headset.jpg?v=1685995843&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "Qualcomm announced a new chip that will power the Samsung and Google headset.",
      url: "https://www.cnbc.com/2024/01/04/qualcomm-announces-snapdragon-xr2-gen-2-chip-for-ar-headsets.html",
    },
    {
      category: "top news",
      datetime: 1704378521,
      headline:
        "Ford reports 7.1% increase in U.S. new vehicle sales as industry marks best year since 2019",
      id: 7331502,
      image:
        "https://image.cnbcfm.com/api/v1/image/107299597-1694550521532-2024_Ford_F-150_Platinum_06.jpg?v=1694564101&w=1920&h=1080",
      related: "",
      source: "CNBC",
      summary:
        "Ford's U.S. sales increased about 7% last year, marking the automaker's best sales since 2019 but coming in lower than the overall industry's growth.",
      url: "https://www.cnbc.com/2024/01/04/ford-reports-7point1percent-increase-in-us-vehicle-sales.html",
    },
    {
      category: "top news",
      datetime: 1704378000,
      headline:
        "German core inflation falls in December, bolstering hopes for ECB rate cuts",
      id: 7331498,
      image: "https://images.mktw.net/im-37780162/social",
      related: "",
      source: "MarketWatch",
      summary:
        "Inflation in Germany accelerated less than expected in December, and a core reading moved lower, bolstering hopes that the European Central Bank can reduce interest rates this year.",
      url: "https://www.marketwatch.com/story/german-core-inflation-falls-in-december-bolstering-hopes-for-ecb-rate-cuts-e04e527a",
    },
  ];

  useEffect(() => {
    // dispatch(fetchNewsData());
  }, []);

  // if (loading) {
  //   return (
  //     <SyncLoader cssOverride={{ margin: "2rem" }} size={15} color="grey" />
  //   );
  // }

  // if (error) {
  //   return <div>Error... {error}</div>;
  // }

  return (
    <section className="news-container">
      {newsData2.length !== 0 &&
        newsData2.map((article, index) => {
          const {
            id,
            category,
            datetime,
            headline,
            image,
            related,
            source,
            summary,
            url,
          } = article;

          return (
            <Link to={url} target="_blank">
              <div key={index} className="news-item">
                <img src={image} alt="image" className="news-img" />
                <div className="news-title">{headline}</div>
                {/* <div className="news-summary">{summary}</div> */}
              </div>
            </Link>
          );
        })}
    </section>
  );

  // return (
  //   <section className="news-container">
  //     {newsData.length !== 0 &&
  //       newsData.feed.map((article, index) => {
  //         const {
  //           authors,
  //           banner_image,
  //           category_within_source,
  //           overall_sentiment_score,
  //           summary,
  //           time_published,
  //           url,
  //           title,
  //         } = article;

  //         if (banner_image) {
  //           return (
  //             <Link to={url} target="_blank">
  //               <div key={index} className="news-item">
  //                 <img src={banner_image} alt="image" className="news-img" />
  //                 <div className="news-title">{title}</div>
  //                 {/* <div className="news-summary">{summary}</div> */}
  //               </div>
  //             </Link>
  //           );
  //         }
  //       })}
  //   </section>
  // );
};
export default News;
