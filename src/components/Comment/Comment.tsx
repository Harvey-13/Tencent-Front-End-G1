import React, { useState } from 'react';
import { Input } from 'antd';

interface IComment {
  name: String;
  content: String;
}
export default function Comment() {
  const [comment, setComment]: [IComment[], any] = useState([]);
  const [content] = useState('');
  const [name] = useState('');
  const { Search } = Input;

  const renderList = () => {
    if (comment.length === 0) {
      return <div className='no-comment'>no comment msg</div>;
    }

    return (
      <ul>
        {comment.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    );
  };

  const formHandler = (e: any) => {
    const { name, value } = e.target;
    const fn = 'set' + name;
    eval(fn + `(${value})`);
  };

  const clickHandler = () => {
    let newComment: IComment = {
      name,
      content,
    };
    setComment([...comment, newComment]);
  };
  const onSearch = (value: any) => console.log(value);

  return (
    <div className='comment-container'>
      <div className='input-container'>
        <Search placeholder='input search text' allowClear enterButton='Search' size='large' onSearch={onSearch} />
        <input type='text' className='commentor' name='Name' value={name} onChange={formHandler} />
        <br />
        <textarea
          cols={30}
          rows={10}
          className='content'
          placeholder='input something'
          value={content}
          name='Content'
          onChange={formHandler}
        />
        <br />
        <button onClick={clickHandler}>submit</button>
      </div>

      {renderList()}
    </div>
  );
}
