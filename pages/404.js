import Link from 'next/link';
export default function Custom404() {
  return (
    <main>
      <h1>404 - Oops looks like you lost somewhere....</h1>
      <iframe
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2Fconfused-gif-27101931&psig=AOvVaw3_Hx5PxbzGQkbykBzdi-WE&ust=1690229093084000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCYoJ7QpYADFQAAAAAdAAAAABAJ"
        width="480"
        height="362"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link href="/">
        <button className="btn-blue">Click Here</button>
      </Link>
    </main>
  );
}