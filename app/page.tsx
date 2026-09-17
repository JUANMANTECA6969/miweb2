"use client"

export default function Page() {
  return (
    <main className="h-screen overflow-hidden">
      {/* Sección 1: Transparente */}
      <div className="h-screen w-full bg-transparent"></div>

      {/* Sección 2: Rojo con bordes laterales */}
      <div className="h-screen w-full bg-red-600 flex items-center justify-center px-12">
        <div className="h-full w-full bg-red-700 shadow-2xl flex items-center justify-center">
          <p
            className="px-10 text-center text-xl leading-relaxed text-white"
            style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Sección 3: Transparente */}
      <div className="h-screen w-full bg-transparent"></div>
    </main>
  )
}
