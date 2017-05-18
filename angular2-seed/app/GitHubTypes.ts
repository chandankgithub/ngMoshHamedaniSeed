
export interface IFollower{
    follower_name: string;
    avatar_url: string;
}

export interface IUserProfile{
    login: string;
    avatar_url: string;
}

export interface IAccount{
    user_profile: IUserProfile;
    followers: IFollower[]
}