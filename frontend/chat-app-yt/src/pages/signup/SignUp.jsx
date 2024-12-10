import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md backdrop-blur-lg backdrop-filter bg-clip-padding bg-gray-400 bg-opacity-0">
        <h1 className="text-3xl text-gray-200 text-center font-semibold">
          Sign Up
          <span className="text-blue-600"> ChatApp</span>
        </h1>
        {/* form for the signup page */}
        <form>
          {/* full name field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type='text' placeholder='Enter FullName' className=" w-full  input input-bordered h-10 " />
          </div>
          {/* username field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type='text' placeholder='Enter Username' className=" w-full  input input-bordered h-10 " />
          </div>
          {/* password field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type='Password' placeholder='Enter Password' className=" w-full  input input-bordered h-10 " />
          </div>
          {/* confirm password */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type='Password' placeholder='Enter Password' className=" w-full  input input-bordered h-10 " />
          </div>
          {/* here goes the check box */}
          <GenderCheckbox />

          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-1 inline-block ">
            Already have an Account
          </a>
          {/* this is button field */}
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700 ">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp

// THIS IS THE STARTER CODE FOR SIGNUP PAGE
// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md backdrop-blur-lg backdrop-filter bg-clip-padding bg-gray-400 bg-opacity-0">
//         <h1 className="text-3xl text-gray-200 text-center font-semibold">
//           Sign Up
//           <span className="text-blue-600"> ChatApp</span>
//         </h1>
//         {/* form for the signup page */}
//         <form>
//           {/* full name field */}
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input type='text' placeholder='Enter FullName' className=" w-full  input input-bordered h-10 " />
//           </div>
//           {/* username field */}
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input type='text' placeholder='Enter Username' className=" w-full  input input-bordered h-10 " />
//           </div>
//           {/* password field */}
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input type='Password' placeholder='Enter Password' className=" w-full  input input-bordered h-10 " />
//           </div>
//           {/* confirm password */}
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input type='Password' placeholder='Enter Password' className=" w-full  input input-bordered h-10 " />
//           </div>
//           {/* here goes the check box */}
//           <GenderCheckbox />

//           <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block ">
//             Already have an Account
//           </a>
//           {/* this is button field */}
//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700 ">
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp