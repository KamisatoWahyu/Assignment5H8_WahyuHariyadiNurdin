import React from 'react';

const ShowCurrency = ( {currency} ) => {  
    const weBuy = (currency) => {
        return (parseFloat(currency) * 1.05).toFixed(4);
    }
    const exchange = (currency) => {
        return (parseFloat(currency)).toFixed(4);
    }
    const weSale = (currency) => {
        return (parseFloat(currency) * 0.95).toFixed(4);
    }

    return(
        <div className='container d-flex flex-column justify-content-center align-items-center'>
            <table className='table-default text-light text-center' width='50%'>
                <thead>
                    <tr>
                        <th><b>Currency</b></th>
                        <th><b>We Buy</b></th>
                        <th><b>Exchange Rate</b></th>
                        <th><b>We Sale</b></th>
                    </tr> 
                </thead>
                <tbody>
                    {Object.keys(currency).map((key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{weBuy(currency[key])}</td>
                            <td>{exchange(currency[key])}</td>
                            <td>{weSale(currency[key])}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <hr />
                <p className='text-light text-center'>Rates are based from 1 USD <br />This application uses API from https://currencyfreak.com</p>
            
        </div>
    )
}

export default ShowCurrency;
