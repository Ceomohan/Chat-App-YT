import React from 'react'

const GenderCheckbox = ({ onChangeCheckBox, selectedGender }) => {
    return (
        <div className="flex">
            {/* Male Checkbox */}
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "Selected" : ""}`}>
                    <span className="label-text">Male</span>
                </label>
                <input type="checkbox" className="checkbox border-slate-900"
                    checked={selectedGender}
                    onChange={() => onChangeCheckBox("male")}
                />
            </div>
            {/* Female checkbox */}
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "Selected" : ""} `}>
                    <span className="label-text">Female</span>
                </label>
                <input type="checkbox" className="checkbox border-slate-900"
                    checked={selectedGender}
                    onChange={() => onChangeCheckBox("female")}
                />
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