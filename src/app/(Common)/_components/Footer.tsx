// footer.tsx (React component for footer)
const Footer = () => {
  return (
    <footer className="bg-sky-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} <strong>Morshed</strong>. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
