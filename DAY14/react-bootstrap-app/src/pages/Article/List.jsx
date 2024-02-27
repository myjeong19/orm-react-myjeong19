import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ARTICLES } from '../../Articles';

export const List = () => {
  const [articles, setArticles] = useState(ARTICLES);

  const elementArticles = articles.map(article => (
    <li className='card'>
      <img src={article.image} className='card-img-top  ' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{article.title}</h5>
        <p className='card-text'>{article.contents}</p>
        <Link to='#' className='btn btn-primary'>
          Go somewhere
        </Link>
      </div>
    </li>
  ));

  return <ul>{elementArticles}</ul>;
};
