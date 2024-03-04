let header = document.createElement('header')
let left = document.createElement('div')
let right = document.createElement('div')
let img = document.createElement('img')
let city = document.createElement('a')
let shop = document.createElement('a')
let dostavka = document.createElement('a')
let blog = document.createElement('a')
let bizness = document.createElement('a')
let phone = document.createElement('a')
let container = document.createElement('div')


left.classList.add('left');
right.classList.add('right');
img.classList.add('logo');
header.classList.add('small');
container.classList.add('container')

city.href = "#";
shop.href = "#";
dostavka.href = "#";
blog.href = "#";
bizness.href = "#";
phone.href = "#";

img.src = "./img/logo.png";


city.innerHTML = "Москва";
shop.innerHTML = "Магазины";
dostavka.innerHTML = "Доставка";
blog.innerHTML = "Блог";
bizness.innerHTML = "Для бизнесса";
phone.innerHTML = "8-800-600-7775";

header.append(left , right);
left.append(img , city , shop , dostavka);
right.append(blog , bizness , phone);






let big = document.createElement('div')
let img_second = document.createElement('img')
let button = document.createElement('button')
let input = document.createElement('input')
let stat = document.createElement('a')
let sign  = document.createElement('a')
let srav = document.createElement('a')
let izbranno = document.createElement('a')
let trash = document.createElement('a')

big.classList.add('big')
img_second.classList.add('mvideo')
input.classList.add('search')

stat.href = "#"
sign.href = "#"
srav.href = "#"
izbranno.href = "#"
trash.href = "#"

img_second.src = "./img/mvideo.png"


button.innerHTML = 'Каталог'
stat.innerHTML = 'Статус'
sign.innerHTML = 'Войти'
srav.innerHTML = 'Сравнение'
izbranno.innerHTML = 'Избранное'
trash.innerHTML = 'Корзина'


big.append(img_second , button , input , stat , sign , srav , izbranno , trash)




let h4 = document.createElement('h4')

h4.innerHTML = 'Главная - Все товары бренда Samsung в интернет-магазине М.Видео'

document.body.append(h4)



let sams = document.createElement('div')
let samsung = document.createElement('h1')

sams.classList.add('sams')
samsung.classList.add('samsung')

samsung.innerHTML = 'Samsung'

sams.append(samsung)

container.append(header , big , h4 , sams)
document.body.append(container)

