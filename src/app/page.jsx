import GET from './api/products/route';
import Catalog from './components/Catalog';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';
import CategoryFilter from './components/CategoryFilter';
import PriceFilter from './components/PriceFilter';

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Mini Storefront</h1>

      <Catalog />


    </main>
  );
}
