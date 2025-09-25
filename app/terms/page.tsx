export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-10 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Terms & Conditions</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          By using <span className="text-[var(--accent)] font-semibold">EssayGen</span>, 
          you agree to the following terms:
        </p>
        <ul className="list-disc pl-6 text-left text-lg text-gray-700 leading-relaxed space-y-2">
          <li>EssayGen is intended for educational and personal use only.</li>
          <li>You are responsible for how you use generated content.</li>
          <li>We do not guarantee plagiarism-free results in all cases.</li>
          <li>We may update these terms anytime without prior notice.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          Please read carefully and use responsibly.
        </p>
      </div>
    </div>
  );
}
