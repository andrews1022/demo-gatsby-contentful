# Demo: Gatsby + Contentful

This is just me testing out using Contentful Gatsby Starter Blog with TypeScript & Styled Components.

GitHub page [here](https://github.com/contentful/starter-gatsby-blog).

Gatsby page [here](https://www.gatsbyjs.com/starters/contentful/starter-gatsby-blog).

Nav Query:

```
query navQuery {
  contentfulMainNavigation(contentful_id: {eq: "4eT4fieNalKad3Vk8hoolN"}) {
    navigationElements {
      title
      slug
      childPages {
        title
        slug
      }
    }
  }
}
```
