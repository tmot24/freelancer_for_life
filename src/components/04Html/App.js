export const App = () => {
/*
    <form action="#" method={"post"} encType={"multipart/formdata"}>
        <div><input type="text" name={"name"} placeholder={"value"}/></div>
        <div><input type="password" name={"password"} placeholder={"password"}/></div>
        <div><input type="radio" checked name={"radio"}/></div>
        <div><input type="radio" name={"radio"}/></div>
        <div><input type="radio" name={"radio2"}/></div>
        <div><input type="radio" checked name={"radio2"}/></div>
        <div><input type="checkbox" name={"checkbox"}/></div>
        <div><input type="file" name={"file"}/></div>
        <div><textarea name="text" placeholder={}/></div>
        <div>
            <select name="color">
                <option value="1">red</option>
                <option selected value="2">green</option>
                <option value="3">blue</option>
            </select>
        </div>
        <div><button type={"reset"}>send</button></div>
    </form>
*/
    return (
        <>
            <form action="#" method={"get"}>
                <div>
                    <p>Имя</p>
                    <input type={"text"} name={"name"} tabIndex={1} placeholder={"Имя"}/>
                </div>
                <div>
                    <p>Пароль</p>
                    <input type={"password"} name={"password"} tabIndex={2} placeholder={"Пароль"}/>
                </div>
                <div>
                    <p>Телефон</p>
                    <input type={"numbers"} name={"tel"} tabIndex={3} placeholder={"Телефон"}/>
                </div>
                <div>
                    <p>Пол</p>
                    <div>
                        <input tabIndex={4} checked type="radio" name={"gender"} value={"Male"}/> Мужской
                    </div>
                    <div>
                        <input tabIndex={4} type="radio" name={"gender"} value={"Female"}/> Женский
                    </div>
                </div>
                <div>
                    <p>Имущество</p>
                    <div>
                        <input tabIndex={5} type="checkbox" name={"bike"} value={"yes"}/> Велик
                    </div>
                    <div>
                        <input tabIndex={6} type="checkbox" name={"car"} value={"yes"}/> Машина
                    </div>
                    <div>
                        <input tabIndex={7} disabled type="checkbox" name={"house"} value={"yes"}/> Дом
                    </div>
                </div>
                <div>
                    <p>Дополнительная информация</p>
                    <div>
                        <textarea tabIndex={8} name="text"/>
                    </div>
                </div>
                <div>
                    <p>Прикрепить фото</p>
                    <div>
                        <input tabIndex={9} type={"file"}/>
                    </div>
                </div>
                <div>
                    <p>Любимый цвет</p>
                    <div>
                        <select tabIndex={10} name="color">
                            <option selected value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </select>
                    </div>
                </div>
                <div>
                    <p>Действия</p>
                    <div>
                        <button tabIndex={11} type={"submit"}>Send</button>
                        <button tabIndex={12} type={"reset"}>Reset</button>
                    </div>
                </div>

            </form>
        </>
    );
};