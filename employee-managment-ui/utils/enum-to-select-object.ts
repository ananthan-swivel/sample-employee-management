export function enumToSelectObject(enumValue:any){
    let selectObj = {};
    selectObj = Object.keys(enumValue).map(key =>{
        return {
            ...selectObj,
            lable:enumValue[key],
            value:key
        }
    } );
    return selectObj;
}