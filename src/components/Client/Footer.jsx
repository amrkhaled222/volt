import List from "./List";
import UpToDate from "./UpToDate";
import Icon from "./Icon";
import twitter from "@/app/_assets/twitterIcon.svg";
import facebook from "@/app/_assets/FacebookIcon.svg";
import insta from "@/app/_assets/instaIcon.svg";
import github from "@/app/_assets/github.svg";
import visa from "@/app/_assets/visa.svg";
import masterCard from "@/app/_assets/MasterCard.svg";
import paypal from "@/app/_assets/PayPal.svg";
import applePay from "@/app/_assets/applePay.svg";
import Gpay from "@/app/_assets/Gpay.svg";
function Footer() {
	return (
		<footer className="box-border bg-lightgrey pb-11 mt-52 ">
			<div className=" container mx-auto px-4 max-w-7xl relative ">
				<UpToDate />
				<div className=" pt-36">
					<div className="flex md:flex-row justify-between mb-11 md:gap-8S lg:gap-20 xl:gap-24 flex-col gap-9 ">
						<div className=" w-fit">
							<h4 className=" font-montserrat font-extrabold text-4xl mb-6">
								Volt
							</h4>
							<p className=" text-gray-500 text-sm md:w-64 w-full mb-6">
								we have cloths that suits your style and which you are proud to
								wear. From women to men.
							</p>
							<div className="flex gap-5">
								<Icon
									src={twitter}
									alt="twitter icon"
								/>
								<Icon
									src={facebook}
									alt="Facebook icon"
								/>
								<Icon
									src={insta}
									alt="Instgram icon"
								/>
								<Icon
									src={github}
									alt="GitHub icon"
								/>
							</div>
						</div>

						<div className="flex md:w-4/5 justify-between flex-wrap sm:gap-y-4 ">
							<List
								topic="company"
								li_1="about"
								li_2="features"
								li_3="work"
								li_4="career"
							/>

							<List
								topic="help"
								li_1="customer support"
								li_2="delivery detail"
								li_3="terms & conditions"
								li_4="privacy policy"
							/>

							<List
								topic="faq"
								li_1="account"
								li_2="manage deliveries"
								li_3="orders"
								li_4="payment"
							/>

							<List
								topic="resources"
								li_1="free ebooks"
								li_2="development tutorial"
								li_3="how to -blog"
								li_4="youtube playlist"
							/>
						</div>
					</div>
					<hr className=" h-1 bg-hrColor " />
					<div className="flex flex-col flex-wrap  items-center md:justify-between  md:flex-row md:items-start">
						<p className=" text-gray-500 mt-2 text-xs font-plusj mb-1">
							Volt © 2000-2024 all rights reserved
						</p>
						<div className="flex justify-center flex-wrap">
							<Icon
								src={visa}
								alt="visa icon"
							/>
							<Icon
								src={masterCard}
								alt="masterCard icon"
							/>
							<Icon
								src={paypal}
								alt="paypal icon"
							/>
							<Icon
								src={applePay}
								alt="applePay icon"
							/>
							<Icon
								src={Gpay}
								alt="Google Pay icon"
							/>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
