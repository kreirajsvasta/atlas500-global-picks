"use client";

import { useMemo, useState } from "react";
import { productCategories, products } from "./products";

const categoryMarks: Record<string, string> = {
  Auto: "AUTO",
  Beauty: "CARE",
  Fitness: "MOVE",
  Health: "WELL",
  Home: "HOME",
  Kitchen: "COOK",
  Office: "WORK",
  Pets: "PETS",
  "Smart Home": "SMART",
  Tech: "TECH",
};

export default function ProductCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        product.title.toLowerCase().includes(normalizedQuery) ||
        product.asin.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="catalog-shell">
      <div className="catalog-controls">
        <label>
          <span>Search products or ASIN</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try headphones, kitchen or B08…"
          />
        </label>
        <label>
          <span>Category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {productCategories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <div className="catalog-meta" aria-live="polite">
        <strong>{filteredProducts.length}</strong> verified Amazon listings shown
        <span>Checked July 18, 2026 · live price and availability at Amazon</span>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => {
            const amazonUrl = `https://www.amazon.com/dp/${product.asin}?tag=Atlas500-20`;
            return (
              <article className="product-card" key={product.asin}>
                <div className={`product-visual category-${product.category.toLowerCase().replace(/\s+/g, "-")}`} aria-hidden="true">
                  <span>{categoryMarks[product.category] ?? "PICK"}</span>
                  <small>{product.category}</small>
                </div>
                <div className="product-content">
                  <div className={`signal ${product.signalLevel}`}>{product.signal}</div>
                  <h3>{product.title}</h3>
                  <p className="asin">ASIN <strong>{product.asin}</strong></p>
                  <p className="card-note">No copied price or unofficial product image. Confirm the current offer, seller and delivery on Amazon.</p>
                  <a
                    className="amazon-button"
                    href={amazonUrl}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    aria-label={`View ${product.title} on Amazon`}
                  >
                    View on Amazon <span>→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="no-results">
          <strong>No matching product.</strong>
          <button type="button" onClick={() => { setQuery(""); setCategory("All"); }}>Clear filters</button>
        </div>
      )}
    </div>
  );
}
