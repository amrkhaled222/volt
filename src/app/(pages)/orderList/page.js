"use client";
import Table from "@/app/_components/Table";
import tableData from "@/app/_components/tableData";
import Pagination from "@/app/_components/Pagination";
import { useState } from "react";
export default function OrderList() {
	const [currentPage, setCurrentPage] = useState(1);
	const [recordsPerPage] = useState(8);
	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	const currentRecords = tableData.slice(indexOfFirstRecord, indexOfLastRecord);
	const nPages = Math.ceil(tableData.length / recordsPerPage);

	return (
		<div className="p-4 flex flex-col gap-3">
			<Table
				data={currentRecords}
				header={"recent purchases"}></Table>
			<Pagination
				nPages={nPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}></Pagination>
		</div>
	);
}
