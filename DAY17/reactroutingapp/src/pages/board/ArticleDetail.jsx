// import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

function ArticleDetail() {
  // const { idx } = useParams();
  // const {idx} match.params;
  const [searchParams, setSearchParams] = useSearchParams();

  const aidx = searchParams.get('aidx');

  return (
    <main>
      <h3>ArticleDetail</h3>
      <strong>{aidx}</strong>
    </main>
  );
}

export default ArticleDetail;
