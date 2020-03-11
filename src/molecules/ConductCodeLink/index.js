import React from "react"
import { Link } from "gatsby"
import { withPrefix } from "../../../.cache/gatsby-browser-entry"

const ConductCodeLink = ({ openInNew, ...props }) => {
  const Component = openInNew ? "a" : Link
  const path = "/codigo-de-conduta"
  props = {
    href: openInNew ? withPrefix(path) : null,
    rel: openInNew ? "noopener noreferrer" : null,
    target: openInNew ? "_blank" : "_self",
    to: openInNew ? null : path,
    ...props,
  }
  return <Component {...props}>Código&nbsp;de&nbsp;Conduta</Component>
}

export default ConductCodeLink
