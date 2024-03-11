import React from 'react';

import { useSearchParams } from 'react-router-dom';

const Detail = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const aidx = searchParams.get('aidx');
  const stock = searchParams.get('stock');

  return (
    <div>
      <h1>게시글 상세 정보 웹페이지</h1>
      <h3>추출된 쿼리스트링 값 aidx = {aidx}</h3>
      <h3>추출된 쿼리스트링 값 stock = {stock}</h3>
    </div>
  );
};

export default Detail;
