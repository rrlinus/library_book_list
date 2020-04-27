function BOOK(title,author,isbn){
this.title=title;
this.author=author;
this.isbn=isbn;
}
function UI(){

}
UI.prototype.addBookToList=function(book){
const list=document.getElementById('book-list');

const row=document.createElement('tr')
for(let i in book){
    let td=document.createElement('td');
    td.append(book[i]);
    row.append(td)
}
let a=document.createElement('a');
a.setAttribute('href','#')
a.innerHTML='X'
a.className='delete'
console.log(a)
let td=document.createElement('td')
td.append(a)
row.append(td)
list.appendChild(row)
}

UI.prototype.showAlert=function(message,classname){

let container=document.querySelector('.container');

let form=document.getElementById('book-form');

document.createElement('div');

const div=document.createElement('div');

div.append(message)

div.className=`alert ${classname}`;

container.insertBefore(div,form);

setTimeout(function(){
    document.querySelector('.alert').remove();
},3000)



}

UI.prototype.deleteBook = function(target){
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
  

UI.prototype.clearFields=function(){
    document.getElementById('title').value=" ";
    document.getElementById('author').value=" ";
    document.getElementById('isbn').value=" ";
}
document.getElementById('book-form').addEventListener('submit',function(e){

    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value
    
    const book =new BOOK(title,author,isbn)
     
    const ui=new UI();
    
    if(title==='' || author==='' || isbn===''){
        ui.showAlert('Please fill in all fields', 'error')
    }
    else{
        ui.addBookToList(book)
        ui.showAlert('Book Added!', 'success');
        ui.clearFields()

    }

   


    e.preventDefault()

})

//Delete event listener

document.getElementById('book-list').addEventListener('click', function(e){

    // Instantiate UI
    const ui = new UI();
  
    // Delete book
    ui.deleteBook(e.target);
  
    // Show message
    ui.showAlert('Book Removed!', 'success');
  
    e.preventDefault();
  });