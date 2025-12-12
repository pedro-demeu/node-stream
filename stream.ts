const acc = [];

setInterval(() => {
    acc.push(new Array(2_000_000).fill(0));
    console.log(process.memoryUsage().heapUsed / 1024 / 1024);
}, 300)