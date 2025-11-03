export async function GET() {
  const products = [
    { id: "p1", name: "Laptop", price: 1200, category: "Electronics", stock: 5 },
    { id: "p2", name: "Desk Chair", price: 150, category: "Furniture", stock: 3 },
    { id: "p3", name: "Phone", price: 900, category: "Electronics", stock: 4 },
    { id: "p4", name: "Sofa", price: 400, category: "Furniture", stock: 2 },
    { id: "p5", name: "Headphones", price: 120, category: "Electronics", stock: 8 },
    { id: "p6", name: "Shoes", price: 90, category: "Clothing", stock: 10 },
    { id: "p7", name: "Jacket", price: 160, category: "Clothing", stock: 6 },
    { id: "p8", name: "Watch", price: 250, category: "Accessories", stock: 4 },
  ];

  return Response.json(products);
}