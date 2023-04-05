import MusicList from './MusicList';

const Table = ({currentPosts }) => {
  return (
    <div className='table-container'>
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <span style={{ marginRight: 10 }}>Count</span>
              </th>
              <th>
                <span style={{ marginRight: 10 }}>Ticker</span>
              </th>
              <th>
                <span style={{ marginRight: 10 }}>askPrice</span>
              </th>
              <th>
                <span style={{ marginRight: 10 }}>askSize</span>
              </th>
              <th>
                <span style={{ marginRight: 10 }}>bidPrice</span>
              </th>
              <th>
                <span style={{ marginRight: 10 }}>bidSize</span>
              </th>
              <th>
                <span style={{ marginRight: 10 }}>lastSalePrice</span>
              </th>
              <th>
                <span style={{ marginRight: 10 }}>lastSaleSize</span>
              </th>
              <th>
                <span style={{ marginRight: 10 }}>lastSaleTime</span>
              </th>
              <th>
                <span style={{ marginRight: 10 }}>lastUpdated</span>
              </th>
              <th>
                <span style={{ marginRight: 10 }}>sector</span>
              </th>
              <th>
                <span style={{ marginRight: 10 }}>securityType</span>
              </th>
              <th>
                <span style={{ marginRight: 10 }}>volume</span>
              </th>
            </tr>
          </thead>
          <MusicList data={currentPosts} />
        </table>
      </div>
    </div>
  );
};

export default Table;
