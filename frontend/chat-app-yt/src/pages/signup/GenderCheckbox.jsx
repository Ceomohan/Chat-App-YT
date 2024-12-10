import React from 'react'

const GenderCheckbox = () => {
    return (
        <div className="flex">
            {/* Male Checkbox */}
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-text">Male</span>
                </label>
                <input type="checkbox" className="checkbox border-slate-900" />
            </div>
            {/* Female checkbox */}
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="label-text">Female</span>
                </label>
                <input type="checkbox" className="checkbox border-slate-900" />
            </div>
        </div>
    )
}

export default GenderCheckbox

// STARTER CODE FOR GENDER CHECK BOX
// const GenderCheckbox = () => {
//     return (
//         <div className="flex">
//             {/* Male Checkbox */}
//             <div className="form-control">
//                 <label className={`label gap-2 cursor-pointer`}>
//                     <span className="label-text">Male</span>
//                 </label>
//                 <input type="checkbox" className="checkbox border-slate-900" />
//             </div>
//             {/* Female checkbox */}
//             <div className="form-control">
//                 <label className={`label gap-2 cursor-pointer`}>
//                     <span className="label-text">Female</span>
//                 </label>
//                 <input type="checkbox" className="checkbox border-slate-900" />
//             </div>
//         </div>
//     )
// }

// export default GenderCheckbox