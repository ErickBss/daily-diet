import { NunitoText } from '@components/StyledText';
import { Badge } from '@components/badge';
import { Button } from '@components/button';
import { Header } from '@components/header';
import { ModalRemove } from '@components/modal';
import { router } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';

export default function Meal() {
	const [showModal, setShowModal] = useState(false);
	return (
		<View className="bg-red-light pt-5 flex-1">
			<ModalRemove setShow={setShowModal} show={showModal} />
			<Header className="flex-row items-center">
				<NunitoText className="font-bold text-lg text-gray-700 text-center flex-1">
					Refeição
				</NunitoText>
			</Header>
			<View className=" bg-white flex-1 mt-6 rounded-t-3xl pt-10 pb-5 px-4 ">
				<NunitoText className="text-xl font-bold">Sanduíche</NunitoText>
				<NunitoText className="text-base text-gray-600 mt-2">
					Sanduíche de pão integral com atum e salada de alface e tomate
				</NunitoText>

				<NunitoText className="font-bold text-sm mt-5">Data e hora</NunitoText>
				<NunitoText className="text-base text-gray-600 mt-2">
					12/08/2022 às 16:00
				</NunitoText>

				<Badge
					text="fora da dieta"
					type="negative"
					className="mt-5 max-w-[140px]"
				/>

				<Button
					className="mt-auto"
					text="Editar refeição"
					icon="edit-3"
					onPress={() =>
						router.push({ pathname: '/update/[id]', params: { id: 12 } })
					}
				/>
				<Button
					className="mt-3"
					type="outline"
					text="Excluir refeição"
					icon="trash-2"
					onPress={() => setShowModal(true)}
				/>
			</View>
		</View>
	);
}
