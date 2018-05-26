export class TextObject {
    text: string;
    data: string;
}

export class TextForDataService {
    text: string;
    count = 0;

    updateCount() {
        this.count++;
    }
}

export interface Results {
    name: string;
    latest: string;
}

export interface Result {
    results: Results[];
}
