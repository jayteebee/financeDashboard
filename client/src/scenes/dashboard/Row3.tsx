import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from '@/state/api'
import React from 'react'

type Props = {}

const Row3 = (props: Props) => {
  const {data: kpiData} = useGetKpisQuery()
  const {data: productData} = useGetProductsQuery()
  const {data: transactionData} = useGetTransactionsQuery()

  return (
    <>
        <DashboardBox gridArea="g"></DashboardBox>

        <DashboardBox gridArea="h"></DashboardBox>

        <DashboardBox gridArea="i"></DashboardBox>

        <DashboardBox gridArea="j"></DashboardBox>
    </>
  )
}

export default Row3