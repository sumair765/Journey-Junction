// import React from 'react'
// import {StaticQuery, graphql} from 'gatsby'

// const getSiteData = graphql`
//        query {
//     site{
//       siteMetadata{
//        title
//         description
//         author
//         data {
//           name
//           age
//         }
        
//       }
//     }
//   }
// `

// const RegularHeader = () => {
//     return (
//         <StaticQuery query={getSiteData} render={data=>{
//                 console.log(data)
//             return(<div>
//                 <h2> title: {data.site.siteMetadata.title}</h2>
//                 <h2> author: {data.site.siteMetadata.author}</h2>
//             </div>)
//         }}/>
//     )
// }

// export default RegularHeader
