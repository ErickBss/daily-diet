import { NunitoText } from '@components/StyledText';
import { Button } from '@components/button';
import { Header } from '@components/header';
import { Input } from '@components/input';
import { Label } from '@components/label';
import { RadioButton } from '@components/radioButton';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { getOne } from '@storage/getOne';
import { MealDTO } from '@storage/dto/meal';
import { Loading } from '@components/loading';
import { update } from '@storage/update';

const updateSchema = z.object({
	name: z.string({ required_error: 'Nome é obrigatório' }),
	description: z.string({ required_error: 'Descrição é obrigatório' }),
	date: z.string({ required_error: 'Data é obrigatório' }).refine(
		(data) => {
			const dateFormatRegex = /^\d{2}\/\d{2}\/\d{4}$/;
			return dateFormatRegex.test(data);
		},
		{ message: 'Formato inválido' },
	),
	hour: z.string({ required_error: 'Hora é obrigatório' }).refine(
		(data) => {
			const hourFormatRegex = /^\d{2}:\d{2}$/;
			return hourFormatRegex.test(data);
		},
		{ message: 'Formato inválido' },
	),
	status: z.enum(['positive', 'negative']),
});

type updateProps = z.infer<typeof updateSchema>;

export default function Update() {
	const { id }: { id: string } = useLocalSearchParams();
	const [isOnDiet, setOnDiet] = useState<boolean | null>(null);
	const {
		setValue,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<updateProps>({
		resolver: zodResolver(updateSchema),
	});
	const [meal, setMeal] = useState<MealDTO>();
	const [isLoading, setIsLoading] = useState(true);

	async function fetchMeal() {
		try {
			setIsLoading(true);
			await getOne(parseInt(id)).then((response) => {
				setMeal(response);
				setOnDiet(response?.status === 'positive');

				if (response) {
					Object.keys(response).map((key) => {
						setValue(key as any, (response as any)[key]);
					});
				}
			});
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	async function onSubmit(data: updateProps) {
		try {
			await update(parseInt(id), data);

			if (data.status === 'positive') {
				router.push('/created/positive');
			} else {
				router.push('/created/negative');
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		register('name');
		register('description');
		register('date');
		register('hour');
		register('status');
	}, []);

	useFocusEffect(
		useCallback(() => {
			fetchMeal();
		}, []),
	);
	return (
		<View className="bg-gray-300 pt-5 flex-1">
			<Header className="flex-row items-center">
				<NunitoText className="font-bold text-lg text-gray-700 text-center flex-1">
					Editar refeição
				</NunitoText>
			</Header>
			{isLoading ? (
				<Loading />
			) : (
				<View className=" bg-white flex-1 mt-6 rounded-t-3xl pt-10 pb-5 px-4 items-center">
					<View className="w-full h-full">
						<Label>Nome</Label>
						<Input
							errorMessage={errors?.name?.message}
							onChangeText={(text) => setValue('name', text)}
							defaultValue={meal?.name}
						/>

						<Label className="mt-3">Descrição</Label>
						<Input
							textAlignVertical="top"
							numberOfLines={5}
							multiline
							errorMessage={errors?.description?.message}
							onChangeText={(text) => setValue('description', text)}
							defaultValue={meal?.description}
						/>

						<View className="flex-row mt-3">
							<View className="flex-1 mr-5">
								<Label>Data</Label>
								<Input
									inputMode="numeric"
									placeholder="DD/MM/YYYY"
									errorMessage={errors?.date?.message}
									onChangeText={(text) => setValue('date', text)}
									defaultValue={meal?.date}
								/>
							</View>

							<View className="flex-1">
								<Label>Hora</Label>
								<Input
									inputMode="numeric"
									placeholder="HH:MM"
									errorMessage={errors?.hour?.message}
									onChangeText={(text) => setValue('hour', text)}
									defaultValue={meal?.hour}
								/>
							</View>
						</View>

						<Label className="mt-3">Está dentro da dieta?</Label>
						<View className="flex-row mb-3">
							<RadioButton
								text="Sim"
								type="positive"
								selected={!!isOnDiet}
								className="mr-5"
								onPress={() => {
									setOnDiet(true);
									setValue('status', 'positive');
								}}
							/>
							<RadioButton
								text="Não"
								type="negative"
								selected={isOnDiet === false}
								onPress={() => {
									setOnDiet(false);
									setValue('status', 'negative');
								}}
							/>
						</View>

						<Button
							text="Salvar alterações"
							className="mt-auto"
							onPress={handleSubmit(onSubmit)}
						/>
					</View>
				</View>
			)}
		</View>
	);
}
