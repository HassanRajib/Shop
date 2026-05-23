import React from 'react'
import ProductList from '../components/ProductList'

const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ catagory: string }>;
}) => {
  const catagory = (await searchParams).catagory
  return (
    <div>
        <ProductList catagory={catagory}/>
    </div>
  )
}

export default ProductPage