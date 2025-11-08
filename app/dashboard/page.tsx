export default function DashboardPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-3xl w-full p-8">
        <h1 className="text-3xl font-bold mb-4">Panel de control</h1>
        <p className="text-gray-700 mb-6">Has iniciado sesión correctamente (modo demo). Aquí iría tu dashboard con progresos, proyectos y recursos.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="font-semibold">Progreso</h2>
            <p className="text-sm text-gray-600">Resumen rápido de tu progreso.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="font-semibold">Proyectos</h2>
            <p className="text-sm text-gray-600">Tus proyectos recientes y ejercicios.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
