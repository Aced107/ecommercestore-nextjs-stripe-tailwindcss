"use client";
import Link from "next/link";
import React from "react";
import useCart from "./(store)/store";
import Modal from "./Modal";

export default function Header() {
  const totalQuantity = useCart((state) => state.getTotalQuantity());
  const cartItems = useCart((state) => state.cart);
  const openModal = useCart((state) => state.openModal);
  const setOpenModal = useCart((state) => state.setOpenModal);
  return (
    <header className="sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex item-center justify-between">
      {openModal && <Modal />}
      <Link href={"/"}>
        <h1 className="uppercase cursor-pointer hover:scale-110">Fruit Shop</h1>
      </Link>
      <div
        onClick={setOpenModal}
        className="relative cursor-pointer group grid place-items-center"
      >
        {cartItems.length > 0 && (
          <div className="absolute aspect-square pointer-events-none h-5 sm:h-6 grid place-items-center top-0 bg-blue-400 text-white rounded-full right-0 -translate-y-1/2 translate-x-1/2">
            <p className="text-xs sm:text-sm">{totalQuantity}</p>
          </div>
        )}
        <i className="fa-solid fa-basket-shopping cursor-pointer group-hover:text-slate-500"></i>
      </div>
    </header>
  );
}
