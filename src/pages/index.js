import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(data)
  const meta = data?.site?.siteMetadata ?? {}

  return (
    <>
      <header>
        <Link to="/">{meta.title}</Link>
      </header>

      <main>
        <h1>Hello Ninjan</h1>
        <Link to="/about">About this site</Link>
      </main>
    </>
  )
}
