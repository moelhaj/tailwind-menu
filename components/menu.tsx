"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
	FiActivity,
	FiChevronLeft,
	FiChevronRight,
	FiHome,
	FiLogOut,
	FiSettings,
	FiUnlock,
	FiUser,
} from "react-icons/fi";
import { HiTranslate } from "react-icons/hi";
import MenuItem from "./menu-item";
import { cls } from "@/utlis/cls";

export default function Menu() {
	const mainMenuRef = useRef<any>(null);
	const settingsMenuRef = useRef<any>(null);
	const [currentMenu, setCurrentMenu] = useState("main");
	const [menuHeight, setMenuHeight] = useState();

	useLayoutEffect(() => {
		if (mainMenuRef.current) {
			setMenuHeight(mainMenuRef.current.offsetHeight);
		}
	}, []);

	useEffect(() => {
		if (currentMenu === "main") {
			setMenuHeight(mainMenuRef.current.offsetHeight);
		} else {
			setMenuHeight(settingsMenuRef.current.offsetHeight);
		}
	}, [currentMenu]);

	const MainMenu = () => (
		<div ref={mainMenuRef}>
			<MenuItem leftIcon={<FiHome size="20" />} text="Home" />
			<MenuItem leftIcon={<FiUser size="20" />} text="Profile" />
			<MenuItem
				leftIcon={<FiSettings size="20" />}
				text="Settings"
				rightIcon={<FiChevronRight />}
				handleClick={() => setCurrentMenu("settings")}
			/>
		</div>
	);

	const SettingsMenu = () => (
		<div ref={settingsMenuRef}>
			<MenuItem
				leftIcon={<FiChevronLeft size="20" />}
				text="Back"
				handleClick={() => setCurrentMenu("main")}
			/>
			<MenuItem leftIcon={<FiUser size="20" />} text="Account Settings" />
			<MenuItem leftIcon={<FiUnlock size="20" />} text="Settings & Privacy" />
			<MenuItem leftIcon={<FiActivity size="20" />} text="Activity" />
			<MenuItem leftIcon={<HiTranslate size="20" />} text="Language" />
			<MenuItem leftIcon={<FiLogOut size="20" />} text="Sign Out" />
		</div>
	);

	return (
		<div className="absolute z-20 top-16 right-0 rounded-md bg-gray-100 duration-300 p-3 text-sm">
			<div
				style={{ height: menuHeight }}
				className="relative overflow-hidden w-56 flex transition-height duration-500 ease-in-out"
			>
				<div
					className={cls(
						currentMenu === "main" ? "translate-x-0" : "-translate-x-full",
						"min-w-full w-56 flex flex-col gap-5 transform duration-300"
					)}
				>
					<MainMenu />
				</div>
				<div
					className={cls(
						currentMenu === "settings" ? "-translate-x-full" : "translate-x-96",
						"min-w-full w-56 flex flex-col gap-5 transform duration-300"
					)}
				>
					<SettingsMenu />
				</div>
			</div>
		</div>
	);
}
