import classes from './css/List.module.css';

export const List = ({ list, onUserValues }) => {
  const elementList = list.map(item => {
    const { number, title, contents, registrant } = item;

    const handleSelect = userValue => onUserValues(userValue);

    return (
      <tr key={number} className={classes.trtd}>
        <td>{number}</td>
        <td>{title}</td>
        <td>{contents}</td>
        <td>{registrant}</td>
        <td>
          <button onClick={() => handleSelect(item)}>선택</button>
        </td>
      </tr>
    );
  });

  return (
    <table className={classes.tabel}>
      <thead>
        <tr className={classes.trth}>
          <th className={classes.th}>글 순번</th>
          <th className={classes.th}>제목</th>
          <th className={classes.th}>내용</th>
          <th className={classes.th}>등록자</th>
          <th className={classes.th}>선택</th>
        </tr>
      </thead>
      <tbody>{elementList}</tbody>
    </table>
  );
};
