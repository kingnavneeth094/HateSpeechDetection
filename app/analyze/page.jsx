"use client";

import { useState } from 'react';
import axios from 'axios';

export default function AnalyzePage({ isDarkMode }) {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api', { text });
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to analyze text.');
      console.error(err);
    }
  };

  return (
    <div
      className={`p-6 min-h-screen ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <h1
        className={`text-3xl font-semibold text-center ${
          isDarkMode ? 'text-blue-400' : 'text-blue-600'
        }`}
      >
        Hate Speech Detector
      </h1>
      <form onSubmit={handleSubmit} className="mt-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`w-full h-32 border rounded-lg p-4 text-lg focus:ring-2 ${
            isDarkMode
              ? 'bg-gray-800 border-gray-700 text-gray-100 focus:ring-blue-400'
              : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500'
          }`}
          placeholder="Enter text to analyze"
        />
        <button
          type="submit"
          className={`mt-6 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 ease-in-out ${
            isDarkMode
              ? 'bg-blue-500 text-gray-100 hover:bg-blue-400'
              : 'bg-blue-600 text-white hover:bg-blue-500'
          }`}
        >
          Analyze
        </button>
      </form>

      {/* Displaying the result */}
      {result && (
        <div
          className={`mt-8 p-6 rounded-lg ${
            isDarkMode ? 'bg-gray-800' : 'bg-blue-50'
          }`}
        >
          <h2
            className={`text-2xl font-bold ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            Analysis Result
          </h2>
          <p>
            <strong>Text:</strong> {result.text}
          </p>
          <p>
            <strong>Is Hate Speech:</strong>{' '}
            {result.is_hate_speech ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>Confidence:</strong> {result.confidence}
          </p>
        </div>
      )}

      {/* Displaying any errors */}
      {error && (
        <p className={`mt-6 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`}>
          {error}
        </p>
      )}
    </div>
  );
}
