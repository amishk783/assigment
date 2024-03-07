export interface BaseItem {
	date: Date;
	type: 'job' | 'post';
}
export type Timeline = PostCard | JobCard;
export interface PostItem  {
	imgSrc: string;
    text: string;
    
}

export interface PostCard extends BaseItem {
	type: 'post';
    date: Date;
    postItem: PostItem[];
}

export interface JobCard extends BaseItem {
	type: 'job';
	imgSrc: string;
	jobLocation: string;
	jobTitle: string;
	date: Date;
	jobType: string;
	companyName: string;
}
