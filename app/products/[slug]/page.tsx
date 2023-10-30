import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"

interface Props {
  params:{
    slug:string
  }
}

export default async function Page({params}: Props) {
  const product = await client.fetch<SanityProduct>(groq`*[_type == "product" && slug.current == "${params.slug}"][0]
  {
    _id,
    _createdAt,
    "id": _id,
    name,
    sku,
    images,
    price,
    currency,
    description,
    sizes,
    categories,
    colors,
    "slug": slug.current
  }`
  )
  // console.log(product)
  return (
    <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Product */}
        <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          {/* Product gallery */}
          {/* <ProductGallery product={product}/> */}
          <ProductGallery product={product}/>
          {/* Product info */}
          <ProductInfo product={product}/>
        </div>
      </div>
    </main>
  )
}
