import React, { useState } from 'react'
import VoucherContext from './VoucherContext'

const VoucherProvider = (props) => {
  const [redeemedVouchers, setRedeemedVouchers] = useState([]);

  const add = (obj)=>{
   setRedeemedVouchers((prev)=>{
    return prev.concat(obj);
   })
  }
  return <VoucherContext.Provider value={{add: add, redeemedVouchers: redeemedVouchers}}>
   {props.children}
  </VoucherContext.Provider>
}

export default VoucherProvider