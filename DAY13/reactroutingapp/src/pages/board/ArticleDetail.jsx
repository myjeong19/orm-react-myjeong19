// import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

function ArticleDetail() {
  // const { idx } = useParams();
  // const {idx} match.params;
  const [searchParams, setSearchParams] = useSearchParams();

  const aidx = searchParams.get('aidx');
  const stock = searchParams.get('stock');

  return (
    <main>
      <h3>ArticleDetail</h3>
      <strong>
        {aidx} {stock}
      </strong>
      {/* <strong>{match}</strong> */}
    </main>
  );
}

export default ArticleDetail;
