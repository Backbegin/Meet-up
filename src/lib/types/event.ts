// created, edited, time are Unix timestamps

export interface Event {
	id: number;
	created: number;
	edited: number;
	title: string;
	time: number;
	place: string;
	brief: string;
	authorId: number;
	text: string;
}
