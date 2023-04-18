const helloWorld =
  " text-2xl p-2 bg-sky-300 w-64 rounded-lg text-center mt-10 mb-10 container mx-auto justify-center items-center";

function HelloWorld() {
  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="">
          <h1 className={helloWorld}>Hello World</h1>
        </div>
      </div>
    </div>
  );
}

export default HelloWorld;
