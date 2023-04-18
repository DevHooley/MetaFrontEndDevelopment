const helloWorld =
  " text-2xl p-2 bg-sky-300 w-64 rounded-lg text-center mt-10 mb-10 container mx-auto justify-center items-center";

function HelloWorld() {
  return (
    <div className="container">
      <div className="flex mx-auto flex-col">
        <div className="mx-auto">
          <h1 className={helloWorld}>Hello World</h1>
          <h2 className={helloWorld}>I love you</h2>

          <div className="container bg-slate-100 justify-center p-20 h-screen rounded-lg mx-auto text-center ">
            <div className="h-100 mx-auto w-auto"></div>
            <img src="../../public/images/LiviaToby1.jpeg" alt="Livia&Toby" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelloWorld;
