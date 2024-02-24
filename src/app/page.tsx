'use client'
import React from "react";


interface NavItemProps {
  item: string;
  changePage: (item : string) => void;
}

function NavItem({item, changePage} : NavItemProps) {

  function handleClick() {
    changePage(item);
  }

  return (
    <ul onClick={handleClick} className="p-2 transition-all hover:text-white hover:indent-2 hover:cursor-pointer">{item}</ul>
  )
  
}

function NavBar( {items}: {items: React.JSX.Element[]} ) {
  return (
    <ul className="text-xl text-gray-400">
      {items}
    </ul>
  );
}

export default function Home() {
  const navItems = ['home', 'projects', 'about', 'contact'];
  const [content, setContent] = React.useState<string>('');

  function changePage(newContent: string) {
    if (content !== newContent) {
      if (newContent === 'home') {
        setContent('');
      } else {
        setContent(newContent);
      }
    }
  }

  const navElements = navItems.map((item) => {
    return NavItem({item, changePage});
  });

  return (
    <main className="p-0.5 w-full h-full flex items-end justify-between">
      <div className="p-10">
        <h1 className="font-medium text-9xl pb-3">David Fang</h1>
        <NavBar items={navElements} />
      </div>
      <h1 className="text-7xl self-start p-4">
        {content}
      </h1>
    </main>
  );
}