export interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    position: string;

    isActive?: boolean;
    isTenured?: boolean;
}