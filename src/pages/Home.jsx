import { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";

import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import { fetchProducts } from "../services/api";

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
      setCategories([...new Set(data.map((p) => p.category))]);
    });
  }, []);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    filterProducts(cat, "");
  };

  const handleSearch = (text) => {
    filterProducts(selectedCategory, text);
  };

  
  const filterProducts = (category, searchText) => {
    let filtered = products;

    if (category !== "all") {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchText && searchText.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <>
      <TopBar />
      <Header onSearch={handleSearch} />
     
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={handleCategorySelect}
      />

      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;
