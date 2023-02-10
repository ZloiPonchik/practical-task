import "./Card.css";

function Card({picture, gender, name, date, city, country}){
    let tempDate = date.split("T")[0].split("-");
    let newDate = `${tempDate[2]}.${tempDate[1]}.${tempDate[0]}`; 
    return(
        <div className="card">
            <img className="img" src={picture} alt=""/>
            <div className="information">
                <div>Пол: {gender} </div>
                <div>Имя: {name.first} </div>
                <div>Дата рождения: {newDate} </div>
                <div>Город: {city} </div>
                <div>Страна: {country} </div>
            </div>
        </div>
    );
}

export default Card;