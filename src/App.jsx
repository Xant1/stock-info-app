import { useState, useEffect } from 'react';
import './App.css';
import { Pagination } from 'antd';
import Table from './components/Table';
import fetchData from './API/fetchData';

function App() {
  const [data, setData] = useState([]);

  //fetching data
  useEffect(() => {
    (async () => {
      const response = await fetchData();
      setData(response.data.map((d, i) => ({ id: i + 1, order: i, ...d })));
      setTotal(response.data.length);
    })();
  }, []);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [stocksPerPage, setStocksPerPage] = useState(10);
  const [total, setTotal] = useState('');
  const lastStockIndex = currentPage * stocksPerPage;
  const firstStockIndex = lastStockIndex - stocksPerPage;
  const currentStocks = data.slice(firstStockIndex, lastStockIndex);

  const onShowSizeChanger = (current, pageSize) => {
    setStocksPerPage(pageSize);
  };

  return (
    <div className='App'>
      <div>
        <Table currentStocks={currentStocks} setData={setData} />
        <Pagination
          onChange={(value) => setCurrentPage(value)}
          pageSize={stocksPerPage}
          total={total}
          current={currentPage}
          showSizeChanger
          showQuickJumper
          onShowSizeChange={onShowSizeChanger}
          style={{ marginTop: '15px' }}
        />
      </div>
    </div>
  );
}
export default App;
