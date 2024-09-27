"use client";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {sidebarLinks} from "@/constants/index";
import Image from "next/image";


export default function MobileNav({user}: MobileNavProps){
	const pathName = usePathname();
	return (
		<section className="w-full max-w-[264px]">
			<Sheet>
			  <SheetTrigger>
			  	<Image
			  	src="/icons/hamburger.svg"
			  	width={30}
			  	height={30}
			  	alt="Menu"
			  	className="cursor-pointer"
			  	/>
			  </SheetTrigger>
			  <SheetContent side="left" className="border-none bg-white">
			  	<Link href="/"
					className="mb-12 cursor-pointer 
					items-center gap-1 flex px-4">
					<Image src={"/icons/logo.svg"}
						width={34}
						height={34}
						alt="Horizon logo"
						/>
					<h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
				</Link>
				<div className="mobilenav-sheet">
					<SheetClose asChild>
						<nav className="flex h-full flex-col gap-6 pt-16 text-white">
								{sidebarLinks.map(item => {
									const isActive = pathName.startsWith(item.route);

									return (
										<SheetClose asChild key={item.route} >
											<Link key={item.label} href={item.route} 
												className={cn('mobilenav-sheet_close w-ful', {'bg-bank-gradient': isActive})}>
												
											<Image
												src={item.imgURL}
												alt={item.label}
												width={20}
												height={20}
												className={cn({
													'brightness-[3] invert-0': isActive
												})}
											/>
											<p className={cn('text-16 font-semibold text-black-2', {
												'text-white': isActive
											})}>{item.label}</p>
											</Link>
										</SheetClose>
										)}
								)}
						</nav>
					</SheetClose>
				</div>

			  </SheetContent>
			</Sheet>
		</section>
	);
}