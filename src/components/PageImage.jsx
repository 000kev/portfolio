export default function PageImage() {
  return (
      <div className="relative inline-block">
        <img src="./src/assets/maths.jpg" className="block w-screen h-auto" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <p className="font-heading text-xl md:text-5xl">A GLOBAL CITIZEN</p>
          <p className="font-heading text-3xl md:text-8xl">KEVIN YVES-GERARD KUMASAMBA</p>
        </div>
      </div>
  );
}
