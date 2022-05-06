import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    scrollview: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        backgroundColor: '#777777',
        elevation: 5,
        borderRadius: 5
    },
    box: {
        height: 110,
        backgroundColor: '#DDD',
        margin: 7,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    groupItem: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    itemText: {
        fontSize: 20
    },
    itemTextMedic:{
        alignItems: 'center'
    },
    scrollviewTouchable: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    scrollviewImage: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    footer: {
        height: 100,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 5
    },
    footerButton: {
        backgroundColor: '#38B6FF',
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 40,
        paddingLeft: 40,
        borderRadius: 10,        
        elevation: 5
    },
    shadow: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
})