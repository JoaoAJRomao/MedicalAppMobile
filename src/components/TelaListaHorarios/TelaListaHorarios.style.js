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
    textMedic: {
        fontSize: 24,
    },
    backgroundList: {
        flex: 1,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: '90%',
    },
    backgroundTime: {
        height: 50,
        backgroundColor: '#DDD',
        margin: 7,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 250,
        height: 50,
        marginVertical: 15,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    footer: {
        flexDirection: 'row',
        height: '10%',
        width: '90%',
        justifyContent: 'space-between',
        margin: 10,
        alignItems: 'center',
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
        width: 120,
    },
});