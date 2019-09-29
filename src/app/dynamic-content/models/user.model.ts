export class User {
    id: number;
    firstName: string;
    lastName: string;
    constructor(values?: any) {
        if (values) {
            Object.assign(this, values);
        }
    }
}
