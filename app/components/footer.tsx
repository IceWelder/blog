import Head from 'next/head';

function HomePage() {
  return (
    <div className=" flex flex-col items-center bg-black">
      <Head>
        <title>Texto no Centro Superior</title>
      </Head>

      <div className="mt-4 text-center">
        <h1 className="text-2xl font-bold">Texto no Centro Superior da Página</h1>
        <p className="text-sm">Seu texto aqui.</p>
      </div>
    </div>
  );
}

export default HomePage;
