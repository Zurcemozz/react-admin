import React from 'react'
import { userData } from '../.././dummyData'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featuredInfo/Featured'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import Widget from '../../components/widgetSm/Widget'
import './home.css'

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Chart
        data={userData}
        title="user Analaytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <Widget />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home
