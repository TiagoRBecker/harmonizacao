const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center  justify-center">
      <div className="w-full h-[50%] bg-white">
        <h1>404</h1>
      </div>
      <div className="w-full h-[50%] bg-gray-500">
         <h1>Desculpe, página nao encontrada</h1>
          <button className="btn-small">Voltar</button>
      </div>
    </div>
  );
};

export default NotFound;
