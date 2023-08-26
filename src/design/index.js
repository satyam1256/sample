import { getByDisplayValue } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import './styles.css';

import d from './help.json'; 


const Index = () => {
    const [curr, setCurr] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            const result = d.pairs.map((item) => ({
                chainId: item.chainId,
                dexId: item.dexId,
                symbol: item.baseToken.symbol,
                name: item.baseToken.name,
                price: item.priceUsd,
                volume: item.volume.h24,
                liquidity: item.liquidity.usd,
            }));
            setCurr(result);
        };
        fetchData();
    }, []);

    return (
        <div className='poi'>
            <h1 className="heading">Token Information</h1>
        <div className="token-container">
            {curr.map((item, index) => (
                <div className="dem">
                    <div className="card">
                        <div className="token-info">{"chainId"+" : "+item.chainId}</div>
                            <div className="token-info">{"dexId"+" : "+item.dexId}</div>
                            <div className="token-info">{"symbol"+" : "+item.symbol}</div>
                            <div className="token-info">{"name"+" : "+item.name}</div>
                            <div className="token-info">{"price"+" : "+item.price}</div>
                            <div className="token-info">{"volume"+" : "+item.volume}</div>
                            <div className="token-info">{"liquidity"+" : "+item.liquidity}</div>
                    </div>
                </div> 
            ))}
        </div>
        </div>
        
    );
};

export default Index;
