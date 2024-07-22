import { PUBLIC_API_BASE_URL } from '$env/static/public';
import axios from 'axios';
import { type Event } from './types/event';

const MOCK: boolean = true;

const api = axios.create({
	baseURL: PUBLIC_API_BASE_URL as unknown as string
});

// User Endpoints
export const saveUser = async (email: string, password: string) => {
	const response = await api.post('/user/save', null, {
		params: { email, password }
	});
	return response.data;
};

export const editUser = async (id: number, email: string, password: string) => {
	false;
	const response = await api.post(`/user/edit/${id}`, null, {
		params: { email, password }
	});
	return response.data;
};

export const deleteUser = async (id: number) => {
	const response = await api.post(`/user/delete/${id}`);
	return response.data;
};

export const getUsers = async () => {
	const response = await api.get('/user/getAll');
	return response.data;
};

export const getUser = async (id: number) => {
	const response = await api.get(`/user/get/${id}`);
	return response.data;
};

// Event Endpoints
export const saveEvent = async (name: string, place: string, date: string, userId: number) => {
	const response = await api.post('/event/save', null, {
		params: { name, place, date, userId }
	});
	return response.data;
};

export const editEvent = async (
	id: number,
	name: string,
	place: string,
	date: string,
	userId: number
) => {
	const response = await api.post(`/event/edit/${id}`, null, {
		params: { name, place, date, userId }
	});
	return response.data;
};

export const deleteEvent = async (id: number, userId: number) => {
	const response = await api.post(`/event/delete/${id}`, null, {
		params: { userId }
	});
	return response.data;
};

export const getAllEvents = async (): Promise<Event[]> => {
	if (!MOCK) {
		const response = await api.get('/event/getAll');
		return response.data;
	}
	return [
		{
			id: 1,
			created: 1721599148,
			title: 'Presentation Afterparty (sleep)',
			time: '1721646000',
			place: 'bed',
			brief: 'Eiusmod nostrud in et sit aliqua velit minim anim.',
			authorId: 1,
			text: '# Text'
		},
		{
			id: 2,
			created: 1721599148,
			title: 'Presentation Afterparty (sleep)',
			time: '1721646000',
			place: 'bed',
			brief: 'Occaecat est mollit et laborum enim ea elit voluptate veniam fugiat esse.',
			authorId: 1,
			text: '# Text'
		},
		{
			id: 3,
			created: 1721599148,
			title: 'Presentation Afterparty (sleep)',
			time: '1721646000',
			place:
				'Aliquip nostrud magna in velit eu excepteur qui quis ea tempor incididunt dolore officia quis.',
			brief:
				'Consectetur ea ea magna laborum magna ullamco minim cupidatat sint proident. Mollit duis aliqua ad quis. Elit laborum reprehenderit fugiat officia cupidatat mollit nulla duis. Ea irure tempor ex eu laborum pariatur pariatur. Cupidatat ex commodo id esse cupidatat excepteur. Cupidatat eu ut pariatur velit minim. Velit consectetur anim occaecat velit exercitation sit ex fugiat esse adipisicing nisi tempor anim.',
			authorId: 1,
			text: '# Text'
		},
		{
			id: 4,
			created: 1721599148,
			title: 'Presentation Afterparty (sleep)',
			time: '1721646000',
			place: 'bed',
			brief: 'Deserunt minim dolor nisi exercitation aute deserunt.',
			authorId: 1,
			text: '# Text'
		},
		{
			id: 5,
			created: 1721599148,
			title: 'Presentation Afterparty',
			time: '2721646000',
			place: 'bed',
			brief:
				'Officia officia dolore adipisicing commodo esse. Voluptate anim nulla ipsum magna. Dolor ipsum est Lorem non veniam aliquip nostrud aliqua ut commodo fugiat officia eu. Adipisicing et dolore irure sunt irure adipisicing ipsum ut ex duis eu qui.',
			authorId: 1,
			text: '# Text'
		}
	];
};

export const getEvent = async (id: number) => {
	if (!MOCK) {
		const response = await api.get(`/event/get/${id}`);
		return response.data;
	}
	return (await getAllEvents())[id - 1];
};
