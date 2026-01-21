import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../services/api";
import ProductCard from "../../components/ProductCard";
import ProductModal from "../../components/ProductModal";
import { MdOutlineRestartAlt } from "react-icons/md";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);

        const storedProducts = sessionStorage.getItem("fakestore_products");

        if (storedProducts) {
          setProducts(JSON.parse(storedProducts));
          setLoading(false);
        } else {
          const data = await fetchProducts();
          setProducts(data);
          sessionStorage.setItem("fakestore_products", JSON.stringify(data));
          setLoading(false);
        }
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const saveOrder = (newProducts) => {
    setProducts(newProducts);
    sessionStorage.setItem("fakestore_products", JSON.stringify(newProducts));
  };

  const onDragStart = (e, index) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index);
  };

  const onDragOver = (e) => {
    e.preventDefault(); 
  };

  const onDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndexBuffer = e.dataTransfer.getData("text/plain");

    if (sourceIndexBuffer === "") return;

    const sourceIndex = parseInt(sourceIndexBuffer, 10);

    if (sourceIndex === targetIndex) return;

    const newProducts = [...products];
    const [movedItem] = newProducts.splice(sourceIndex, 1);
    newProducts.splice(targetIndex, 0, movedItem);

    saveOrder(newProducts);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="alert alert-error max-w-md">
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Fake Store Products
        </h1>
        <p className="text-gray-600">
          Drag and drop items to reorder them. Your preference is saved!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            index={index}
            product={product}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onClick={openModal}
          />
        ))}
      </div>

      <ProductModal product={selectedProduct} onClose={closeModal} />


      <div className="fixed bottom-4 right-4">
        <button
          className="btn btn-circle btn-neutral opacity-50 hover:opacity-100"
          title="Reset Order"
          onClick={() => {
            sessionStorage.removeItem("fakestore_products");
            window.location.reload();
          }}
        >
          <MdOutlineRestartAlt size={30}/>
        </button>
      </div>
    </div>
  );
};

export default Home;
