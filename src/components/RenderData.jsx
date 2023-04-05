import React from 'react';

const RenderData = ({
  count,
  ticker,
  askPrice,
  askSize,
  bidPrice,
  bidSize,
  lastSalePrice,
  lastSaleSize,
  lastSaleTime,
  lastUpdated,
  sector,
  securityType,
  volume,
}) => {
  return (
    <tbody>
      <tr>
        <td>{count}</td>
        <td>{ticker}</td>
        <td>{askPrice}</td>
        <td>{askSize}</td>
        <td>{bidPrice}</td>
        <td>{bidSize}</td>
        <td>{lastSalePrice}</td>
        <td>{lastSaleSize}</td>
        <td>{lastSaleTime}</td>
        <td>{lastUpdated}</td>
        <td>{sector}</td>
        <td>{securityType}</td>
        <td>{volume}</td>
      </tr>
    </tbody>
  );
};

export default RenderData;
