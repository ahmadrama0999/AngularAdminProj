export class Dish {

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
    _id: string;
    id: number;
    name: string;
    url: string = null;
}
