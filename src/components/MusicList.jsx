import React from 'react';

import RenderData from './RenderData';

const MusicList = ({ data }) => {

  
  return data.map((d, i) => {

    return (
      <RenderData
        key={i}
        count={++i}
        ticker={d.symbol}
        askPrice={d.askPrice}
        askSize={d.askSize}
        bidPrice={d.bidPrice}
        bidSize={d.bidSize}
        lastSalePrice={d.lastSalePrice}
        lastSaleSize={d.lastSaleSize}
        lastSaleTime={d.lastSaleTime}
        lastUpdated={d.lastUpdated}
        sector={d.sector}
        securityType={d.securityType}
        volume={d.volume}
      />
    );
  });
};

export default MusicList;
