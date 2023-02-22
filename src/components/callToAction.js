import React from "react"
import {Link} from "gatsby"

const CallToAction = ({callToAction}) => {
  return (
    <div className="container">
      <div className="row"> 
        <div className="col-md-6">
          <p>{callToAction.description}</p>
        </div>
        <div className="col-md-6 text-center">
          {
            callToAction.buttonUrl.startsWith("/")
            ? <Link className="btn btn-secondary" to={callToAction.buttonUrl}>{callToAction.buttonLabel}</Link>
            : <a className="btn btn-secondary" href={callToAction.buttonUrl}>{callToAction.buttonLabel}</a>
          }
        </div>
      </div>
    </div>
  )
}


export default CallToAction
