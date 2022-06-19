export type IUser ={
    id?:string;
    username:string;
    age: number;
    hobbies: string[];
};


type IStorage = IUser[];


export let storage: IStorage = []


