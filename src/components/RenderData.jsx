import React, { useState } from 'react';

const RenderData = ({ data, setData }) => {
  const [currentStock, setCurrentStock] = useState(null);

  // drag and drop features
  function dragStartHandler(e, stock) {
    setCurrentStock(stock);
  }

  function dragEndHandler(e) {
    e.target.style.background = 'white';
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = 'aqua';
  }

  function dropHandler(e, stock) {
    e.preventDefault();
    setData(
      data.map((s) => {
        if (s.id === stock.id) {
          return { ...s, order: currentStock.order };
        }
        if (s.id === currentStock.id) {
          return { ...s, order: stock.order };
        }
        return s;
      })
    );
    e.target.style.background = 'white';
  }

  const sortStocks = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <tbody>
      {data.sort(sortStocks).map((stock) => (
        <tr
          key={stock.id}
          onDragStart={(e) => dragStartHandler(e, stock)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, stock)}
          draggable={true}>
          <td>{stock.id}</td>
          <td>{stock.symbol}</td>
          <td>{stock.askPrice}</td>
          <td>{stock.askSize}</td>
          <td>{stock.bidPrice}</td>
          <td>{stock.bidSize}</td>
          <td>{stock.lastSalePrice}</td>
          <td>{stock.lastSaleSize}</td>
          <td>{stock.lastSaleTime}</td>
          <td>{stock.lastUpdated}</td>
          <td>{stock.sector}</td>
          <td>{stock.securityType}</td>
          <td>{stock.volume}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default RenderData;
