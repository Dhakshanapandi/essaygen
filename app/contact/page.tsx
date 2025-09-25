export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-10 text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Have questions, feedback, or need help? We’d love to hear from you.
        </p>
        <ul className="text-lg text-gray-700 leading-relaxed space-y-2">
          <li>Email: <span className="text-[var(--accent)]">dhakshanapandi@gmail.com.com</span></li>
          <li>Phone: +91 89400 09275</li>
          <li>Location: Tamil Nadu, India</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          Our team will get back to you within 24–48 hours.
        </p>
      </div>
    </div>
  );
}
