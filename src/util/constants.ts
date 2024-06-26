import { createContext } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import {
	DestinationNames,
	DestinationObject,
	DestinationUrls,
	Settings,
	SettingsOptions,
} from '@util/types';
import * as FileSystem from 'expo-file-system';
import * as Device from 'expo-device';
import {
	applicationId,
	applicationName,
	nativeApplicationVersion,
	nativeBuildVersion,
} from 'expo-application';

export const ThemeContext = createContext(null);
export const customUploadersDir = `${FileSystem.documentDirectory}uploaders`;

export const aboutContent = `Client data:\n\n${applicationName} (${applicationId})\nVersion: ${nativeApplicationVersion} (${nativeBuildVersion})\n\nDevice data:\n\nBrand: ${Device.brand}\nOperating System: ${Device.osName} ${Device.osVersion}\nManufacturer: ${Device.manufacturer}\nYear: ${Device.deviceYearClass}\nReal device: ${Device.isDevice}`;

export const Destinations: DestinationObject[] = [
	{
		name: DestinationNames.ImgBB,
		url: DestinationUrls.ImgBB,
		settings: { apiKey: '' },
		getRemotePath: data => data.data.url,
		getDeleteEndpoint: data => data.data.delete_url,
		deletable: false,
	},
	{
		name: DestinationNames.Imgur,
		url: DestinationUrls.Imgur,
		settings: { apiClientId: '' },
		getRemotePath: data => data.data.link,
		getDeleteEndpoint: data =>
			`${DestinationUrls.Imgur}/${data.data.deletehash}`,
		deletable: true,
	},
	{
		name: DestinationNames.Custom,
		getRemotePath: data => data.data.url,
		getDeleteEndpoint: data => data.deletion_url,
		deletable: true,
	},
];

export const emptySettings: Settings = {
	theme: 'auto',
	ImgBBApiKey: '',
	currentUploaderPath: '',
	[SettingsOptions.MultiUpload]: false,
	[SettingsOptions.ImageZoomAndDrag]: false,
};

export const Styles = StyleSheet.create({
	container: {
		flex: 15,
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		width: '100%',
	},
	preview: {
		height: '90%',
		width: '95%',
		resizeMode: 'cover',
		borderRadius: 15,
	},
	buttonContainer: {
		flex: 2,
		flexDirection: 'row',
	},
	buttonContainer2: {
		flexDirection: 'row',
	},
	button: {
		marginHorizontal: 5,
	},
	buttonModal: {
		position: 'absolute',
		bottom: '10%',
	},
	buttonBig: {
		marginHorizontal: 5,
	},
	fileWrap: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		width: '100%',
	},
	configWrap: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		width: '100%',
	},
	hosts: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		width: '100%',
	},
	generalSettings: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
	about: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
	aboutWrapper: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		width: '100%',
	},
	aboutModal: {
		justifyContent: 'flex-end',
		margin: 0,
	},
	hostsButton: {
		width: '50%',
		height: 50,
		backgroundColor: '#FFF',
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#444',
	},
	hostsButtonText: {
		color: '#444',
		textAlign: 'left',
	},
	hostsDropdown: {
		backgroundColor: '#EFEFEF',
	},
	hostsRow: {
		backgroundColor: '#EFEFEF',
		borderBottomColor: '#C5C5C5',
	},
	hostsRowText: {
		color: '#444',
		textAlign: 'left',
	},
	content: {
		backgroundColor: '#111',
		padding: 22,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
	},
	contentTitle: {
		fontSize: 20,
		marginBottom: 12,
	},
	contentLogin: {
		backgroundColor: '#111',
		padding: 22,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
	},
	update: {
		color: '#00ffff',
		textDecorationLine: 'underline',
	},
	progress: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '50%',
	},
	progressContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '50%',
	},
	galleryImage: {
		height: 80,
		width: 80,
		resizeMode: 'center',
	},
	imagesWrap: {
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		width: '100%',
	},
	imageModal: {
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
		resizeMode: 'contain',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
	},
	modal: {
		flex: 1,
		alignItems: 'center',
		padding: 100,
	},
	text: {
		color: '#3f2949',
		marginTop: 10,
	},
	buttonContainerGallery: {
		flex: 2,
		flexDirection: 'row',
		padding: 50,
	},
	dropdownButton: {
		width: '80%',
		height: 50,
		backgroundColor: '#FFF',
		paddingHorizontal: 0,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: '#444',
	},
	dropdownButtonText: {
		color: '#444',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 24,
		marginHorizontal: 12,
	},
	dropdown: {
		backgroundColor: 'slategray',
	},
	dropdownRow: {
		backgroundColor: 'slategray',
		borderBottomColor: '#444',
		height: 50,
	},
	dropdownRowText: {
		color: '#F1F1F1',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 24,
		marginHorizontal: 12,
	},
	textInput: {
		width: '80%',
		maxWidth: '80%',
		height: 50,
	},
	buttonContainerSettings: {
		flexDirection: 'row',
	},
	dropdownChild: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 18,
	},
	dropdownImage: {
		width: 45,
		height: 45,
		resizeMode: 'cover',
	},
	dropdownRowChild: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingHorizontal: 18,
	},
	dropdownRowImage: {
		width: 45,
		height: 45,
		resizeMode: 'cover',
	},
});
