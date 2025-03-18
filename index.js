const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((acc, e)=>{return acc+e}, 0);

const f = document.getElementById("g")