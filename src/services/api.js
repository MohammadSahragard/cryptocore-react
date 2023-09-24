import axios from 'axios';
// import 




// Get cryptocurrency global data
const globalData = async () => {
    const data = await axios.get ('https://api.coingecko.com/api/v3/global');

    return data.data;
};




// 	List all coins with market data
const getCryptoCurrencies = async (targetCurrency = 'USD', currentPage = 0) => {
    axios.defaults.baseURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${targetCurrency}&order=market_cap_desc&per_page=100&page=${currentPage}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en`;
    const data = await axios.get ();

    return data;
};


// Get current data for a coin
const getDetailCryptoCurrency = async coinId => {
    const coinData = await axios.get (`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=true&developer_data=true`);

    return coinData;
};

const getChartData = async (coinId, selectedCurrency = 'USD', days = 1) => {
    const coinChart = await axios.get (`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${selectedCurrency}&days=${days}`);

    return coinChart;
};

const getOHLCData = async (coinId, selectedCurrency = 'USD', days = 1) => {
    const OHLC = await axios.get (`https://api.coingecko.com/api/v3/coins/${coinId}/ohlc?vs_currency=${selectedCurrency}&days=${days}`);

    return OHLC;
};




// 	List of coins, categories and markets matching search term ordered by market cap
const searchCoin = async () => {
    const data = await axios.get ('https://api.coingecko.com/api/v3/search?query');

    return data.coins;
};




// List trending coins by most popular first
const top7TrendingCoin = async () => {
    const data = await axios.get ('https://api.coingecko.com/api/v3/search/trending');

    return data.coins;
};






export { 
    globalData,
    getCryptoCurrencies,
    getDetailCryptoCurrency,
    getChartData,
    getOHLCData,
    searchCoin,
    top7TrendingCoin
};