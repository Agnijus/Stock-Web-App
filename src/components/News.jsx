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
        title:
          "Short Sellers' Nightmare: $195B Evaporates In 2023's Market Surge - Apple  ( NASDAQ:AAPL ) , Coinbase Glb  ( NASDAQ:COIN ) ",
        url: "https://www.benzinga.com/markets/equities/24/01/36510120/short-sellers-nightmare-195b-evaporates-in-2023s-market-surge",
        time_published: "20240105T142522",
        authors: ["Neil Dennis"],
        summary:
          "In a year when equity markets rallied strongly, short sellers - traders who position for losses on assets - had an extremely tough time in 2023. Data published on Friday by S3 Partners showed that short sellers in the U.S. and Canada were down $194.9 billion in 2023 - down 20.4% on an average ...",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/bear-chart-shutter3.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "General",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Life Sciences",
            relevance_score: "0.333333",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.99246",
          },
          {
            topic: "Manufacturing",
            relevance_score: "0.333333",
          },
          {
            topic: "Earnings",
            relevance_score: "0.576289",
          },
          {
            topic: "Finance",
            relevance_score: "0.333333",
          },
          {
            topic: "Blockchain",
            relevance_score: "0.310843",
          },
        ],
        overall_sentiment_score: -0.019588,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "LLY",
            relevance_score: "0.188193",
            ticker_sentiment_score: "-0.042676",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "TSLA",
            relevance_score: "0.188193",
            ticker_sentiment_score: "-0.435133",
            ticker_sentiment_label: "Bearish",
          },
          {
            ticker: "MRNA",
            relevance_score: "0.188193",
            ticker_sentiment_score: "-0.042676",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "COIN",
            relevance_score: "0.188193",
            ticker_sentiment_score: "-0.289687",
            ticker_sentiment_label: "Somewhat-Bearish",
          },
          {
            ticker: "FRC",
            relevance_score: "0.094762",
            ticker_sentiment_score: "-0.272366",
            ticker_sentiment_label: "Somewhat-Bearish",
          },
          {
            ticker: "PFE",
            relevance_score: "0.188193",
            ticker_sentiment_score: "-0.042676",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Novartis expands production of Pluvicto™ with addition of its largest and most advanced radioligand therapy manufacturing facility in Indianapolis",
        url: "https://www.globenewswire.com/news-release/2024/01/05/2804701/0/en/Novartis-expands-production-of-Pluvicto-with-addition-of-its-largest-and-most-advanced-radioligand-therapy-manufacturing-facility-in-Indianapolis.html",
        time_published: "20240105T142300",
        authors: ["Novartis Pharma AG"],
        summary:
          "Basel, January 5, 2024- Novartis announced today that it has received approval from the US Food and Drug Administration ( FDA ) for commercial manufacturing of PluvictoTM ( INN: lutetium ( 177Lu ) vipivotide tetraxetan / USAN: lutetium Lu 177 vipivotide tetraxetan ) at its new large-scale, ...",
        banner_image:
          "https://ml-eu.globenewswire.com/Resource/Download/5d242013-5d1f-440c-8ba6-3b5d3799b035",
        source: "GlobeNewswire",
        category_within_source: "n/a",
        source_domain: "www.globenewswire.com",
        topics: [
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.310843",
          },
        ],
        overall_sentiment_score: 0.164792,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "META",
            relevance_score: "0.028868",
            ticker_sentiment_score: "-0.048583",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title: "Palantir Downgraded By Jefferies, Called 'Overhyped On AI'",
        url: "https://www.investors.com/news/technology/pltr-stock-jefferies-downgrades-palantir-calls-software-stock-overhyped-on-ai/",
        time_published: "20240105T142300",
        authors: ["REINHARDT KRAUSE", "Investor's Business Daily"],
        summary:
          'Calling Palantir Technologies ( PLTR ) "overhyped on AI," Jefferies analyst Brent Thill on Friday downgraded PLTR stock to underperform. On the stock market today, Palantir stock tumbled nearly 4% to 15.66 in pre-market open trades. As of Thursday\'s market close, PLTR stock was down 5% in 2024.',
        banner_image:
          "https://www.investors.com/wp-content/uploads/2023/02/Stock-Palantir-04-shutt.jpg",
        source: "Investors Business Daily",
        category_within_source: "n/a",
        source_domain: "www.investors.com",
        topics: [
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.998962",
          },
        ],
        overall_sentiment_score: 0.216839,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "PLTR",
            relevance_score: "0.730954",
            ticker_sentiment_score: "0.330626",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "US job growth surpass expectations in December; wages rise solidly",
        url: "https://www.business-standard.com/world-news/us-job-growth-surpass-expectations-in-december-wages-rise-solidly-124010501083_1.html",
        time_published: "20240105T142218",
        authors: ["Reuters"],
        summary:
          "US job growth surpass expectations in December. wages rise solidly Business Standard ...",
        banner_image:
          "https://bsmedia.business-standard.com/_media/bs/img/article/2023-10/04/full/1696427896-1293.jpg?im=FeatureCrop,size=(826,465)",
        source: "Business Standard",
        category_within_source: "GoogleRSS",
        source_domain: "www.business-standard.com",
        topics: [
          {
            topic: "Economy - Monetary",
            relevance_score: "0.576289",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.158519",
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
        overall_sentiment_score: 0.009661,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "GS",
            relevance_score: "0.079656",
            ticker_sentiment_score: "0.012378",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title: "Modi Group plans Rs 6,000 crore investment in next 5 years",
        url: "https://www.financialexpress.com/business/industry-modi-group-plans-rs-6000-crore-investment-in-next-5-years-3356921/",
        time_published: "20240105T142150",
        authors: ["PTI"],
        summary:
          "Modi Group plans Rs 6000 crore investment in next 5 years The Financial Express ...",
        banner_image:
          "https://www.financialexpress.com/wp-content/uploads/2024/01/sv-8.jpg",
        source: "The Financial Express",
        category_within_source: "n/a",
        source_domain: "www.financialexpress.com",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.538269",
          },
        ],
        overall_sentiment_score: 0.189351,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [],
      },
      {
        title:
          "U.S. added 216,000 jobs in December, beating Dow Jones estimates - .com",
        url: "https://www.upi.com/Top_News/US/2024/01/05/jobs-December-BLS/8391704460837/",
        time_published: "20240105T142049",
        authors: ["Doug Cunningham"],
        summary:
          "U.S. added 216,000 jobs in December, beating Dow Jones estimates UPI News ...",
        banner_image:
          "https://cdnph.upi.com/sv/ph/og/upi_com/8391704460837/2024/1/58d95aa19fbddd96a7c94780eec5a37a/v1.5/US-added-216000-jobs-in-December-beating-Dow-Jones-estimates.jpg",
        source: "UPI Business",
        category_within_source: "n/a",
        source_domain: "www.upi.com",
        topics: [
          {
            topic: "Earnings",
            relevance_score: "0.158519",
          },
          {
            topic: "Economy - Monetary",
            relevance_score: "0.769861",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.360215",
          },
        ],
        overall_sentiment_score: 0.12109,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [],
      },
      {
        title: "Form 8.3 - LondonMetric Property plc",
        url: "https://www.globenewswire.com/news-release/2024/01/05/2804698/0/en/Form-8-3-LondonMetric-Property-plc.html",
        time_published: "20240105T141800",
        authors: ["Rathbones Group PLC"],
        summary: "...",
        banner_image: "",
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
            relevance_score: "0.495866",
          },
        ],
        overall_sentiment_score: 0.23066,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [],
      },
      {
        title: "Form 8.3 - LXi REIT plc",
        url: "https://www.globenewswire.com/news-release/2024/01/05/2804697/0/en/Form-8-3-LXi-REIT-plc.html",
        time_published: "20240105T141700",
        authors: ["Rathbones Group PLC"],
        summary: "...",
        banner_image: "",
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
            relevance_score: "0.495866",
          },
        ],
        overall_sentiment_score: 0.23066,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [],
      },
      {
        title:
          "Gold prices slip after pressure from stronger US dollar, treasury yields",
        url: "https://www.business-standard.com/economy/news/gold-prices-slip-after-pressure-from-stronger-us-dollar-treasury-yields-124010500923_1.html",
        time_published: "20240105T141658",
        authors: ["Reuters"],
        summary:
          "Gold prices slipped on Friday and were on track for their first weekly fall in four, weighed down by a stronger dollar and higher bond yields, while investors keenly awaited U.S. non-farm payrolls data due later in the day.",
        banner_image:
          "https://bsmedia.business-standard.com/_media/bs/img/article/2023-02/12/full/1676201662-8861.jpg?im=FitAndFill=(826,465)",
        source: "Business Standard",
        category_within_source: "GoogleRSS",
        source_domain: "www.business-standard.com",
        topics: [
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.214378",
          },
        ],
        overall_sentiment_score: 0.11723,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "USAU",
            relevance_score: "0.104683",
            ticker_sentiment_score: "-0.042272",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "SCBFF",
            relevance_score: "0.104683",
            ticker_sentiment_score: "0.084182",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "FOREX:USD",
            relevance_score: "0.104683",
            ticker_sentiment_score: "0.110955",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Avenue Therapeutics Enters into Warrant Exercise Transactions for $5.0 Million in Proceeds",
        url: "https://www.globenewswire.com/news-release/2024/01/05/2804696/0/en/Avenue-Therapeutics-Enters-into-Warrant-Exercise-Transactions-for-5-0-Million-in-Proceeds.html",
        time_published: "20240105T141500",
        authors: ["Avenue Therapeutics"],
        summary:
          'MIAMI, Jan. 05, 2024 ( GLOBE NEWSWIRE ) -- Avenue Therapeutics, Inc. ( Nasdaq: ATXI ) ( "Avenue" or the "Company" ) , a specialty pharmaceutical company focused on the development and commercialization of therapies for the treatment of neurologic diseases, today announced the entry into warrant ...',
        banner_image:
          "https://ml.globenewswire.com/Resource/Download/5d747820-bfea-4962-8066-e24adcda701f",
        source: "GlobeNewswire",
        category_within_source: "n/a",
        source_domain: "www.globenewswire.com",
        topics: [
          {
            topic: "Life Sciences",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.999993",
          },
        ],
        overall_sentiment_score: 0.186122,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "ATXI",
            relevance_score: "0.153715",
            ticker_sentiment_score: "0.13304",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "FBIO",
            relevance_score: "0.077218",
            ticker_sentiment_score: "0.096219",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title: "1 Growth Stock Down 73% to Buy Right Now",
        url: "https://www.fool.com/investing/2024/01/05/1-growth-stock-down-73-to-buy-right-now/",
        time_published: "20240105T141500",
        authors: ["Neil Patel"],
        summary:
          "Investors won't struggle to find positive traits when looking at this business.",
        banner_image:
          "https://g.foolcdn.com/editorial/images/759984/thinking-in-front-of-trading-screens.jpg",
        source: "Motley Fool",
        category_within_source: "n/a",
        source_domain: "www.fool.com",
        topics: [
          {
            topic: "Economy - Monetary",
            relevance_score: "0.158519",
          },
          {
            topic: "Economy - Fiscal",
            relevance_score: "0.158519",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.214378",
          },
          {
            topic: "Earnings",
            relevance_score: "0.495866",
          },
        ],
        overall_sentiment_score: 0.290781,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "ETSY",
            relevance_score: "0.669671",
            ticker_sentiment_score: "0.362044",
            ticker_sentiment_label: "Bullish",
          },
        ],
      },
      {
        title: "Middlefield Canadian Income PCC: Net Asset Value ( s ) ",
        url: "https://www.globenewswire.com/news-release/2024/01/05/2804695/0/en/Middlefield-Canadian-Income-PCC-Net-Asset-Value-s.html",
        time_published: "20240105T141300",
        authors: ["Middlefield Canadian Income PCC"],
        summary: "Middlefield Canadian Income PCC Net Asset Value ...",
        banner_image: "",
        source: "GlobeNewswire",
        category_within_source: "n/a",
        source_domain: "www.globenewswire.com",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.108179",
          },
        ],
        overall_sentiment_score: 0.434912,
        overall_sentiment_label: "Bullish",
        ticker_sentiment: [],
      },
      {
        title:
          "From Frozen Funds To Flowing Streams: Celsius Unchains Ethereum, Hope Rises For Wounded Creditors",
        url: "https://www.benzinga.com/markets/cryptocurrency/24/01/36507668/from-frozen-funds-to-flowing-streams-celsius-unchains-ethereum-hope-rises-for-wounded-cred",
        time_published: "20240105T141253",
        authors: ["Murtuza Merchant"],
        summary:
          "Bankrupt Celsius Network CEL/USD has taken a major step in its financial restructuring. The crypto lender announced the unstaking of a large portion of its Ethereum ETH/USD holdings. This decision is a crucial part of Celsius's broader strategy to facilitate repayments to creditors owed funds.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/celsius_shutter2.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Markets",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Blockchain",
            relevance_score: "0.310843",
          },
        ],
        overall_sentiment_score: 0.276496,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "CRYPTO:BTC",
            relevance_score: "0.246582",
            ticker_sentiment_score: "0.300893",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "CRYPTO:ETH",
            relevance_score: "0.940545",
            ticker_sentiment_score: "0.52339",
            ticker_sentiment_label: "Bullish",
          },
        ],
      },
      {
        title:
          "Cassava Sciences Completes Dividend Distribution of Warrants to Shareholders",
        url: "https://www.globenewswire.com/news-release/2024/01/05/2804693/8339/en/Cassava-Sciences-Completes-Dividend-Distribution-of-Warrants-to-Shareholders.html",
        time_published: "20240105T141200",
        authors: ["Cassava Sciences", "Inc."],
        summary:
          'AUSTIN, Texas, Jan. 05, 2024 ( GLOBE NEWSWIRE ) -- Cassava Sciences, Inc. ( Nasdaq: SAVA ) ( "Cassava Sciences" or the "Company" ) today announced the completion of a previously announced distribution of warrants ( the "Warrants" ) to its shareholders. The Warrants now trade on Nasdaq under the ...',
        banner_image:
          "https://ml.globenewswire.com/Resource/Download/b3eb579e-cf3b-48b9-ab0e-ae8c85caaf29",
        source: "GlobeNewswire",
        category_within_source: "n/a",
        source_domain: "www.globenewswire.com",
        topics: [
          {
            topic: "Life Sciences",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: 0.198978,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "SAVA",
            relevance_score: "0.202578",
            ticker_sentiment_score: "0.27319",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "Cassava Sciences Completes Dividend Distribution of Warrants to Shareholders - Cassava Sciences  ( NASDAQ:SAVA ) ",
        url: "https://www.benzinga.com/pressreleases/24/01/g36509951/cassava-sciences-completes-dividend-distribution-of-warrants-to-shareholders",
        time_published: "20240105T141200",
        authors: ["Globe Newswire"],
        summary:
          'Shareholders of Record Received Warrants to Purchase Shares of Common Stock Warrants Trade on Nasdaq Under the Ticker "SAVAW" Warrant Holders Who Choose to Exercise During an Early Period Will Receive an Additional 0.5 of a Common Share Per Warrant',
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
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: 0.207763,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "SAVA",
            relevance_score: "0.222838",
            ticker_sentiment_score: "0.304955",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "This Stock Was One of the S&P 500's Worst Performers in 2023: Is It Time to Buy the Dip or Let It Go?",
        url: "https://www.fool.com/investing/2024/01/05/this-stock-was-one-of-the-sp-500s-worst-performers/",
        time_published: "20240105T140800",
        authors: ["Eric Volkman"],
        summary:
          "The debt-burdened and struggling company might not necessarily be a good bargain play for investors.",
        banner_image:
          "https://g.foolcdn.com/editorial/images/760124/concerned-young-person-with-head-in-hands-gazing-at-a-screen.jpg",
        source: "Motley Fool",
        category_within_source: "n/a",
        source_domain: "www.fool.com",
        topics: [
          {
            topic: "Earnings",
            relevance_score: "0.360215",
          },
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.87644",
          },
        ],
        overall_sentiment_score: 0.202805,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "MSFT",
            relevance_score: "0.054857",
            ticker_sentiment_score: "0.151849",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "LUMN",
            relevance_score: "0.109455",
            ticker_sentiment_score: "0.084074",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "T",
            relevance_score: "0.21686",
            ticker_sentiment_score: "0.090411",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "VZ",
            relevance_score: "0.269181",
            ticker_sentiment_score: "0.107262",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title: "Jim Cramer's top 10 things to watch in the stock market Friday",
        url: "https://www.cnbc.com/2024/01/05/jim-cramers-top-10-things-to-watch-in-the-stock-market-friday.html",
        time_published: "20240105T140601",
        authors: ["Jim Cramer"],
        summary:
          "Stock futures fell slightly Friday after a stronger-than-expected jobs report.",
        banner_image:
          "https://image.cnbcfm.com/api/v1/image/107310339-1696284141951-gettyimages-1713785527-img_4166_gn3bczle.jpeg?v=1699874173&w=1920&h=1080",
        source: "CNBC",
        category_within_source: "Top News",
        source_domain: "www.cnbc.com",
        topics: [
          {
            topic: "Economy - Monetary",
            relevance_score: "0.158519",
          },
          {
            topic: "Retail & Wholesale",
            relevance_score: "0.25",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.999696",
          },
          {
            topic: "Manufacturing",
            relevance_score: "0.25",
          },
          {
            topic: "Technology",
            relevance_score: "0.25",
          },
          {
            topic: "Finance",
            relevance_score: "0.25",
          },
        ],
        overall_sentiment_score: 0.057187,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "NFLX",
            relevance_score: "0.12645",
            ticker_sentiment_score: "0.07632",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "NVDA",
            relevance_score: "0.063425",
            ticker_sentiment_score: "0.048013",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "JPM",
            relevance_score: "0.063425",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "WBS",
            relevance_score: "0.063425",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "MSFT",
            relevance_score: "0.063425",
            ticker_sentiment_score: "0.048013",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "COST",
            relevance_score: "0.063425",
            ticker_sentiment_score: "0.004007",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "BCS",
            relevance_score: "0.063425",
            ticker_sentiment_score: "0.048013",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "TSLA",
            relevance_score: "0.063425",
            ticker_sentiment_score: "0.048013",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "CMA",
            relevance_score: "0.063425",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "NOW",
            relevance_score: "0.063425",
            ticker_sentiment_score: "0.064023",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "PEP",
            relevance_score: "0.063425",
            ticker_sentiment_score: "-0.238434",
            ticker_sentiment_label: "Somewhat-Bearish",
          },
          {
            ticker: "HUBS",
            relevance_score: "0.063425",
            ticker_sentiment_score: "0.064023",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "KEY",
            relevance_score: "0.063425",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Gaming For Profit: Netflix Reportedly Considers Monetization Of Its Game Offerings - Netflix  ( NASDAQ:NFLX ) ",
        url: "https://www.benzinga.com/general/entertainment/24/01/36507253/gaming-for-profit-netflix-reportedly-considers-monetization-of-its-game-offerings",
        time_published: "20240105T140545",
        authors: ["Shivani Kumaresan"],
        summary:
          "Streaming giant Netflix Inc NFLX is reportedly contemplating various revenue-generation strategies for its gaming sector, indicating a potential shift in the company's approach to the expanding division.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/nflx_1_0.png?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "General",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Earnings",
            relevance_score: "0.108179",
          },
        ],
        overall_sentiment_score: 0.306142,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "NFLX",
            relevance_score: "0.821469",
            ticker_sentiment_score: "0.520151",
            ticker_sentiment_label: "Bullish",
          },
        ],
      },
      {
        title:
          "Bitcoin Recovers, Dogecoin And Ethereum Climb Amid Renewed Hopes For Spot ETF; Apple Card Increases Annual Percentage Yield Again, From 4.25% to 4.35% - Top Headlines Today While US Was Sleeping",
        url: "https://www.benzinga.com/markets/cryptocurrency/24/01/36508078/bitcoin-recovers-dogecoin-and-ethereum-climb-amid-renewed-hopes-for-spot-etf-apple-card-in",
        time_published: "20240105T140541",
        authors: ["Akanksha Bakshi"],
        summary:
          "Former Morgan Stanley CEO James Gorman Says Bitcoin Is Not A 'Fad': 'I Just Don't Think It's A Core Investment' Bitcoin Bounces Back - Dogecoin, Ethereum Rise As Spot ETF Hopes Get Revived: Analyst Predicts Eventual Rebound To $57K For King Crypto Analysts Favor Solana, Ethereum's Supply Dynamics.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/cryptocurrency-gb192fb44c_1920.jpg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Markets",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Retail & Wholesale",
            relevance_score: "0.25",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.684621",
          },
          {
            topic: "Manufacturing",
            relevance_score: "0.25",
          },
          {
            topic: "Technology",
            relevance_score: "0.25",
          },
          {
            topic: "Finance",
            relevance_score: "0.25",
          },
        ],
        overall_sentiment_score: 0.026599,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "MSFT",
            relevance_score: "0.131284",
            ticker_sentiment_score: "0.241659",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "SSNLF",
            relevance_score: "0.065866",
            ticker_sentiment_score: "0.123227",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "GOOG",
            relevance_score: "0.065866",
            ticker_sentiment_score: "-0.214651",
            ticker_sentiment_label: "Somewhat-Bearish",
          },
          {
            ticker: "COST",
            relevance_score: "0.131284",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "TSLA",
            relevance_score: "0.380012",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "MS",
            relevance_score: "0.065866",
            ticker_sentiment_score: "-0.085121",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "STZ",
            relevance_score: "0.065866",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "CRYPTO:BTC",
            relevance_score: "0.195814",
            ticker_sentiment_score: "0.155103",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "CRYPTO:ETH",
            relevance_score: "0.065866",
            ticker_sentiment_score: "0.118211",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "CRYPTO:DOGE",
            relevance_score: "0.065866",
            ticker_sentiment_score: "0.118211",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Huawei's Latest Laptop Debunks Chinese Chip Advancement Claims - Taiwan Semiconductor  ( NYSE:TSM ) ",
        url: "https://www.benzinga.com/government/24/01/36506103/huaweis-latest-laptop-debunks-chinese-chip-advancement-claims",
        time_published: "20240105T140232",
        authors: ["Anusuya Lahiri"],
        summary:
          "Taiwan Semiconductor Manufacturing Co TSM produced the chip in Huawei Technologies Co's latest laptop, the Qingyun L540, debunking rumors of a significant Chinese technological leap.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/huawei_hisilicon.png?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "News",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Technology",
            relevance_score: "0.5",
          },
          {
            topic: "Manufacturing",
            relevance_score: "0.5",
          },
        ],
        overall_sentiment_score: 0.156555,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "NVDA",
            relevance_score: "0.28664",
            ticker_sentiment_score: "0.186933",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "AAPL",
            relevance_score: "0.193465",
            ticker_sentiment_score: "0.315765",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "KNBWF",
            relevance_score: "0.097457",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "TCTZF",
            relevance_score: "0.097457",
            ticker_sentiment_score: "0.096014",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "TSM",
            relevance_score: "0.28664",
            ticker_sentiment_score: "-0.071281",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Warren Buffett and Berkshire Hathaway Own Citigroup Stock. Should You?",
        url: "https://www.fool.com/investing/2024/01/05/warren-buffett-berkshire-hathaway-own-citigroup/",
        time_published: "20240105T140200",
        authors: ["Ryan Vanzo"],
        summary:
          "You can still buy shares of the banking giant for about the same price Buffett and his team paid. If you do, you should know what to expect.",
        banner_image:
          "https://media.ycharts.com/charts/25576b6359235ecc16ce24f3063beaed.png",
        source: "Motley Fool",
        category_within_source: "n/a",
        source_domain: "www.fool.com",
        topics: [
          {
            topic: "Finance",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.999365",
          },
        ],
        overall_sentiment_score: 0.314379,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "C",
            relevance_score: "0.542432",
            ticker_sentiment_score: "0.446644",
            ticker_sentiment_label: "Bullish",
          },
          {
            ticker: "BAC",
            relevance_score: "0.224903",
            ticker_sentiment_score: "0.316949",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "WFC",
            relevance_score: "0.224903",
            ticker_sentiment_score: "0.316949",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "BRK-A",
            relevance_score: "0.136113",
            ticker_sentiment_score: "0.172739",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "SDIPF",
            relevance_score: "0.045569",
            ticker_sentiment_score: "0.175473",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title: "Why Shares in Trimble Soared in December",
        url: "https://www.fool.com/investing/2024/01/05/why-shares-in-trimble-soared-in-december/",
        time_published: "20240105T140115",
        authors: ["Lee Samaha"],
        summary:
          "The market is warming to the idea that the technology company's end markets might improve in 2024.",
        banner_image:
          "https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F760271%2Fa-stock-to-buy.jpg&op=resize&w=700",
        source: "Motley Fool",
        category_within_source: "n/a",
        source_domain: "www.fool.com",
        topics: [
          {
            topic: "Economy - Monetary",
            relevance_score: "0.158519",
          },
          {
            topic: "Life Sciences",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.108179",
          },
          {
            topic: "Earnings",
            relevance_score: "0.980922",
          },
        ],
        overall_sentiment_score: 0.287661,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "TRMB",
            relevance_score: "0.358152",
            ticker_sentiment_score: "0.251584",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "SPGI",
            relevance_score: "0.092569",
            ticker_sentiment_score: "0.247718",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title: "Holiday price action: Signs of the next crypto bull run?",
        url: "https://cointelegraph.com/news/holiday-bitcoin-price-next-crypto-bull-run",
        time_published: "20240105T140100",
        authors: ["Shiraz Jagati"],
        summary:
          "A closer look at the similarities between today's thriving crypto market and the 2020-2021 bull run.",
        banner_image:
          "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2024-01/8c7d2c08-ee87-4d55-9630-d7789a5b4707.jpg",
        source: "Cointelegraph",
        category_within_source: "n/a",
        source_domain: "cointelegraph.com",
        topics: [
          {
            topic: "Economy - Monetary",
            relevance_score: "0.890401",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.796627",
          },
          {
            topic: "Blockchain",
            relevance_score: "0.682689",
          },
          {
            topic: "Economy - Macro",
            relevance_score: "0.158519",
          },
        ],
        overall_sentiment_score: 0.287816,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "CRYPTO:BTC",
            relevance_score: "0.295421",
            ticker_sentiment_score: "0.288635",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "CRYPTO:ETH",
            relevance_score: "0.075516",
            ticker_sentiment_score: "0.107111",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title: "Why the World's Richest Country Treats Its Parents So Poorly",
        url: "https://www.theatlantic.com/family/archive/2024/01/america-failed-parents-rich-countries-raising-kids/677023/",
        time_published: "20240105T140052",
        authors: ["Stephanie H. Murray"],
        summary: "America Has Failed Parents The Atlantic ...",
        banner_image:
          "https://cdn.theatlantic.com/thumbor/bQXqDAWt7yJp0-xBnZoFxgWVY7s=/0x0:3404x2281/928x622/media/img/posts/2024/01/GettyImages_135210242/original.jpg",
        source: "The Atlantic",
        category_within_source: "n/a",
        source_domain: "www.theatlantic.com",
        topics: [
          {
            topic: "Earnings",
            relevance_score: "0.158519",
          },
          {
            topic: "Retail & Wholesale",
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: -0.002449,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "WMT",
            relevance_score: "0.011365",
            ticker_sentiment_score: "0.070628",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "If You Invested $1000 In This Stock 20 Years Ago, You Would Have $5,200 Today - WEC Energy Group  ( NYSE:WEC ) ",
        url: "https://www.benzinga.com/news/24/01/36509532/if-you-invested-1000-in-this-stock-20-years-ago-you-would-have-5-200-today",
        time_published: "20240105T140022",
        authors: ["Benzinga Insights"],
        summary:
          "WEC Energy Group WEC has outperformed the market over the past 20 years by 1.2% on an annualized basis producing an average annual return of 8.56%. Currently, WEC Energy Group has a market capitalization of $27.10 billion.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2023/valuestock_image_1.jpeg?width=1200&height=800&fit=crop",
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
            relevance_score: "0.108179",
          },
        ],
        overall_sentiment_score: 0.160819,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "WEC",
            relevance_score: "0.977302",
            ticker_sentiment_score: "0.386606",
            ticker_sentiment_label: "Bullish",
          },
        ],
      },
      {
        title:
          "$100 Invested In This Stock 5 Years Ago Would Be Worth $200 Today - Equinix  ( NASDAQ:EQIX ) ",
        url: "https://www.benzinga.com/news/24/01/36509518/100-invested-in-this-stock-5-years-ago-would-be-worth-200-today",
        time_published: "20240105T140017",
        authors: ["Benzinga Insights"],
        summary:
          "Equinix EQIX has outperformed the market over the past 5 years by 4.4% on an annualized basis producing an average annual return of 17.04%. Currently, Equinix has a market capitalization of $74.63 billion.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2023/valuestock_image_4.jpeg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Trading",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Real Estate & Construction",
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
            ticker: "EQIX",
            relevance_score: "0.983605",
            ticker_sentiment_score: "0.387251",
            ticker_sentiment_label: "Bullish",
          },
        ],
      },
      {
        title:
          "Setting aside $20 a day could help you save $1 million for retirement-if you start early",
        url: "https://www.cnbc.com/2024/01/05/how-to-save-1-million-dollars-for-retirement.html",
        time_published: "20240105T140002",
        authors: ["Cheyenne DeVon"],
        summary:
          "Aiming to save $1 million for retirement may seem like a lofty goal, but the process doesn't have to feel overwhelming. How to get there by saving $20 a day.",
        banner_image:
          "https://image.cnbcfm.com/api/v1/image/107352430-dumpling_daughter-Still-01.png?v=1703797598&w=750&h=422&vtcrop=y",
        source: "CNBC",
        category_within_source: "Top News",
        source_domain: "www.cnbc.com",
        topics: [
          {
            topic: "Earnings",
            relevance_score: "0.158519",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.744043",
          },
        ],
        overall_sentiment_score: 0.175385,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [],
      },
      {
        title:
          "Sana Biotechnology Announces FDA Clearance of Investigational New Drug Application for SC262, a Hypoimmune-modified, CD22-directed Allogeneic CAR T Therapy, for Patients with Relapsed or Refractory B-cell Malignancies",
        url: "https://www.globenewswire.com/news-release/2024/01/05/2804686/0/en/Sana-Biotechnology-Announces-FDA-Clearance-of-Investigational-New-Drug-Application-for-SC262-a-Hypoimmune-modified-CD22-directed-Allogeneic-CAR-T-Therapy-for-Patients-with-Relapsed.html",
        time_published: "20240105T140000",
        authors: ["Inc", "Sana Biotechnology"],
        summary:
          "Expect to disclose initial SC262 clinical data in 2024 Expect to disclose initial SC262 clinical data in ...",
        banner_image:
          "https://ml.globenewswire.com/Resource/Download/2e5b81be-ddf0-4a60-85f1-3f17c242e8c2",
        source: "GlobeNewswire",
        category_within_source: "n/a",
        source_domain: "www.globenewswire.com",
        topics: [
          {
            topic: "Life Sciences",
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: 0.073927,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "SANA",
            relevance_score: "0.14947",
            ticker_sentiment_score: "0.0639",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Castor Maritime Inc. Announces the Sale of the M/V Magic Venus for $17.5 Million with an Expected Net Gain of $3.5 Million",
        url: "https://www.globenewswire.com/news-release/2024/01/05/2804685/0/en/Castor-Maritime-Inc-Announces-the-Sale-of-the-M-V-Magic-Venus-for-17-5-Million-with-an-Expected-Net-Gain-of-3-5-Million.html",
        time_published: "20240105T140000",
        authors: ["Castor Maritime Inc."],
        summary:
          'LIMASSOL, Cyprus, Jan. 05, 2024 ( GLOBE NEWSWIRE ) -- Castor Maritime Inc. ( NASDAQ: CTRM ) , ( "Castor" or the "Company" ) , a diversified global shipping company, announces that on December 21, 2023, the Company entered into an agreement with an entity beneficially owned by a family member of ...',
        banner_image:
          "https://ml.globenewswire.com/Resource/Download/c2d88a5a-13e9-42c9-a2c7-99548a44a221",
        source: "GlobeNewswire",
        category_within_source: "n/a",
        source_domain: "www.globenewswire.com",
        topics: [
          {
            topic: "Energy & Transportation",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.714479",
          },
        ],
        overall_sentiment_score: 0.124312,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "CTRM",
            relevance_score: "0.132855",
            ticker_sentiment_score: "0.115439",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Groundworks® Enters Commercial Poly Market with the Acquisition of URETEK South",
        url: "https://www.benzinga.com/pressreleases/24/01/g36509462/groundworks-enters-commercial-poly-market-with-the-acquisition-of-uretek-south",
        time_published: "20240105T140000",
        authors: ["Globe Newswire"],
        summary:
          "VIRGINIA BEACH, Va., Jan. 05, 2024 ( GLOBE NEWSWIRE ) -- Groundworks®, the nation's leading foundation and water management solutions company, announces the acquisition of URETEK South.",
        banner_image:
          "https://www.benzinga.com/next-assets/images/schema-image-default.png",
        source: "Benzinga",
        category_within_source: "Mergers",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Technology",
            relevance_score: "0.5",
          },
          {
            topic: "Finance",
            relevance_score: "0.5",
          },
        ],
        overall_sentiment_score: 0.363169,
        overall_sentiment_label: "Bullish",
        ticker_sentiment: [
          {
            ticker: "META",
            relevance_score: "0.07887",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "FXNC",
            relevance_score: "0.07887",
            ticker_sentiment_score: "0.174979",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "SB Financial Group, Inc. Announces Schedule for Fourth Quarter and Full Year 2023 Results",
        url: "https://www.globenewswire.com/news-release/2024/01/05/2804679/0/en/SB-Financial-Group-Inc-Announces-Schedule-for-Fourth-Quarter-and-Full-Year-2023-Results.html",
        time_published: "20240105T140000",
        authors: ["Inc.", "SB Financial Group"],
        summary:
          "DEFIANCE, Ohio, Jan. 05, 2024 ( GLOBE NEWSWIRE ) -- SB Financial Group, Inc. ( NASDAQ: SBFG ) , a diversified financial services company providing full-service community banking, mortgage banking, wealth management, private client and title insurance services, expects to release its fourth ...",
        banner_image: "",
        source: "GlobeNewswire",
        category_within_source: "n/a",
        source_domain: "www.globenewswire.com",
        topics: [
          {
            topic: "Finance",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.839681",
          },
        ],
        overall_sentiment_score: 0.158472,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "SBFG",
            relevance_score: "0.805471",
            ticker_sentiment_score: "0.266009",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "MAX Power Extends Lithium Discovery at Willcox with Large Step-Out from First Drill Hole",
        url: "https://www.globenewswire.com/news-release/2024/01/05/2804677/0/en/MAX-Power-Extends-Lithium-Discovery-at-Willcox-with-Large-Step-Out-from-First-Drill-Hole.html",
        time_published: "20240105T140000",
        authors: ["Max Power Mining Corp"],
        summary:
          'VANCOUVER, British Columbia, Jan. 05, 2024 ( GLOBE NEWSWIRE ) -- MAX Power Mining Corp. ( CSE: MAXX. OTC: MAXXF. FRANKFURT: 89N ) ( "MAX Power" or the "Company" ) has significantly broadened the discovery footprint at its Willcox Lithium Project in southeast Arizona as first-ever diamond drilling ...',
        banner_image:
          "https://ml.globenewswire.com/Resource/Download/fb682399-8f23-4f64-a5fc-f8adaeb3ea2b/MAX Power Mining Jan 5 Project Map.jpg",
        source: "GlobeNewswire",
        category_within_source: "n/a",
        source_domain: "www.globenewswire.com",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.310843",
          },
        ],
        overall_sentiment_score: 0.155419,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "MAXXF",
            relevance_score: "0.121856",
            ticker_sentiment_score: "0.085009",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          'MAVTV Announces Premiere of "In the Machine: Ashley Freiberg" - A New Original Docuseries Spotlights Women in Motorsports with Official Trailer and Key Art Release',
        url: "https://www.benzinga.com/pressreleases/24/01/n36509523/mavtv-announces-premiere-of-in-the-machine-ashley-freiberg-a-new-original-docuseries-spotlights-wo",
        time_published: "20240105T140000",
        authors: ["PRNewswire"],
        summary:
          "New MAVTV Original docuseries follows multifaceted talent Ashley Freiberg behind the scenes on her personal journey through endurance and sports car racing Show premieres Jan. 11 at 8pm ET/PT only on MAVTV Official Trailer and Key Art dropped today",
        banner_image:
          "https://www.benzinga.com/next-assets/images/schema-image-default.png",
        source: "Benzinga",
        category_within_source: "General",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: 0.352958,
        overall_sentiment_label: "Bullish",
        ticker_sentiment: [
          {
            ticker: "FUBO",
            relevance_score: "0.054983",
            ticker_sentiment_score: "0.182987",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "GOOG",
            relevance_score: "0.054983",
            ticker_sentiment_score: "0.182987",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "META",
            relevance_score: "0.054983",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title: "In This Market, Sustainable Gains Matter More Than Home Runs",
        url: "https://www.barrons.com/articles/how-to-build-a-defensive-portfolio-for-a-riskier-world-0fedef22",
        time_published: "20240105T140000",
        authors: ["Scotty C. George"],
        summary: "How to Build a Defensive Portfolio for a Riskier World ...",
        banner_image: "https://images.barrons.com/im-39606660/social",
        source: "Barrons",
        category_within_source: "n/a",
        source_domain: "www.barrons.com",
        topics: [
          {
            topic: "Economy - Monetary",
            relevance_score: "0.158519",
          },
        ],
        overall_sentiment_score: -0.249775,
        overall_sentiment_label: "Somewhat-Bearish",
        ticker_sentiment: [],
      },
      {
        title:
          "Al in Cybersecurity Market worth $60.6 billion by 2028, growing at a CAGR of 21.9%: Report by MarketsandMarkets™",
        url: "https://www.benzinga.com/pressreleases/24/01/g36509460/al-in-cybersecurity-market-worth-60-6-billion-by-2028-growing-at-a-cagr-of-21-9-report-by-marketsa",
        time_published: "20240105T140000",
        authors: ["Globe Newswire"],
        summary:
          "Chicago, Jan. 05, 2024 ( GLOBE NEWSWIRE ) -- The global Al in Cybersecurity Market is projected to grow from USD 22.4 billion in 2023 to USD 60.6 billion by 2028, at a CAGR of 21.9% during the forecast period, according to a new report by MarketsandMarkets™.",
        banner_image:
          "https://www.benzinga.com/next-assets/images/schema-image-default.png",
        source: "Benzinga",
        category_within_source: "News",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Real Estate & Construction",
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: 0.075282,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "APG",
            relevance_score: "0.032382",
            ticker_sentiment_score: "0.027522",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "SSNLF",
            relevance_score: "0.032382",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "WBD",
            relevance_score: "0.032382",
            ticker_sentiment_score: "0.023259",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Hormel Has Sold Meat Products in Grocery Stores for Over a Century. But Almost 50% of Its Profits Comes From Outside Grocery Stores Today.",
        url: "https://www.fool.com/investing/2024/01/05/hormel-has-sold-meat-products-in-grocery-stores/",
        time_published: "20240105T140000",
        authors: ["Jon Quast"],
        summary:
          "Could an acquisition from 2021 hold a key to future dividend growth?",
        banner_image:
          "https://media.ycharts.com/charts/cd0d0769b9c7393b2141cc36867c66fe.png",
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
            relevance_score: "0.316726",
          },
          {
            topic: "Manufacturing",
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: 0.364757,
        overall_sentiment_label: "Bullish",
        ticker_sentiment: [
          {
            ticker: "HRL",
            relevance_score: "0.11983",
            ticker_sentiment_score: "0.060579",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "KHC",
            relevance_score: "0.060085",
            ticker_sentiment_score: "0.072281",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title: "It's Been An Abysmal Two Years. But Biotech Is Looking Up.",
        url: "https://www.investors.com/news/technology/biotech-stocks-pharma-heat-up-in-2024-as-buyouts-obesity-ai-drive-excitement/",
        time_published: "20240105T140000",
        authors: ["Investor's Business Daily", "ALLISON GATLIN"],
        summary:
          "Biotech Stocks, Pharma Heat Up In 2024 As Buyouts, Obesity And AI Drive Excitement Investor's Business Daily ...",
        banner_image:
          "https://www.investors.com/wp-content/uploads/2024/01/A1-010824-biotech-Gash.jpg",
        source: "Investors Business Daily",
        category_within_source: "n/a",
        source_domain: "www.investors.com",
        topics: [
          {
            topic: "Life Sciences",
            relevance_score: "0.5",
          },
          {
            topic: "Technology",
            relevance_score: "0.5",
          },
          {
            topic: "Financial Markets",
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: 0.12567,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "NVO",
            relevance_score: "0.035679",
            ticker_sentiment_score: "0.069333",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "NBIX",
            relevance_score: "0.02379",
            ticker_sentiment_score: "0.14181",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "KRTX",
            relevance_score: "0.035679",
            ticker_sentiment_score: "0.037838",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "IONS",
            relevance_score: "0.02379",
            ticker_sentiment_score: "0.084592",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "RYZB",
            relevance_score: "0.02379",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "AMGN",
            relevance_score: "0.02379",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "ARWR",
            relevance_score: "0.02379",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "ALEC",
            relevance_score: "0.09495",
            ticker_sentiment_score: "0.150269",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
          {
            ticker: "LLY",
            relevance_score: "0.153696",
            ticker_sentiment_score: "0.053027",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "VERV",
            relevance_score: "0.02379",
            ticker_sentiment_score: "0.006781",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "OMGA",
            relevance_score: "0.02379",
            ticker_sentiment_score: "0.079056",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "NTLA",
            relevance_score: "0.02379",
            ticker_sentiment_score: "-0.008781",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "BHVN",
            relevance_score: "0.02379",
            ticker_sentiment_score: "-0.001871",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "VRTX",
            relevance_score: "0.02379",
            ticker_sentiment_score: "0.067127",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "ABBV",
            relevance_score: "0.035679",
            ticker_sentiment_score: "0.017905",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "CPRX",
            relevance_score: "0.02379",
            ticker_sentiment_score: "0.14181",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "BEAM",
            relevance_score: "0.02379",
            ticker_sentiment_score: "0.057997",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "AZN",
            relevance_score: "0.02379",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "GRCL",
            relevance_score: "0.02379",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "CLNN",
            relevance_score: "0.02379",
            ticker_sentiment_score: "-0.020246",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "GPCR",
            relevance_score: "0.035679",
            ticker_sentiment_score: "0.08972",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "AMPH",
            relevance_score: "0.02379",
            ticker_sentiment_score: "0.14181",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "ARGX",
            relevance_score: "0.011896",
            ticker_sentiment_score: "-0.115274",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "MRNA",
            relevance_score: "0.02379",
            ticker_sentiment_score: "0.067127",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "REGN",
            relevance_score: "0.02379",
            ticker_sentiment_score: "-0.042606",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "ESALF",
            relevance_score: "0.035679",
            ticker_sentiment_score: "0.064761",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "BIIB",
            relevance_score: "0.059429",
            ticker_sentiment_score: "0.106048",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Castor Maritime Inc. Announces the Sale of the M/V Magic Venus for $17.5 Million with an Expected Net Gain of $3.5 Million - Castor Maritime  ( NASDAQ:CTRM ) ",
        url: "https://www.benzinga.com/pressreleases/24/01/g36509463/castor-maritime-inc-announces-the-sale-of-the-mv-magic-venus-for-17-5-million-with-an-expected-net",
        time_published: "20240105T140000",
        authors: ["Globe Newswire"],
        summary:
          "LIMASSOL, Cyprus, Jan. 05, 2024 ( GLOBE NEWSWIRE ) -- Castor Maritime Inc.",
        banner_image:
          "https://www.benzinga.com/next-assets/images/schema-image-default.png",
        source: "Benzinga",
        category_within_source: "News",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Energy & Transportation",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.818451",
          },
        ],
        overall_sentiment_score: 0.121769,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "CTRM",
            relevance_score: "0.169975",
            ticker_sentiment_score: "0.125446",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "MAX Power Extends Lithium Discovery at Willcox with Large Step-Out from First Drill Hole - Max Power Mining  ( OTC:MAXXF ) ",
        url: "https://www.benzinga.com/pressreleases/24/01/g36509457/max-power-extends-lithium-discovery-at-willcox-with-large-step-out-from-first-drill-hole",
        time_published: "20240105T140000",
        authors: ["Globe Newswire"],
        summary:
          'VANCOUVER, British Columbia, Jan. 05, 2024 ( GLOBE NEWSWIRE ) -- MAX Power Mining Corp. MAXXMAXXF FRANKFURT: 89N ) ) ) ( "MAX Power" or the "Company" ) has significantly broadened the discovery footprint at its Willcox Lithium Project in southeast Arizona as first-ever diamond drilling continues ...',
        banner_image:
          "https://www.benzinga.com/next-assets/images/schema-image-default.png",
        source: "Benzinga",
        category_within_source: "General",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.360215",
          },
        ],
        overall_sentiment_score: 0.146081,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "MAXXF",
            relevance_score: "0.079656",
            ticker_sentiment_score: "0.098569",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Inaugural AlUla Falcon Cup Celebrates Nine Days of Spectacular Heritage Sports and Record-Breaking Prizes",
        url: "https://www.benzinga.com/pressreleases/24/01/n36509432/inaugural-alula-falcon-cup-celebrates-nine-days-of-spectacular-heritage-sports-and-record-breaking",
        time_published: "20240105T135800",
        authors: ["PRNewswire"],
        summary:
          "AlUla's Mugharia Heritage Sports Village hosted 2,000 elite falcons and their owners during the first edition of the tournament, held from December 28th to January 5th International contest attracted leading falconers from all over the world for a series of exciting races and traditional ...",
        banner_image:
          "https://www.benzinga.com/next-assets/images/schema-image-default.png",
        source: "Benzinga",
        category_within_source: "General",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Financial Markets",
            relevance_score: "0.108179",
          },
        ],
        overall_sentiment_score: 0.446382,
        overall_sentiment_label: "Bullish",
        ticker_sentiment: [
          {
            ticker: "NNWWF",
            relevance_score: "0.039944",
            ticker_sentiment_score: "0.231861",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "Inaugural AlUla Falcon Cup Celebrates Nine Days of Spectacular Heritage Sports and Record-Breaking Prizes - Canada NewsWire",
        url: "https://www.newswire.ca/news-releases/inaugural-alula-falcon-cup-celebrates-nine-days-of-spectacular-heritage-sports-and-record-breaking-prizes-824541647.html",
        time_published: "20240105T135800",
        authors: [],
        summary:
          "Inaugural AlUla Falcon Cup Celebrates Nine Days of Spectacular Heritage Sports and Record-Breaking Prizes Canada ...",
        banner_image: null,
        source: "Canada Newswire",
        category_within_source: "n/a",
        source_domain: "www.newswire.ca",
        topics: [],
        overall_sentiment_score: 0.454199,
        overall_sentiment_label: "Bullish",
        ticker_sentiment: [
          {
            ticker: "NNWWF",
            relevance_score: "0.042723",
            ticker_sentiment_score: "0.233121",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "Why Healthcare Service Provider Agilon Health  ( AGL )  Shares Are Sinking Today - Agilon Health  ( NYSE:AGL ) ",
        url: "https://www.benzinga.com/markets/equities/24/01/36508293/why-healthcare-service-provider-agilon-health-shares-are-sinking-today",
        time_published: "20240105T135754",
        authors: ["Lekha Gupta"],
        summary:
          "Agilon Health Inc AGL shares are sinking today by around 32% after it disclosed its Chief Financial Officer ( CFO ) retirement and lowered its 2023 outlook. The company's CFO, Timothy Bensley, is retiring from his position within the next nine months this year.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/agl.png?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Markets",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Earnings",
            relevance_score: "0.161647",
          },
          {
            topic: "Life Sciences",
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: 0.224309,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "AGL",
            relevance_score: "0.632565",
            ticker_sentiment_score: "0.047158",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title: "Everything Blockchain Inc. Launches EB Control Enterprise",
        url: "https://www.globenewswire.com/news-release/2024/01/05/2804670/0/en/Everything-Blockchain-Inc-Launches-EB-Control-Enterprise.html",
        time_published: "20240105T135700",
        authors: ["Everything Blockchain", "Inc."],
        summary:
          "New offering supports management and reporting capabilities at the enterprise scale New offering supports management and reporting capabilities at the enterprise scale ...",
        banner_image:
          "https://ml.globenewswire.com/Resource/Download/d33b4254-f19e-43f3-9de1-d6c6fb6a207a",
        source: "GlobeNewswire",
        category_within_source: "n/a",
        source_domain: "www.globenewswire.com",
        topics: [
          {
            topic: "Blockchain",
            relevance_score: "0.682689",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.158519",
          },
        ],
        overall_sentiment_score: 0.312501,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "EBZT",
            relevance_score: "0.248343",
            ticker_sentiment_score: "0.243024",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "Everything Blockchain Inc. Launches EB Control Enterprise - Everything Blockchain  ( OTC:EBZT ) ",
        url: "https://www.benzinga.com/pressreleases/24/01/g36509419/everything-blockchain-inc-launches-eb-control-enterprise",
        time_published: "20240105T135700",
        authors: ["Globe Newswire"],
        summary:
          "Jacksonville, Fla., Jan. 05, 2024 ( GLOBE NEWSWIRE ) -- Everything Blockchain Inc., EBZT, a technology company that is blending blockchain, DBMS and Zero Trust to deliver disruptive new ways to store, manage and protect data, has launched EB Control Enterprise.",
        banner_image:
          "https://www.benzinga.com/next-assets/images/schema-image-default.png",
        source: "Benzinga",
        category_within_source: "General",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Blockchain",
            relevance_score: "0.769861",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.360215",
          },
        ],
        overall_sentiment_score: 0.318823,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "EBZT",
            relevance_score: "0.28387",
            ticker_sentiment_score: "0.269143",
            ticker_sentiment_label: "Somewhat-Bullish",
          },
        ],
      },
      {
        title:
          "'Recent strikes stoke questions about what a Labour government would do instead'",
        url: "https://theweek.com/media/recent-strikes-stoke-questions-about-what-a-labour-government-would-do-instead",
        time_published: "20240105T135530",
        authors: ["The Week UK"],
        summary:
          'Josh Kaplan in The Jewish Chronicle Josh Barrie on the i news site Recent industrial action has revealed a "wider malaise" among young professionals, says , "something the next government will inherit".',
        banner_image:
          "https://cdn.mos.cms.futurecdn.net/xhjmakTj7zyzxToWBvZGo7-415-80.jpg",
        source: "The Week News",
        category_within_source: "n/a",
        source_domain: "theweek.com",
        topics: [],
        overall_sentiment_score: -0.022035,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "FRNWF",
            relevance_score: "0.061003",
            ticker_sentiment_score: "0.059",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "UBER",
            relevance_score: "0.061003",
            ticker_sentiment_score: "0.0",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Tevogen Bio Inc. and Semper Paratus Acquisition Corporation Announce Effectiveness of Registration Statement for Business Combination",
        url: "https://www.globenewswire.com/news-release/2024/01/05/2804668/0/en/Tevogen-Bio-Inc-and-Semper-Paratus-Acquisition-Corporation-Announce-Effectiveness-of-Registration-Statement-for-Business-Combination.html",
        time_published: "20240105T135500",
        authors: ["Semper Paratus Acquisition Corporation"],
        summary:
          'New York, NY, Jan. 05, 2024 ( GLOBE NEWSWIRE ) -- Tevogen Bio Inc ( "Tevogen Bio" ) , an advanced-stage specialty immunotherapy biotech pioneer and Semper Paratus Acquisition Corporation ( "Semper Paratus" ) ( Nasdaq: LGST, LGSTW ) , a publicly-traded special purpose acquisition company, today ...',
        banner_image:
          "https://ml.globenewswire.com/Resource/Download/e7b5d082-d7ef-479d-95ab-3731131b0db8",
        source: "GlobeNewswire",
        category_within_source: "n/a",
        source_domain: "www.globenewswire.com",
        topics: [
          {
            topic: "Mergers & Acquisitions",
            relevance_score: "0.682689",
          },
          {
            topic: "Real Estate & Construction",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.997902",
          },
        ],
        overall_sentiment_score: 0.220097,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "LGST",
            relevance_score: "0.052302",
            ticker_sentiment_score: "0.0836",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Baidu Founder Advocates Shift to AI Applications Amid Rising Homegrown Competition - Baidu  ( NASDAQ:BIDU ) ",
        url: "https://www.benzinga.com/government/24/01/36505708/baidu-founder-advocates-shift-to-ai-applications-amid-rising-homegrown-competition",
        time_published: "20240105T135439",
        authors: ["Anusuya Lahiri"],
        summary:
          "Baidu, Inc BIDU founder Robin Li has urged Chinese entrepreneurs and officials to stop competing in developing large language models and instead focus on creating applications for existing models like Baidu's \"Ernie.\" Despite Li's call, competition has surged, with the number of homegrown models ...",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/baidu_headquarters.jpg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "News",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: -0.028968,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "BABA",
            relevance_score: "0.19117",
            ticker_sentiment_score: "0.070254",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "BIDU",
            relevance_score: "0.602879",
            ticker_sentiment_score: "-0.08135",
            ticker_sentiment_label: "Neutral",
          },
        ],
      },
      {
        title:
          "Marathon Hits New Heights: Bitcoin Miner Reports Record 1,853 Coins Produced In December - Marathon Digital Holdings  ( NASDAQ:MARA ) ",
        url: "https://www.benzinga.com/markets/cryptocurrency/24/01/36506654/marathon-hits-new-heights-bitcoin-miner-reports-record-1-853-coins-produced-in-december",
        time_published: "20240105T135342",
        authors: ["Murtuza Merchant"],
        summary:
          "Marathon Digital Holdings, Inc. MARA, a prominent player in the crypto mining ecosystem, has released unaudited updates on its booming Bitcoin mining operations for December 2023. It reported a significant increase in its Bitcoin BTC/USD mining output, bolstered by higher transaction fees.",
        banner_image:
          "https://cdn.benzinga.com/files/images/story/2024/01/05/crypto_mining4.jpg?width=1200&height=800&fit=crop",
        source: "Benzinga",
        category_within_source: "Markets",
        source_domain: "www.benzinga.com",
        topics: [
          {
            topic: "Real Estate & Construction",
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: 0.332915,
        overall_sentiment_label: "Somewhat-Bullish",
        ticker_sentiment: [
          {
            ticker: "MARA",
            relevance_score: "0.263942",
            ticker_sentiment_score: "0.365043",
            ticker_sentiment_label: "Bullish",
          },
          {
            ticker: "CRYPTO:BTC",
            relevance_score: "0.870696",
            ticker_sentiment_score: "0.45587",
            ticker_sentiment_label: "Bullish",
          },
        ],
      },
      {
        title:
          "Fortis launches institute for specialised treatment of blood cancer",
        url: "https://www.business-standard.com/companies/news/fortis-launches-institute-for-specialised-treatment-of-blood-cancer-124010500966_1.html",
        time_published: "20240105T135216",
        authors: ["Press Trust of India"],
        summary:
          'A well-known private healthcare group, Fortis on Friday inaugurated a state-of-the-art facility for the specialised treatment of blood cancers and disorders, which it said "represented a critical step" in addressing the urgent need for comprehensive holistic care.',
        banner_image:
          "https://bsmedia.business-standard.com/_media/bs/img/article/2018-05/25/full/1527189279-853.jpg?im=FitAndFill=(826,465)",
        source: "Business Standard",
        category_within_source: "GoogleRSS",
        source_domain: "www.business-standard.com",
        topics: [
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
        ],
        overall_sentiment_score: 0.375045,
        overall_sentiment_label: "Bullish",
        ticker_sentiment: [
          {
            ticker: "FTS",
            relevance_score: "0.648497",
            ticker_sentiment_score: "0.597483",
            ticker_sentiment_label: "Bullish",
          },
        ],
      },
      {
        title:
          "Palantir's stock could fall 20% amid 'unsustainable' valuation, a new bear warns",
        url: "https://www.marketwatch.com/story/palantirs-stock-could-fall-20-amid-unsustainable-valuation-a-new-bear-warns-63fcb632",
        time_published: "20240105T135200",
        authors: ["Emily Bary"],
        summary:
          "The controversy over Palantir Technologies shares rages on into the new year.",
        banner_image: "https://images.mktw.net/im-831524/social",
        source: "MarketWatch",
        category_within_source: "Top Stories",
        source_domain: "www.marketwatch.com",
        topics: [
          {
            topic: "Technology",
            relevance_score: "1.0",
          },
          {
            topic: "Financial Markets",
            relevance_score: "0.365926",
          },
        ],
        overall_sentiment_score: -0.086309,
        overall_sentiment_label: "Neutral",
        ticker_sentiment: [
          {
            ticker: "MSFT",
            relevance_score: "0.107016",
            ticker_sentiment_score: "-0.01722",
            ticker_sentiment_label: "Neutral",
          },
          {
            ticker: "PLTR",
            relevance_score: "0.212115",
            ticker_sentiment_score: "-0.186972",
            ticker_sentiment_label: "Somewhat-Bearish",
          },
        ],
      },
    ],
  };

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

  console.log(newsData);

  return (
    <section className="news-container">
      {newsData.length !== 0 &&
        newsData.feed.map((article, index) => {
          const {
            authors,
            banner_image,
            category_within_source,
            overall_sentiment_score,
            summary,
            time_published,
            url,
            title,
          } = article;

          if (banner_image) {
            return (
              <Link to={url} target="_blank">
                <div key={index} className="news-item">
                  <img src={banner_image} alt="image" className="news-img" />
                  <div className="news-title">{title}</div>
                  {/* <div className="news-summary">{summary}</div> */}
                </div>
              </Link>
            );
          }
        })}
    </section>
  );
};
export default News;
