import React from "react"
import StoryCard from "./storyCard"

const StoryList = ({stories}) => {
  return (
    <div>
      <h2 className="sr-only">Recent Stories</h2>
      <div className="row card-list">
      {
        stories.map(({node}) => {
          return (
            <StoryCard key={node.id} story={node} />
          )
        })
      }
      </div>
    </div>
  )
}

export default StoryList