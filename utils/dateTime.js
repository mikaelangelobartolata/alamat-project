const dateTime = {
    getTime() {
        const now = new Date();
        const str = now.toLocaleTimeString();

        return str;
    },
    getDate() {
        const now = new Date();
        const str = now.toLocaleDateString();

        return str;
    },
    getBoth() {
        const date = this.getDate();
        const time = this.getTime();

        return { date, time };
    }
}

export default dateTime;