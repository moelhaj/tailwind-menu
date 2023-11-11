"use client";
import { useState } from "react";
import Image from "next/image";
import Menu from "./menu";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<main className="max-w-4xl w-full mx-auto">
			<header className="flex justify-between py-5 relative">
				<p className="text-sm text-gray-700">
					Click the avatar on the right for the drop menu
				</p>
				<div
					onClick={() => setOpen(!open)}
					className="w-9 h-9 border-2 rounded-full border-violet-600 grid place-content-center cursor-pointer"
				>
					<Image src="/avatar.png" alt="avatar" width={20} height={20} />
				</div>
				{open && <Menu />}
				{open && (
					<div
						onClick={() => setOpen(false)}
						className="fixed z-10 inset-0 w-full h-full bg-transparent"
					></div>
				)}
			</header>
		</main>
	);
}
