import React from 'react'

export default function About(props) {

  return (
    <div className={`text-${props.mode.text}`}  >
    <h1>About Us</h1>
    <div className="accordion" id="accordionExample">
        <div className={`accordion-item text-${props.mode.text} bg-${props.mode.bg} border-${props.mode.bg}`}  >
        <h2 className="accordion-header" id="headingOne">
            <button className={`accordion-button text-${props.mode.text} bg-${props.mode.bg} border-${props.mode.bg}`}    type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What is TextUtils?
            </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <p>TextUtils is utility tool that can be used to modify text using to the utility options available.</p>
            </div>
        </div>
        </div>
        <div className={`accordion-item text-${props.mode.text} bg-${props.mode.bg} border-${props.mode.bg}`}  >
        <h2 className="accordion-header" id="headingTwo">
            <button className={`accordion-button collapsed text-${props.mode.text} bg-${props.mode.bg} border-${props.mode.bg}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Who Made TextUtils?
            </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <p>TextUtils was created by Relic while learning how to use React js from CodeWithHarry on Youtube.</p>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}
