import Stats from "@/app/_components/Stats";
import data from "@/app/_components/data.json";
import tableData from "@/app/_components/dashboardData.json";
import Table from "../../_components/Table";
export default function Dashboard() {
	return (
		<div className="flex p-4 flex-col gap-6 ">
			<div className="flex gap-3 justify-evenly flex-wrap">
				{Object.keys(data).map((e, i) => {
					return (
						<Stats
							{...data[e]}
							key={i * 5}></Stats>
					);
				})}
			</div>
			<Table
				data={tableData}
				header={"recent orders"}></Table>
		</div>
	);
}
