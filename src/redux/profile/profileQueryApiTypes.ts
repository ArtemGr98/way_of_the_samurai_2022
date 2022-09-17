export interface IContacts {
    facebook?: string;
    website?: string;
    vk?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    github?: string;
    mainLink?: string;
}

export interface IPhotos {
    small?: string;
    large?: string;
}

export interface IProfileInfo {
    aboutMe?: string;
    contacts?: IContacts;
    lookingForAJob?: boolean;
    lookingForAJobDescription?: string;
    fullName: string;
    userId: number;
    photos?: IPhotos;
}

export interface IPosts {
    text: string;
    like: number;
    dislike: number;
    id: number;
}