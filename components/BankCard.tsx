import Link from "next/link";
import Image from "next/image";
import { formatAmount } from "@/lib/utils";

export default function BankCard({account, userName, showBalance = true}: CreditCardProps) {
	return (
		<div className="flex flex-col">
			<Link href="/" className="bank-card">
				<div className="bank-card_content">
					<div>
					<h1 className="text-16 font-semibold text-white">
						{account.name || userName}
					</h1>
					<p className="font-ibm-plex-serif font-black text-white">
						{formatAmount(account.currentBalance)}
					</p>
					</div>
					<article className="flex flex-col gap-2">
						<div className="flex justify-between">
							<h1 className="text-12 font-semibold text-white">
								{userName}
							</h1>
							<h2 className="text-12 font-semibold text-white">
								&#x25CF;&#x25CF; / &#x25CF;&#x25CF;
							</h2>
						</div>
						<p className="text-14 font-semibold tracking-[1.1px] text-white">
							&#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; <span className="text-16">{account.mask || 1234}</span>
						</p>
					</article>
				</div>
				<div className="bank-card_icon">
				<Image
					 src="/icons/Paypass.svg"
					 width={20}
					 height={24}
					 alt="Pay"
				 />
				 <Image
				 	src="/icons/mastercard.svg"
				 	width={45}
				 	height={32}
				 	alt="Mastercard"
				 	className="ml-5"
				 />
				</div>
				<Image
					src="/icons/lines.png"
					height={190}
					width={316}
					className="absolute top-0 left-0"
				/>
			</Link>
		</div>
	);
}