import Link from 'next/link';
export default function Custom404() {
  return (
    <main>
      <div className="error-center">
        <h1>404 - CANT FIND WHAT YOU ARE LOOKING FOR</h1>
        <div>
          <img
            src="/404.gif"
          ></img>
        </div>
      </div>
    </main>
  );
}