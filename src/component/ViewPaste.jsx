
// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Form, useParams, useSearchParams } from 'react-router-dom'
// import { addToPastes,updateToPastes} from '../fetures/counter/pasteSlice'
// import { useEffect } from 'react'

// const ViewPaste = () => {
//   const [value, setValue]=useState() 
//   const [title,setTitle]=useState()
//   const {id} =useParams()
  
//   const pastes= useSelector((state)=>state.paste.pates)
//   const filter= pastes.filter((p)=>p.id ===id)[0];
  
//   return (
//     <div>
//        <div className='flex flex-col items-center '>
//             <div className='flex flex-row gap-24 '>
//                 <input 
//                 disabled
//                 className='border p-3 mt-6 w-[300px] rounded-lg'
//                 type="text" placeholder='Write Title' value={filter.title} 
//                 onChange={(e)=>setTitle(e.target.value)} />
                
//                 {/* <button 
//                 onClick={createPaste}
//                 className='border p-3 mt-6 rounded-lg   bg-red-100'>
//                     {pastedId ? "update my paste": "Create my Paste"}
//                 </button> */}
//             </div>
//             <div >
//                 <textarea  
//                 disabled
//                 className="border rounded-2xl mt-4 w-[550px] p-5"
//                 value={filter.content} 
//                 placeholder='enter text here' rows={20}
//                    onChange={(e)=>setValue(e.target.value)}
//                  ></textarea>
//             </div>
//     </div>

//     </div>
//   )
// }

// export default ViewPaste
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewPaste = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.paste.pates);
  const filter = pastes.filter((p) => p.id === id)[0];

  return (
    <div className="flex flex-col items-center bg-gray-50  w-[410px] lg:w-full min-h-screen px-4 py-8">
      {/* Title Section */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl">
        <input
          disabled
          className="border p-3 w-full md:w-[300px] rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          type="text"
          placeholder="Write Title"
          value={filter?.title || ''}
        />
      </div>

      {/* Content Section */}
      <div className="mt-6 w-full max-w-2xl">
        <textarea
          disabled
          className="border rounded-lg w-full h-60 md:h-[300px] p-4 bg-gray-100 text-gray-500 cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          value={filter?.content || ''}
          placeholder="Enter text here"
          rows={20}
        ></textarea>
      </div>
    </div>
  );
};

export default ViewPaste;
