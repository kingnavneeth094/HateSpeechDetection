// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-8 fixed bottom-0 left-0 w-full">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Hate Speech Detector. All rights reserved.</p>
          {/* Optionally, add social media or other links */}
          <div className="mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300 mx-2">Twitter</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300 mx-2">GitHub</a>
          </div>
        </div>
      </footer>
    );
  }
  