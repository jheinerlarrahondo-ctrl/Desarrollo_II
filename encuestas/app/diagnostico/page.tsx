
import { createClient } from "@/lib/supabase/server";

export default async function DiagnosticoPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getSession();

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-4 text-2xl font-bold">
        Diagnóstico de Supabase
      </h1>

      {error ? (
        <p className="text-red-600">
          Error al consultar la sesión: {error.message}
        </p>
      ) : (
        <>
          <p className="text-green-700">
            El cliente de Supabase respondió correctamente.
          </p>
          <p className="mt-2">
            Estado de sesión: {data.session ? "Sesión iniciada" : "Sin sesión iniciada"}
          </p>
        </>
      )}
    </main>
  );
}
