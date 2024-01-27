import DashboardBox from '@/components/DashboardBox'
import FlexBetween from '@/components/FlexBetween'
import { useGetKpisQuery } from '@/state/api'
import { Box, Button, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Label } from 'recharts'

type Props = {}

const Predictions = (props: Props) => {
    const {palette} = useTheme()
    const [isPredictions, setIsPredictions] = useState(false)
    const {data: kpiData} = useGetKpisQuery();


  return (
    <DashboardBox
    width="100%"
    height="100%"
    p="1rem"
    overflow="hidden"
    >
        <FlexBetween m="1rem 2.5rem" gap="1rem" >
            <Box>
                <Typography variant="h3">Revenue and Predictions</Typography>
                <Typography variant="h6">Charter Revenue and Predicted Revenue based on a liner regression model</Typography>
            </Box>
            <Button 
            onClick={() => setIsPredictions(!isPredictions)}
            sx={{
                color: palette.grey[900],
                bgcolor: palette.grey[700],
                boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.4)",
            }}
            >
                Show Predicted Revenue for Next Year
            </Button>
        </FlexBetween>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={formattedData}
            margin={{
              top: 20,
              right: 75,
              left: 20,
              bottom: 80,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            >
                <Label
                    value="Month"
                    offset={-5}
                    position="insideBottom"
                />
            </XAxis>
            <YAxis
              tickLine={false}
              style={{ fontSize: "10px" }}
              axisLine={false}
            >
                <Label
                    value="Revenue in USD"
                    angle={-90}
                    position="insideLeft"
                    offset={-5}
                />
            </YAxis>

            <Tooltip />
            <Legend
             verticalAlign='top'
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="profit"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>

    </DashboardBox>
  )
}

export default Predictions