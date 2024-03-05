import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ArticleList() {
  const [articleList, setArticleList] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch('http://localhost:3005/api/articles');
      const articles = await response.json();
      setArticleList(articles.data);
    };
    fetchArticle();
  }, []);

  return (
    <main>
      <header className='article-header'>
        <h3>ArticleList</h3>

        <div className='article-header__nav'>
          <h4>게시글 목록</h4>
          <Link to='/article'>글 작성</Link>
        </div>
      </header>

      <table className='tabel'>
        <thead>
          <tr>
            <th scope='col'>글 번호</th>
            <th scope='col'>제목</th>
            <th scope='col'>글쓴이</th>
            <th scope='col'>조회수</th>
            <th scope='col'>등록일시</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </main>
  );
}

export default ArticleList;
