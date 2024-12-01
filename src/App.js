// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import ShowCurrency from './components/ShowCurrency';

function App() {
  const [currency, setCurrency] = useState([]);
    useEffect(() => {
        const fetchCurrencyRates = async () => {
            try {
              const res = await axios.get('https://api.currencyfreaks.com/v2.0/rates/latest', {
                params: {     
                  'apikey': '7a82b80d647446319fc7adf8c28b9410',        
                }
              });
              
              const data = res.data.rates;
              const range = ["CAD", "EUR", "IDR", "JPY", "CHR", "GBP"];   
              const selectedItems = {};
          
              for (let key in data) {
                if (range.includes(key)) {
                  selectedItems[key] = data[key];
                }
              }
          
              setCurrency(selectedItems);
            } catch (error) {
              console.error("Fetch error: ", error);
            }
          };
          
          fetchCurrencyRates();
          
        }, []);
   
  return (
      <ShowCurrency 
        currency={currency}
      />
  );
}

export default App;
