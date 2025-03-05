export default function TestPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Dark Mode Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Light Background</h2>
          <p className="text-gray-700 mb-4">This text should be dark on a light background.</p>
          <p className="text-purple-700 mb-4">This text should be purple.</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded">Button</button>
        </div>
        
        <div className="p-6 bg-purple-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Purple Background</h2>
          <p className="text-gray-700 mb-4">This text should be dark on a light purple background.</p>
          <p className="text-purple-700 mb-4">This text should be purple.</p>
          <button className="bg-pink-500 text-white px-4 py-2 rounded">Button</button>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Section Title Test</h2>
        <h3 className="section-title">This uses the section-title class</h3>
        <p className="section-subtitle">This uses the section-subtitle class</p>
      </div>
    </div>
  );
}
