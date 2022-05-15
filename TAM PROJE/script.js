const inputs = document.querySelectorAll('.field');

for (const input of inputs) {
  input.setAttribute('required', '');
}

function a()
{
  var a=document.getElementById("id");
  var b=document.getElementById("psw");
  if((a.value=="furkan.tataroglu@ogr.sakarya.edu.tr")||(b.value=="g201210089"))
{
document.getElementById('err').innerHTML= 'Giriş Başarılı';
location.href = "index.html";
}
else
{
document.getElementById('err').innerHTML= 'Kullanıcı Adı Veya Şifreniz Yanlış';
}
}