// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Form, useParams, useSearchParams } from 'react-router-dom'
// import { addToPastes,updateToPastes} from '../fetures/counter/pasteSlice'
// import { useEffect } from 'react'



// const Edit = () => {
//     const {id} =useParams()
//     const pastes= useSelector((state)=>state.paste.pates)
//     const filter= pastes.filter((p)=>p.id ===id)[0];
    
//       const [value, setValue]=useState(filter.title || '') 
//       const [title,setTitle]=useState(filter.content || '' )
      

//       const dispatch = useDispatch()
        

//   return (
//     <div>
//         <div>
//        <div className='flex flex-col items-center '>
//             <div className='flex flex-row gap-24 '>
//                 <input 
                
//                 className='border p-3 mt-6 w-[300px] rounded-lg'
//                 type="text" placeholder='Write Title' value={title} 
//                 onChange={(e)=>setTitle(e.target.value)} />
                
//                 <button 
//                 onClick={()=>dispatch(updateToPastes({id,title,content : value}))}
                
//                 className='border p-3 mt-6 rounded-lg   bg-red-100'>
//                update Paste
//                 </button>
//             </div>
//             <div >
//                 <textarea  
                
//                 className="border rounded-2xl mt-4 w-[550px] p-5"
//                 value={value} 
//                 placeholder='enter text here' rows={20}
//                    onChange={(e)=>setValue(e.target.value)}
//                  ></textarea>
//             </div>
//     </div>

//     </div>
//     </div>
//   )
// }

// export default Edit
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateToPastes } from "../fetures/counter/pasteSlice";

const Edit = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.paste.pates);
  const filter = pastes.filter((p) => p.id === id)[0];

  const [value, setValue] = useState(filter.content || "");
  const [title, setTitle] = useState(filter.title || "");

  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateToPastes({ id, title, content: value }));
  };

  return (
    <div className="flex flex-col items-center  w-[410px] lg:w-full bg-gray-50 min-h-screen px-6 py-8">
      <h1 className="text-3xl font-bold text-green-500 mb-6">Edit Paste</h1>

      {/* Title Input */}
      <div className="flex flex-col items-center space-y-4 w-full max-w-lg">
        <input
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
          type="text"
          placeholder="Write Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Update Button */}
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Update Paste
        </button>
      </div>

      {/* Content Textarea */}
      <div className="w-full max-w-2xl mt-6">
        <textarea
          className="border rounded-lg w-full p-4 h-[300px] focus:ring-2 focus:ring-blue-400 outline-none resize-none"
          value={value}
          placeholder="Enter content here..."
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Edit;
