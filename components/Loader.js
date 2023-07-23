export default function Loader( { show } ){
    //Checks for the show value
    return show ? <div className="loader"></div> : null;
}