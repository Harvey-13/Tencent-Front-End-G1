export function setUserInfo(item: any = null) {
  return {
    type: 'SET_USERINFO',
    item,
  };
}
export const setFun = (data:any) =>{
  return{
      type:"SET",
      data:data
  }
}