class Article {
  constructor(title, contents, image) {
    this.title = title;
    this.contents = contents;
    this.image = image;
  }
}

export const ARTICLES = [
  new Article(
    '제목1',
    '내용1',
    'https://images.unsplash.com/photo-1708876954270-8fad10609e53?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8'
  ),
  new Article(
    '제목2',
    '내용2',
    'https://images.unsplash.com/photo-1708585948246-6067272a0992?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8'
  ),
];
