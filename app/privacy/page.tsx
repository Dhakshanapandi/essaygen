export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-10 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Your privacy is very important to us at <span className="font-semibold text-[var(--accent)]">EssayGen</span>. 
          We are committed to protecting your data and ensuring transparency.
        </p>
        <ul className="list-disc pl-6 text-left text-lg text-gray-700 leading-relaxed space-y-2">
          <li>We do not sell or share your personal data with third parties.</li>
          <li>We may use cookies to improve user experience and site performance.</li>
          <li>Your input text is processed securely and never stored permanently.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          By using our service, you agree to this Privacy Policy. For any concerns, 
          please contact us at <span className="text-[var(--accent)]">support@essaygen.com</span>.
        </p>
      </div>
    </div>
  );
}
