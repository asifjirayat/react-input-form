export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4 mt-12">
      <div className="max-w-2xl mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} React Form App. All rights reserved.
      </div>
    </footer>
  );
}
