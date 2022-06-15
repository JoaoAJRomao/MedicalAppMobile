import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    content: {
        flex: 2,
        margin: 8,
        alignItems: "center",
    },
    titleText: {
        fontSize: 24,
        marginLeft: 10,
    },
    genericImage: {
        borderRadius: 130,
        width: 70,
        height: 70,
        margin: 10
    },
    organizerHeader: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
    },
    card: {
        width: 225,
        height: 70,
        marginVertical: 15,
        marginLeft: 10,
        backgroundColor: "#FFFF",
        justifyContent: "center",
        borderRadius: 10,
        alignItems: "center"
    },
    cardConfirmacao: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        width: '90%',
        height: 123,
        justifyContent: 'center',
        padding: 16
    },
    text: {
        fontSize: 20,
    },
    backgroundMensagem: {
        backgroundColor: '#777777',
        borderRadius: 12,
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
        paddingVertical: 10,
    },
    footer: {
        flexDirection: 'row',
        height: '10%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        padding: 20,
    },
    footerDeclineButton: {
        backgroundColor: '#EC2D2D',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        width: 120,
    },
    footerAcceptButton: {
        backgroundColor: '#38B6FF',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        width: 140,
    },
    footerGoHomeButton: {
        backgroundColor: '#38B6FF',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        width: '100%',
        flexDirection: 'row'
    },
});