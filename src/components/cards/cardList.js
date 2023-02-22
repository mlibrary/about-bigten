import React from "react"
import Card from "./card"

const CardList = ({cards}) => {

  return (
    <div>
      <h2 className="sr-only">Recent Cards</h2>
      <div className="row card-list">
      {
        cards.map(({node}) => {
          return (
            <Card key={node.id} cardImage={node.fields.cardImage} card={node.frontmatter} />
          )
        })
      }
      </div>
    </div>
  )
}

export default CardList
