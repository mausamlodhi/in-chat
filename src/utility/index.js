function showConsole(data){
    if(process.env.environment==="development"){
        console.log(data);
    }
};

module.exports = {
    showConsole,
}