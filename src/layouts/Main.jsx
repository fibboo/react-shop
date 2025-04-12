import {useEffect, useState} from 'react';
import Button from "../components/Button.jsx";

const SOME_KEY = import.meta.env.VITE_SOME_KEY

export function Main() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchQuote = () => {
    setLoading(true);
    fetch('https://thequoteshub.com/api/')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setQuote(data.text);
          setAuthor(data.author);
        })
        .catch(() => {
          setQuote("Error loading quote...");
          setAuthor("");
        })
        .finally(() => {
          setLoading(false);
        });
  };


  useEffect(() => {
    fetchQuote();
  }, []);

  return (
      <main className='flex flex-col justify-center-safe items-center flex-1 p-6'>
        <div
            className="
              max-w-xl
              bg-indigo-200 text-gray-900
              border-2 border-indigo-600 shadow-lg rounded-xl
              p-8 m-4"
        >
          {loading ? (
              <span className='italic'>Loading quote...</span>
          ) : (
              <>
                <blockquote className="italic text-2xl font-semibold text-center">
                  “{quote}”
                </blockquote>
                <cite className='block text-lg text-right mt-4 font-medium text-gray-600'>
                  — {author}
                </cite>
              </>
          )}
        </div>
        <Button onClick={fetchQuote} className="mt-4">New Quote</Button>
      </main>

  );
}

