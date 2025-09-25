export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-10 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">About EssayGen</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          EssayGen is an <span className="text-[var(--accent)] font-semibold">AI-powered tool</span> 
          designed to help students and professionals generate high-quality essays instantly.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our mission is to make <span className="font-semibold">learning and content creation</span> 
          faster, easier, and more accessible. With just one click, you can create 
          structured essays that save you time and effort.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you’re preparing assignments, research papers, or professional reports, 
          EssayGen is your reliable companion for smarter writing.
        </p>
      </div>
    </div>
  );
}
