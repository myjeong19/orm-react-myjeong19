import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ARTICLE = {
  title: '',
  contents: '',
};

function ArticleRegist() {
  const [article, setArticle] = useState(ARTICLE);
  const { title, contents } = article;

  const navigate = useNavigate();

  const handleArticle = e =>
    setArticle({ ...article, [e.target.name]: e.target.value });

  const handleSave = () => {
    // navigate('/');
    navigate('/product/category/500');
  };

  return (
    <div>
      <h1>게시글 등록</h1>
      <div>
        <label htmlFor=''>제목</label>
        <input type='text' value={title} onChange={handleArticle} />
      </div>

      <div>
        <label htmlFor=''>내용</label>
        <textarea name='' id='' cols='30' rows='10'>
          {contents}
        </textarea>
      </div>

      <button onClick={handleSave}>저장</button>
    </div>
  );
}

export default ArticleRegist;
