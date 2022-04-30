import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    page: {
        backgroundColor: '#C9D5D9',
        flex: 1
    },
    header: {
        backgroundColor: '#C9D5D9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5
    },
    headerOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerIcons: {
        width: 30,
        height: 30,
        marginRight: 10,
        marginLeft: 10
    },
    scrollview: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        backgroundColor: '#777777',
        elevation: 5,
    },
    box: {
        height: 100,
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
        fontSize: 16
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