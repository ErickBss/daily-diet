import { Modal, View } from 'react-native';
import { NunitoText } from './StyledText';
import { Button } from './button';
import { remove } from '@storage/delete';
import { router } from 'expo-router';

type ModalRemoveProps = {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	id: string;
};

export function ModalRemove({ show, setShow, id }: ModalRemoveProps) {
	async function handleRemove() {
		try {
			await remove(parseInt(id));
			router.push('/');
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Modal visible={show} onRequestClose={() => setShow(false)} transparent>
			<View className="flex-1 bg-gray-700/25 justify-center items-center">
				<View className="rounded-lg bg-white w-10/12 h-[192px] justify-center items-center p-5">
					<NunitoText className="font-bold text-gray-700 text-lg text-center w-10/12">
						Deseja realmente excluir o registro da refeição?
					</NunitoText>

					<View className="flex-row mt-7">
						<Button
							type="outline"
							text="Cancelar"
							className="flex-1"
							onPress={() => setShow(false)}
						/>
						<Button
							text="Sim, excluir"
							className="flex-1 ml-3"
							onPress={() => handleRemove()}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}
