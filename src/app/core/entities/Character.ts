import {Media} from './Media';

export class Character {
    public id: number;
    public name: string;
    public realName: string;
    public description: any;
    public slug: string;
    public avatar: string;
    public media: Media;
    public createdAt: string;
    public updatedAt: string;
}