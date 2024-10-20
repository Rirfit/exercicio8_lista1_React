function Online(props){
    let online = props.online

    return online ? "Usuario online" : "Usuario offline"
}
export default Online