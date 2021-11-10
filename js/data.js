
/*
Форма зворотнього зв'язку.
JS проводить перевірку даних в ній і в випадку, якщо дані було введено
не вірно - показує на екрані користувача помилку.
*/
function Formdata(data){

    if (data.fnm != null && data.fnm.value.length < 3 )
    {
    alert('Заповніть поле "Ваше ім’я"');
    return false;}
    
    if (data.text != null && data.text.value.length < 3)
    {
    alert('Заповніть поле "Повідомлення"');
    return false;}
    
    if(data.email != null && data.email.value.length == 0)
    {
    alert('поле "E-Mail" пусте');
    return false;}
    
    if(data.email != null && data.email.value.length < 6)
    {
    alert('занадто короткий "E-Mail"');
    return false;}
    
    if(!(/^\w+[-_\.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(data.email.value)) )
    {
    alert("Введіть правильну E-Mail адресу");
    return false;}
    
    if(data.phone != null && data.phone.value.length == 0)
    {
    alert('поле "Контактний телефон" пусте');
    return false;}
    
    if(data.phone != null && data.phone.value.length < 5)
    {
    alert('поле "Контактный телефон" повинно мати мінімум 5 символів');
    return false;}
   
    number = document.getElementById("summa");
    if (number.value !== '20')
    {
    alert('"Сума" не введена или введена не вірно');
    return false;}
    }