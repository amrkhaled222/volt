'use client'
import Stats from '@/components/Admin/Stats'
import Table from '@/components/Admin/Table'
import axios from '@/lib/axios'
import { useState, useEffect } from 'react'
import Loader from '@/components/Loader'
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
        await axios.get('api/stats').then(res => {
            setStats(res.data)
        })
    }
    useEffect(() => {
        getStats()
        getRecentOrder()
    }, [])

    return (
        <div className="flex p-4 flex-col gap-6 min-h-[90vh]  relative  ">
            {loader && (
                <Loader
                    style="bg-transparent "
                    childStyle="flex justify-center items-center"></Loader>
            )}

            {!loader && (
                <>
                    <div className="flex gap-3 justify-evenly flex-wrap">
                        {stats.map((s, i) => {
                            return <Stats stat={s} key={i}></Stats>
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
