import { NunitoText } from '@components/StyledText';
import { Badge } from '@components/badge';
import { Button } from '@components/button';
import { Header } from '@components/header';
import { Loading } from '@components/loading';
import { ModalRemove } from '@components/modal';
import { MealDTO } from '@storage/dto/meal';
import { getOne } from '@storage/getOne';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import { View } from 'react-native';

export default function Meal() {
	const { id }: { id: string } = useLocalSearchParams();
	const [showModal, setShowModal] = useState(false);
	const [meal, setMeal] = useState<MealDTO>();
	const [isLoading, setIsLoading] = useState(true);

	async function fetchMeal() {
		try {
			setIsLoading(true);
			await getOne(parseInt(id)).then(setMeal);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	useFocusEffect(
		useCallback(() => {
			fetchMeal();
		}, []),
	);

	return (
		<View
			className={`pt-5 flex-1 ${
				meal?.status === 'positive' ? 'bg-green-light' : 'bg-red-light'
			}`}
		>
			<ModalRemove setShow={setShowModal} show={showModal} id={id} />
			<Header className="flex-row items-center">
				<NunitoText className="font-bold text-lg text-gray-700 text-center flex-1">
					Refeição
				</NunitoText>
			</Header>
			<View className=" bg-white flex-1 mt-6 rounded-t-3xl pt-10 pb-5 px-4 ">
				{isLoading ? (
					<Loading />
				) : (
					<>
						<NunitoText className="text-xl font-bold">{meal?.name}</NunitoText>
						<NunitoText className="text-base text-gray-600 mt-2">
							{meal?.description}
						</NunitoText>

						<NunitoText className="font-bold text-sm mt-5">
							Data e hora
						</NunitoText>
						<NunitoText className="text-base text-gray-600 mt-2">
							{meal?.date} às {meal?.hour}
						</NunitoText>

						<Badge
							text={
								meal?.status === 'positive'
									? 'dentro da dieta'
									: 'fora da dieta'
							}
							type={meal?.status || 'negative'}
							className="mt-5 max-w-[140px]"
						/>

						<Button
							className="mt-auto"
							text="Editar refeição"
							icon="edit-3"
							onPress={() =>
								router.push({ pathname: '/update/[id]', params: { id } })
							}
						/>
						<Button
							className="mt-3"
							type="outline"
							text="Excluir refeição"
							icon="trash-2"
							onPress={() => setShowModal(true)}
						/>
					</>
				)}
			</View>
		</View>
	);
}
