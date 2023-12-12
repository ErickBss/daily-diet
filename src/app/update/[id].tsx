import { NunitoText } from '@components/StyledText';
import { Button } from '@components/button';
import { Header } from '@components/header';
import { Input } from '@components/input';
import { Label } from '@components/label';
import { RadioButton } from '@components/radioButton';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { router } from 'expo-router';

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
	const [isOnDiet, setOnDiet] = useState<boolean | null>(null);
	const {
		setValue,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<updateProps>({
		resolver: zodResolver(updateSchema),
	});

	function onSubmit(data: updateProps) {
		console.log(data);
		router.push('/created/positive');
	}

	useEffect(() => {
		register('name');
		register('description');
		register('date');
		register('hour');
		register('status');
	}, []);

	return (
		<View className="bg-gray-300 pt-5 flex-1">
			<Header className="flex-row items-center">
				<NunitoText className="font-bold text-lg text-gray-700 text-center flex-1">
					Editar refeição
				</NunitoText>
			</Header>
			<View className=" bg-white flex-1 mt-6 rounded-t-3xl pt-10 pb-5 px-4 items-center">
				<View className="w-full h-full">
					<Label>Nome</Label>
					<Input
						errorMessage={errors?.name?.message}
						onChangeText={(text) => setValue('name', text)}
					/>

					<Label className="mt-3">Descrição</Label>
					<Input
						textAlignVertical="top"
						numberOfLines={5}
						multiline
						errorMessage={errors?.description?.message}
						onChangeText={(text) => setValue('description', text)}
					/>

					<View className="flex-row mt-3">
						<View className="flex-1 mr-5">
							<Label>Data</Label>
							<Input
								inputMode="numeric"
								placeholder="DD/MM/YYYY"
								errorMessage={errors?.date?.message}
								onChangeText={(text) => setValue('date', text)}
							/>
						</View>

						<View className="flex-1">
							<Label>Hora</Label>
							<Input
								inputMode="numeric"
								placeholder="HH:MM"
								errorMessage={errors?.hour?.message}
								onChangeText={(text) => setValue('hour', text)}
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
						onPress={() => router.push('/created/positive')}
						// onPress={handleSubmit(onSubmit)}
					/>
				</View>
			</View>
		</View>
	);
}
