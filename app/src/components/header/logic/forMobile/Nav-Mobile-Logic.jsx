"use client";

import { useState } from 'react';

import NavMobile from '../../rendering/Nav/forMobile/Nav-Mobile';

export default function NavMobileLogic() {

  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <NavMobile handleClick={handleClick} setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
  )
}
