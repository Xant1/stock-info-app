import DataList from './DataList';

const Table = ({ currentStocks, setData }) => {
  return (
    <div className='table-container'>
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <span>N</span>
              </th>
              <th>
                <span>Ticker</span>
              </th>
              <th>
                <span>askPrice</span>
              </th>
              <th>
                <span>askSize</span>
              </th>
              <th>
                <span>bidPrice</span>
              </th>
              <th>
                <span>bidSize</span>
              </th>
              <th>
                <span>lastSalePrice</span>
              </th>
              <th>
                <span>lastSaleSize</span>
              </th>
              <th>
                <span>lastSaleTime</span>
              </th>
              <th>
                <span>lastUpdated</span>
              </th>
              <th>
                <span>sector</span>
              </th>
              <th>
                <span>securityType</span>
              </th>
              <th>
                <span>volume</span>
              </th>
            </tr>
          </thead>
          <DataList data={currentStocks} setData={setData} />
        </table>
      </div>
    </div>
  );
};

export default Table;
