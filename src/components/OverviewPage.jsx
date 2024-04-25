// OverviewPage.jsx
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

const OverviewPage = () => {
  return (
    <div>
      <Gauge
        value={75}
        startAngle={-110}
        endAngle={110}
        height={300}
        sx={{
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40,
            transform: "translate(0px, 0px)",
          },
        }}
        text={({ value, valueMax }) => `${value} / ${valueMax}`}
      />
    </div>
  );
};

export default OverviewPage;
