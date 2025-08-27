import ProductList from "@/components/product.list.component";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold">FakeShop</h1>
      <ProductList></ProductList>
    </div>
  )
}
