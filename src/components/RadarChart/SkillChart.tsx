import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const data = {
  labels: ['ReactJS', 'NextJS', 'NodeJS', 'Docker', 'TypeScript'],
  datasets: [
    {
      label: 'Habilidades',
      data: [90, 85, 80, 75, 70],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    r: {
      angleLines: {
        display: false,
      },
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
};

const SkillChart: React.FC = () => {
  return <Radar data={data} options={options} />;
};

export default SkillChart;
