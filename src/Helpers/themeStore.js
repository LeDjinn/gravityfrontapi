import store from '../container/redux/store';





export function getStoreLoginStatus() {
           const logStatus = store.getState().logStatus.payload;
      return logStatus
}


export  function getThemeFromStorage(){
     const  themeString = localStorage.getItem("theme")
     if(themeString){
          const  theme = JSON.parse(localStorage.getItem("theme"));
          return theme
     }
     else {
          const theme = 
                
               {   id: 0,
                   user_id: 0,
                   name: 'default',
                   bodyBg:'',
                   bgNavbar: 'blue',
                   colorNavbar: 'white',
                   heroHomeHeight: '200',
                   heroHomeBgImage: 'https://images.unsplash.com/photo-1571607073129-606b83b78f02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                   heroHomeBgColor: 'white',
                   heroHomeColor: 'white',
                   buttonBgColor: '#EA4C89',
                   buttonColor: 'white',
                   buttonShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)',
                   buttonBorderRadius: '15',
                   heroConsultantsHeight: '200',
                   heroConsultantsBgImage: 'https://images.unsplash.com/photo-1571607073129-606b83b78f02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                   heroConsultantsBgColor: 'white',
                   heroConsultantsColor: 'white',
                   heroProfilHeight: '200',
                   heroProfilBgImage: 'https://images.unsplash.com/photo-1571607073129-606b83b78f02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                   heroProfilBgColor: 'white',
                   heroProfilColor: 'white',
                   backgroundProfilcolor: 'linear-gradient( #e9f2f5, #bfe9ff )',
                   heroAboutHeight: '200',
                   heroAboutBgImage: 'https://images.unsplash.com/photo-1571607073129-606b83b78f02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                   heroAboutBgColor: 'white',
                   heroAboutColor: 'white',
                   footerBgColor: 'black',
                   footerColor: 'white',
                   footerHeight: '100'
           
            }
           
            return  theme
         
          }

     

     
}


