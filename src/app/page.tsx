import React from "react";

function NavItem() {
  
}

function NavBar( {items}: {items: string[]}) {
  const navItems = items.map( (name, index) => { return React.createElement(
    'li'
    , {key: index, className: "p-2 hover:text-white hover:cursor-pointer hover:indent-1 transition-all"}
    , name); 
  });    

  return (
    React.createElement(
      'ul', {className: "text-xl text-gray-300"}, navItems
    )
  );
}

export default function Home() {
  const navItems = ['home', 'projects', 'about', 'contact'];

  return (
    <main className="p-0.5 h-full flex items-end">
      <div className="p-10">
        <h1 className="font-medium text-9xl pb-3">David Fang</h1>
        <NavBar items={navItems} />
      </div>
    </main>
  );
}