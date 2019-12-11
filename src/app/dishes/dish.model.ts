export class Dish {

    constructor(name: string) {
        this.name = name;
    }
    image?: File;
    _id: string;
    id: number;
    name: string;
    url: string = null;
}


