import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles.css';

export default function Essay() {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/essays/${id}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => setContent('# 404\nEssay not found.'));
  }, [id]);

  return (
    <div>
      <div className='essay-container'>
        <main className="essay-content">
            <ReactMarkdown>{content}</ReactMarkdown>
        </main>
      </div>
    </div>
  );
}