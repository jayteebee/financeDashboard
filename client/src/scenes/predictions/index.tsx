import { useTheme } from '@mui/material'
import React, { useState } from 'react'

type Props = {}

const Predictions = (props: Props) => {
    const {palette} = useTheme()
    const [isPredictions, setIsPredictions] = useState(false)
    
  return (
    <div>Predictions</div>
  )
}

export default Predictions