export default function ProductPage({ params }) {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2 className="text-2xl font-bold">Product Deatail{params.id}</h2>
    </div>
  );
}
