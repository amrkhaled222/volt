'use client'
import Stats from '@/app/_components/Stats'
import data from '@/app/_components/data.json'
import tableData from '@/app/_components/dashboardData.json'
import Table from '../../_components/Table'
import axios from '@/lib/axios'
import { useState, useEffect } from 'react'
import Loader from '@/app/_components/Loader'
export default function Dashboard() {
    const [allData, setAllData] = useState({})
    const [loader, setLoader] = useState(true)
    const [stats, setStats] = useState([])
 
    const getRecentOrder = async () => {
        setLoader(true)
        await axios.get(`api/order`).then(res => {
            setAllData(res.data[0][1])

            setLoader(false)
        })
    }
    const getStats = async () => {
        await axios.get('api/stats').then(res=>{
            console.log(res.data)
            setStats(res.data)
        })
    }
    useEffect(() => {
        getStats()
        getRecentOrder()
    }, [])
    return (
        <div className="flex p-4 flex-col gap-6 min-h-[80vh] ">
            {loader && <Loader></Loader>}
            {!loader && (
                <>
                    <div className="flex gap-3 justify-evenly flex-wrap">
                        {Object.keys(data).map((e, i) => {
                            return <Stats {...data[e]} key={i * 5}></Stats>
                        })}
                    </div>
                    <Table
                        data={allData.data}
                        header={'recent purchases'}></Table>
                </>
            )}
        </div>
    )
}
