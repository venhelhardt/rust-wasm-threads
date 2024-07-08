document.getElementById('start').addEventListener('click', () => {
    const worker = new Worker('worker.js');
    let messageCount = 0;
    let start_time = performance.now();
    let sz = 16;
    //let sz = 20 * 1024 * 1024;
    const array = new Uint8Array(sz);


    worker.onmessage = (event) => {
        if(messageCount == 100000 ){
            let end_time = performance.now();

            document.getElementById('result').innerText = `Messages sent in ${end_time - start_time}ms: ${messageCount}, ${(end_time - start_time)/ messageCount} per ms`;
            worker.terminate();
        }
        else {
            if(messageCount == 0) {
                start_time = performance.now();
            }
            const data = event.data;

            worker.postMessage(data, [data]);

            messageCount++;
        }

    };

    worker.postMessage(array.buffer);
});
