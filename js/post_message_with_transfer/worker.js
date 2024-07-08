let messageCount = 0;
let startTime;

onmessage = (event) => {
    const data = event.data;

    postMessage(data, [data]);
};
