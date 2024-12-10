import React from 'react'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding bg-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-gray-400 font-semibold text-3xl text-center">
          Login
          <span className="text-blue-500">ChatApp</span>
        </h1>
        {/* form for login page */}
        <form>
          {/* username field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">username</span>
              <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
            </label>
          </div>
          {/* password field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">username</span>
              <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
            </label>
          </div>

          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            {"Don't"} have an account ?
          </a>
          {/* button field */}
          <div className="btn btn-block btn-sm mt-2">
            Login
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login


// STARTER CODE FOR THIS PROJECT 
// import React from 'react'

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding bg-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-gray-400 font-semibold text-3xl text-center">
//           Login
//           <span className="text-blue-500">ChatApp</span>
//         </h1>
//         {/* form for login page */}
//         <form>
//           {/* username field */}
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">username</span>
//               <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
//             </label>
//           </div>
//           {/* password field */}
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">username</span>
//               <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//             </label>
//           </div>

//           <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//             {"Don't"} have an account ?
//           </a>
//           {/* button field */}
//           <div className="btn btn-block btn-sm mt-2">
//             Login
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login