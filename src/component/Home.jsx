import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../fetures/counter/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchparam, setSearchparam] = useSearchParams();
  const pastedId = searchparam.get('pasteId');
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pates);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      id: pastedId || Date.now().toString(34),
      createdAt: new Date().toISOString(),
    };

    if (pastedId) {
      // update
      dispatch(updateToPastes(paste));
    } else {
      // create
      dispatch(addToPastes(paste));
    }

    // after writing and searching
    setTitle('');
    setValue('');
    setSearchparam({});
  }

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen  w-[410px] lg:w-full px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center w-full max-w-2xl">
        <input
          className="border p-3 w-full md:w-[300px] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          type="text"
          placeholder="Write Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={createPaste}
          className="border p-3 w-full md:w-auto rounded-lg bg-gray-200 hover:bg-gray-400 transition duration-200"
        >
          {pastedId ? 'Update My Paste' : 'Create My Paste'}
        </button>
      </div>
      <div className="mt-6 w-full max-w-2xl">
        <textarea
          className="border rounded-lg w-full h-60  p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          value={value}
          placeholder="Enter text here"
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
