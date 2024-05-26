"use client";

export function ToTop() {
  return (
    <a href="">
      <button className="bg-cyan-500 rounded-full shadow-xl shadow-indigo-500/50 !fixed bottom-4 right-4 animate-bounce w-10 h-10">
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </button>
    </a>
  );
}
