export default function Navbar() {
  return (
    <nav className="w-full py-6 px-8 flex items-center justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-extrabold text-aim-blue">AIM</span>
        <span className="text-lg font-bold text-aim-gold">Tech</span>
      </div>
      <div className="flex gap-6 text-slate-700 dark:text-slate-200 font-medium">
        <a href="#" className="hover:text-aim-blue transition-colors">Home</a>
        <a href="#" className="hover:text-aim-blue transition-colors">Projects</a>
        <a href="#" className="hover:text-aim-blue transition-colors">Team</a>
        <a href="#" className="hover:text-aim-blue transition-colors">Contact</a>
      </div>
    </nav>
  );
}
