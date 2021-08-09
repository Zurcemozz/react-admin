import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featureTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,120</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownward className="featureIcon negative" />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
      <div className="featuredItem">
        <span className="featureTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,220</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownward className="featureIcon negative" />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
      <div className="featuredItem">
        <span className="featureTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,120</span>
          <span className="featuredMoneyRate">
            +31.4
            <ArrowUpward className="featureIcon" />
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
    </div>
  )
}

export default Featured
