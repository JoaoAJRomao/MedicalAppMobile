import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    item: {
        width: 150,
        height: 50,
        marginHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 16,
        color: '#38B6FF',
        fontWeight: 'bold',
    },
    carrousel: {
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 5,
        backgroundColor: 'white'
    },
    
    carrouselMedicos: {
    //   flex: 5,
      alignItems: "center",
    },imagemMedico:{
      borderRadius: 150, 
      width: 50 ,
      height: 50,
      marginTop:10
    }
})