export type CreateMealDTO = {
	name: string;
	description: string;
	date: string;
	hour: string;
	status: 'positive' | 'negative';
};

export type MealDTO = {
	id: number;
	name: string;
	description: string;
	date: string;
	hour: string;
	status: 'positive' | 'negative';
};
