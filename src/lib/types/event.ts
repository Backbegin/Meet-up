// created, edited, time are Unix timestamps

export interface Event {
	id: number;
	created: number;
	title: string;
	time: string;
	place: string;
	brief: string;
	authorId: number;
	text: string;
}

export interface EventPageParams {
	params: {
		id: string;
	};
}

export interface EventPageDataType {
	post: Event;
	id: string;
}
