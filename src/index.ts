import { PriorityQueue } from "./priorityQueue";

const jobRunner = () => {
    const queue = new PriorityQueue<number>();

    const getRandomInt = (): number => {
        return Math.floor(Math.random() * 10000);
    }

    for (let i = 0; i < 10000; i++) {
        const item = getRandomInt();
        queue.enqueue(item, item);
    }

    while (true) {
        let oldItem = queue.dequeue();
        console.log(oldItem.value);

        const item = getRandomInt();
        queue.enqueue(item, item);
    }
}

jobRunner();