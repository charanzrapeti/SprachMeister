// DashboardPage.jsx

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { LinearProgress } from "@mui/material";
import './DashboardPage.css'; 

const levels = [
  {
    value: 1,
    label: "A1",
  },
  {
    value: 2,
    label: "A2",
  },
  {
    value: 3,
    label: "B1",
  },
  {
    value: 4,
    label: "B2",
  },
];

function valuetext(value) {
  return `${value}Level`;
}

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <div className="dashboardTitle">
        <h1>Herzlichen Wilkommen!</h1>
      </div>
      <div className="firstContainer">
        <div className="slider">
          <h2>Choose Level  of Proficiency:</h2>
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="Choose Level"
              defaultValue={1}
              getAriaValueText={valuetext}
              step={1}
              valueLabelDisplay="off"
              min={1}
              max={4}
              marks={levels}
            />
          </Box>
        </div>

        <div className="guage">
          <h2>Progress:</h2>
          <Gauge
            value={75}
            startAngle={-110}
            endAngle={110}
            height={250}
            width={350}
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 50,
                transform: "translate(0px, 0px)",
              },
            }}
            text={({ value, valueMax }) => `${value} / ${valueMax}`}
          />
        </div>
      </div>

      

      <div className="secondContainer">
        <h2>Progress & Accuracy Per Level</h2>
        <div className="progress1">
          <h3>Level A1</h3>
        <div className="progress">
         
              <LinearProgress variant="determinate" value={35} />
        
          </div>
          <div className="accuracy">
           
          <Gauge width={100} height={100} value={50} text={({ value }) => `${value}%`}/>

          </div>
        </div>
        <div className="progress2">
        <h3>level A2</h3>
        <div className="progress">
          
              <LinearProgress variant="determinate" value={35} />
            
        
          </div>
          <div className="accuracy">
          <Gauge width={100} height={100} value={50} text={({ value }) => `${value}%`}/>

          </div>
        </div>
        <div className="progress3">
        <h3>level B1</h3>
        <div className="progress">
       
              <LinearProgress variant="determinate" value={35} />
           
          </div>
          <div className="accuracy">
          <Gauge width={100} height={100} value={50} text={({ value }) => `${value}%`}/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
