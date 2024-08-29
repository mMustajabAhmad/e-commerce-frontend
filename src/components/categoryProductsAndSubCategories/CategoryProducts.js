import Header from "../shop/Header";
import Footer from "../shop/Footer";
import { useParams } from "react-router-dom";
import CategoryProductRow from "./CategoryProductsRow";
import SubCategoryRow from "./SubCategoryRow";
import { fetchProducts } from "../../utils/APIs/Product_APIs";
import { fetchParent } from "../../utils/APIs/Category_APIs";
import { useQuery } from "@tanstack/react-query";
import { fetchCategory, fetchSubCategories } from "../../utils/APIs/Category_APIs";

function CategoryProducts() {
  const { id } = useParams();
  
  const {
    data: products,
    error: productsError,
    isLoading: loadingProducts
  } = useQuery({
    queryKey: ["products"],
    queryFn: ()=>fetchProducts()
  })

  const {
    data: category,
    error: categoryError,
    isLoading: loadingCategory
  } = useQuery({
    queryKey: ["category", id],
    queryFn: ()=> fetchCategory(id)
  })

  const {
    data: parent,
    error: parentError,
    isLoading: parentIsLoading
  } = useQuery({
    queryKey: ["parent", category?.parent_category_id],
    queryFn: () =>fetchParent(category?.parent_category_id),
    enabled: !!category?.parent_category_id
  })

  const {
    data: subCategories,
    error: subCategoriesError,
    isLoading: loadingSubCategories
  } = useQuery({
    queryKey: ["subCategories", id],
    queryFn: () => fetchSubCategories(id),
  })

  if(loadingProducts) return <div>Loading Products...</div>
  if(productsError) return <div>Error in Loading Products</div>

  if(loadingCategory) return <div>Loading Category...</div>
  if(categoryError) return <div>Error in Loading Category</div>

  console.log("categoryy" ,category)

  if(parentIsLoading) return <div>Parent is Loading</div>
  if(parentError) return <div>Error occured while loading parent</div>

  if (loadingSubCategories) return <div>Loading Sub-categories...</div>
  if(subCategoriesError) return <div>Error in Loading Sub-categories</div>

  
  return (
    <>
      <div className="mt-3">
        <Header />

        <main className="flex flex-col min-h-screen">
          <div className="h-20 flex justify-center bg-gray-200 ">
            <span className="font-medium text-2xl mt-4">
              SHOP / CATEGORY {parent && `/ ${parent.name.toUpperCase()}`} /{" "}
              {category && category.name.toUpperCase()}
            </span>
          </div>
          <div className="flex flex-col mt-6">
            <div className="flex flex-row justify-center">
              <div className="flex flex-col">
                {products && products.length > 0 && (
                  <>
                    <p className="text-4xl font-medium flex flex-row justify-center">
                      Products
                    </p>
                    <div className="flex flex-row mt-6">
                      <CategoryProductRow data={products} />
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-row justify-center">
              <div className="flex flex-col mt-12">
                {subCategories && subCategories.length > 0 && (
                  <>
                    <p className="text-4xl font-medium flex flex-row justify-center">
                      Sub Categories
                    </p>
                    <div className="flex flex-row mt-6 mb-10">
                      <SubCategoryRow data={subCategories} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
export default CategoryProducts;
