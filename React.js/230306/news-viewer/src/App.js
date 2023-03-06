import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  // const onClick = () => {
  //     axios
  //         .get('https://jsonplaceholder.typicode.com/todos/1')
  //         .then((response) => {
  //             console.log(response);
  //             setData(response.data);
  //         });
  // };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {/* null이면 거짓이어서 수행 안할것 */}
      {data && (
        <textarea
          rows={7}
          cols={50}
          value={JSON.stringify(data, null, 2)}
          // 2는 들여쓰기
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
