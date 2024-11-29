onmessage = (e) => {
  console.log('Worker: Message received from main thread');
  console.log(e);
  if (e.data.name === 'hello') {
    console.log('Worker: Sending message to main therad');
    postMessage({ name: 'hello back' });
  }
};
