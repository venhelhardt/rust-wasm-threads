let messageCount = 0;
let startTime;

onmessage = (event) => {
    postMessage(event.data);
};
