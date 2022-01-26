import fetch from 'node-fetch';

const NUMBER_OF_REQUESTS = 100;

for (let i = 0; i < NUMBER_OF_REQUESTS; i++) {
    fetch(
        'http://localhost:8080/tasks/VasFEeR8_ZHHEbKL6B-OIu',
        {
            method: 'POST',
            json: true,
            body: {text: "test" + i}
        }
    ).then(() => {console.log(`${i} completed`)})
}
