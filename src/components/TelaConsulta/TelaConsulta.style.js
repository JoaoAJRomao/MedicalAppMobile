import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    header: {
        backgroundColor: '#101010',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'yellow',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5
    },
    box: {
        height: 100,
        backgroundColor: '#DDD',
        margin: 7,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    groupItem: {        
        width: '70%',
        marginStart: 10,
    },
    item: {
        fontSize: 18,
    },
    colorItem: {
        height: '80%',
        width: '20%',
        backgroundColor: 'blue',
        marginLeft: 10,
        borderRadius: 10
    },
    scrollview: {
        justifyContent: 'center',
        flex: 1,
        margin: 10
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
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 5
    },
    footerButton: {
        backgroundColor: 'red',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 5
    },
    verticleLine: {
        height: '80%',
        width: 1,
        backgroundColor: '#909090',
    }
})