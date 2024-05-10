"use client";
import Row from "./Row";

function Table({ header, data }) {
	return (
		<div>
			<div className="relative overflow-auto grid  grid-cols-table whitespace-normal bg-white rounded-2xl  p-4  ">
				<h1 className=" capitalize font-semibold text-xl px-6 py-3  after:contents-[''] after:w-[97%]  after:absolute after:h-[1px] after:left-[50%]  after:-translate-x-[50%] after:bg-seconderyItemColor after:opacity-10 after:top-16">
					{header}
				</h1>
				<table className="  text-sm text-left rtl:text-right  capitalize  ">
					<thead className=" text-[16px]  text-seconderyItemColor ">
						<tr className="border-b">
							<th
								scope="col"
								className="px-6 py-3">
								Product
							</th>
							<th
								scope="col"
								className="px-6 py-3">
								Order ID
							</th>
							<th
								scope="col"
								className="px-6 py-3">
								Date
							</th>
							<th
								scope="col"
								className="px-6 py-3">
								Customer Name
							</th>
							<th
								scope="col"
								className="px-6 py-3">
								Status
							</th>
							<th
								scope="col"
								className="px-6 py-3 ">
								Amount
							</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(data).map((e, i) => {
							return (
								<Row
									{...data[e]}
									key={data[e].orderId + i}></Row>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
export default Table;
