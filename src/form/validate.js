export  const validate=(data)=>{
    const errors = {}
    if (!data.name.trim()){
        errors.name ="Name is required"
    }else {
        delete errors.name
    }
    if (!data.email){
        errors.email="Email is required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email= "Email address is invalid"
    }else {
        delete errors.email
    }
    if (!data.massage){
        errors.massage ="massage is required"
    }else {
        delete errors.massage
    }
    return errors
}