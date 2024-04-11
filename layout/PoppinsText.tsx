import {  Text ,TextProps, TextStyle } from 'react-native'
import React from 'react'


interface IStyle extends TextStyle{
    fontWeight:"bold" | "normal" | "100" | "200" | "300" |"400"  |  "500" | "600" | "700" | "800" | "900" | undefined;
}



interface IPoppinsText extends TextProps{
   
    style?:IStyle;



}







const PoppinsText: React.FC<IPoppinsText> = ({
    children,style,...props}) => {

       let customFont = 'Poppins400Regular'

       //const {fontWeight,...customStyles}=style

       let customStyle = {};
  

       if(style){
   console.log('if style');

        if(style.fontWeight==='500'){

            console.log('if fontweight');
          const {fontWeight, ...cStyle}= style;
        customStyle = cStyle;
       }else{
        console.log('if not fontweight');
        
        customStyle = style;
       }
    
       if(style?.fontWeight){
            if(style.fontWeight==='500'){
                customFont = 'Poppins_500Medium'
            }else if(style.fontWeight==='600'){
                customFont = 'Poppins_600SemiBold'
            } else if(style.fontWeight==='700'){
                customFont = 'Poppins_700Bold'
            }
        }

        

    }
    console.log(customStyle,customFont)

        return<Text style={[
            {
color:"white",
fontFamily:customFont,


        },customStyle
    
    ]}
       {...props}>
        
        {children}
        </Text>
   
  
}

export default PoppinsText