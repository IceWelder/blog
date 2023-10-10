export default function EnvPost() {
    return (
      <div className=" top-0 right-0 w-1/2 h-1/2 bg-slate-500">
        <h2 className="text-xl font-semibold text-white">Enviar Post</h2>
        <textarea
          className="w-full p-2 mt-2 border rounded-lg"
          placeholder="Digite seu post..."
          rows={4}
        ></textarea>
        <button className="bg-blue-900 text-white py-2 px-4 mt-2 rounded-lg hover:bg-green-600">
          Enviar
        </button>
      </div>
    );
  }
  