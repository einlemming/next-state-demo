import ClientCounter from '../components/ClientCounter';
import PersistentCounter from '../components/PersistentCounter';
import ServerCounter from '../components/ServerCounter';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-10 bg-gray-50 p-10">
      
      {/* Flüchtiger Counter */}
      <div className="w-full max-w-md">
        <ClientCounter title="Flüchtiger Counter" />
        <p className="mt-2 text-sm text-gray-600">
          Dieser Counter lebt **nur im Client**. Bei Reload oder Server-Restart wird der Wert zurückgesetzt.
        </p>
      </div>

      {/* Persistenter Counter */}
      <div className="w-full max-w-md">
        <PersistentCounter title="Persistenter Counter" storageKey="persistentCounter" />
        <p className="mt-2 text-sm text-gray-600">
          Dieser Counter speichert seinen Wert in <code>localStorage</code>. Bei Reload bleibt der Wert erhalten. Auch bei Server Restart, da ClientSide!
        </p>
      </div>

      {/* Server Counter */}
      <div className="w-full max-w-md">
        <ServerCounter title="Server Counter" />
        <p className="mt-2 text-sm text-gray-600">
          Server Component – **stateless**. Jeder Reload oder Server-Restart setzt den Wert auf 4711. Kein interaktiver State auf dem Client. nur initial, danach keine Interaktivität → stateless
        </p>
      </div>

    </main>
  );
}
