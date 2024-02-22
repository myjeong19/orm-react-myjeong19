import { useState } from 'react';

import './App.css';
import { Form } from './components/Form';
import { List } from './components/List';

const LIST = [
  {
    number: 0,
    title: '햄버거 먹고싶다.',
    contents: '그냥 먹고 싶다. 오늘 먹을까...?',
    registrant: '정민영',
  },
  {
    number: 1,
    title: '성원님 취업 축하해요 !!!!!!!',
    contents: '모두 목표가 이뤄지는 한 해가 되길 바랍니다 파이팅!!!',
    registrant: '정민일',
  },
];

const USER_VALUES = {
  title: '',
  contents: '',
  registrant: '',
};

function App() {
  const [list, setList] = useState(LIST);
  const [userValues, setUserValues] = useState(USER_VALUES);

  const handleList = (targetName, userValue) => {
    const actions = {
      add: () => {
        setList(prevList => {
          const updatedUserValues = {
            ...userValue,
            number: prevList.length,
          };
          return [...prevList, updatedUserValues];
        });
      },
      edit: () => {
        setList(prevList => {
          return prevList.map(item => {
            if (item.number === userValue.number) {
              return {
                ...item,
                ...userValue,
              };
            }
            return item;
          });
        });
      },
      delete: () => {
        setList(prevList => {
          const filterdList = prevList.filter(
            item => item.number !== userValue.number
          );
          return filterdList;
        });
      },
      reset: () => {
        setUserValues(USER_VALUES);
      },
    };

    setUserValues(USER_VALUES);
    return actions[targetName]();
  };

  return (
    <>
      <Form
        onList={handleList}
        userValues={userValues}
        onValues={setUserValues}
      />
      <List list={list} onUserValues={setUserValues} />
    </>
  );
}

export default App;
