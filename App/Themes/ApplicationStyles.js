import Fonts from './Fonts'
import Metrics from './Metrics'
import colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
   screen : {
       container: {
           padding: 20,
           backgroundColor: 'white'
       },
       label: {
           fontSize: 15,
       },
       logo:{
           justifyContent: 'center',
           alignItems: 'center',
       },
       inputGroup: {
           marginTop: 25,
       },
       input: {
           borderTopColor: 'transparent',
           borderLeftColor: 'transparent',
           borderRightColor: 'transparent',
           borderBottomColor: '#ccc',
       },
       logoImage: {
           width: 200,
           height: 200,
       },
       forgotLink: {
           color: '#555',
           textAlign: 'right',
       },
       btnGroup: {
           marginTop: 20,
           marginBottom: 20,
       },
       btnDefault: {
           backgroundColor: '#24c2e6',
           alignItems: 'center',
           padding: 10,
           borderRadius: 24,
           marginBottom: 5,
       },
       btnGoogle: {
           backgroundColor: colors.google,
           alignItems: 'center',
           padding: 10,
           borderRadius: 24,
           marginTop: 5,
       },
       btnFace: {
           backgroundColor: colors.facebook,
           alignItems: 'center',
           padding: 10,
           borderRadius: 24,
           marginTop: 5,
           marginBottom: 5,
       },
   }

}

export default ApplicationStyles
