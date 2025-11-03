import GET from './api/products/route';
import Catalog from './components/Catalog';
import ProductList from './components/ProductList';

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Mini Storefront</h1>

      <Catalog />


    </main>
  );
}
