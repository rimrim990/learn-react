export interface Data {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    finishedAt?: Date;
}

export type DataInput = Pick<Data, 'title' | 'content'>