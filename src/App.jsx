import { useState, useEffect, useMemo } from 'react';
import './App.css';
import axios from 'axios';
import { Pagination } from 'antd';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  const [data, setData] = useState([]);
  const [sortSelect, setSortSelect] = useState('');
  const [count, setCount] = useState([1])
  //fetching data
  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        'https://cloud.iexapis.com/stable/tops?token=sk_19e94b0acff34f42b04f6653ffb731e4'
      );
      setData(response.data);
      setTotal(response.data.length);
      
    };
    loadData();
  }, []);

  console.log(count);
  const sortedData = useMemo(() => {
    if (sortSelect) {
      return data.filter((item) =>
        item.symbol.toLowerCase().includes(sortSelect)
      );
    }
    return data;
  }, [sortSelect, data]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [total, setTotal] = useState('');
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = sortedData.slice(firstPostIndex, lastPostIndex);

  const onShowSizeChanger = (current, pageSize) => {
    setPostsPerPage(pageSize);
  };

  return (
    <div className='App'>
      <div>
        <Filter sortSelect={sortSelect} setSortSelect={setSortSelect} />
        <div></div>
        <Table currentPosts={currentPosts} />
        <Pagination
          onChange={(value) => setCurrentPage(value)}
          pageSize={postsPerPage}
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
