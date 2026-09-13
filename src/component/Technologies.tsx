import { use, useState } from "react";
import type { Iplayer } from "./playerTypes.tsx";

interface TechnologiesProps {
  playersPromise: Promise<Iplayer[]>;
}

const Technologies = ({ playersPromise }: TechnologiesProps) => {
  const technologies = use(playersPromise);
  const [stack, setStack] = useState<Iplayer[]>([]);

  const addToStack = (technology: Iplayer) => {
    if (stack.some((item) => item.id === technology.id)) {
      window.alert(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((currentStack) => [...currentStack, technology]);
  };

  const removeFromStack = (technologyId: string) => {
    setStack((currentStack) => currentStack.filter((item) => item.id !== technologyId));
  };

  return (
    <section className="container mx-auto px-6 pb-16">
      <h1 className="text-2xl font-bold text-slate-900">
        Explore the <span className="bg-linear-to-r from-[#FF5722] to-[#7C3AED] bg-clip-text text-transparent">Technologies</span>
      </h1>
      <p className="mt-1 max-w-xl text-sm text-gray-600">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_250px]">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => {
            const isAdded = stack.some((item) => item.id === technology.id);

            return (
              <article key={technology.id} className="flex min-h-64 flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <img className="h-8 w-8 object-contain" src={technology.icon} alt={`${technology.name} icon`} />
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-600">{technology.badge}</span>
                </div>
                <h2 className="mt-3 font-semibold text-slate-900">{technology.name}</h2>
                <p className="mt-2 flex-1 text-xs leading-5 text-slate-500">{technology.description}</p>
                <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500">
                  <span className="rounded bg-slate-100 px-2 py-1">{technology.category}</span>
                  <span>{technology.difficulty}</span>
                  <span className="font-medium text-amber-500">★ {technology.rating}</span>
                </div>
                <button
                  className="mt-3 w-full rounded-md bg-slate-950 px-3 py-2 text-xs font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-emerald-600"
                  disabled={isAdded}
                  onClick={() => addToStack(technology)}
                >
                  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                </button>
              </article>
            );
          })}
        </div>

        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-20">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-semibold text-slate-900">Your Stack</h2>
              <p className="mt-1 text-xs text-slate-500">
                {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
              </p>
            </div>
            {stack.length > 0 && (
              <button className="text-xs font-medium text-rose-600 hover:text-rose-800" onClick={() => setStack([])}>
                Remove All
              </button>
            )}
          </div>

          {stack.length === 0 ? (
            <p className="mt-5 rounded-lg border border-dashed border-slate-200 p-5 text-center text-xs text-slate-400">Your stack is empty.</p>
          ) : (
            <div className="mt-4 grid gap-2">
              {stack.map((technology) => (
                <div key={technology.id} className="flex items-center gap-2 rounded-lg bg-slate-50 p-2">
                  <img className="h-7 w-7 object-contain" src={technology.icon} alt="" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold text-slate-800">{technology.name}</p>
                    <p className="text-[10px] text-slate-500">{technology.category}</p>
                  </div>
                  <button className="px-1 text-sm text-slate-400 hover:text-rose-600" aria-label={`Remove ${technology.name}`} onClick={() => removeFromStack(technology.id)}>
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </aside>
      </div>
    </section>
  );
};

export default Technologies;
