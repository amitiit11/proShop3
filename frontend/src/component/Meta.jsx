import React from 'react'
import { Helmet } from 'react-helmet-async'

const Meta = ({title, description, keywords}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta name='keywords' content={keywords}/>
    </Helmet>
  )
}
Meta.defaultProps = {
    title: "Welcome to ProShop",
    description: "We sell the bext prducts fr cheap",
    keywords: "electronics, buy electronics, cheap electronics",

}
export default Meta