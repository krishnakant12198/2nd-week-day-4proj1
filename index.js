nested Object.apply


let course={          //course main obj
    
    book:"JS",
    bookId:"240",
    bookPrice: 500,

    address: {                //key:value
        company:"prograd",
        country:"India"
    },


    //obj method
    greeting(){
        let msg=this.book+this.bookId+this.bookPrice+this.address.company
        
    }
}
course.greeting()


//Array of obj

// let book =[
// {
//     tittle:"Chanakya niti",
//     author:"Chanaka",
//     bookid:"someone"
// },
// {
//     tittle:"richn dad poor dad",
//     author:"robert",
//     bookid:"someone"
// }

// ]
// book.forEach(function(value,index,Array)
// {
//     console.log(value,index, Array)
// })

//obj of array

// let course={
//     book:"JS",
//     bookId:"240",
//     bookPrice: 500,
//     otherbooks:["java","c","c++"],

//     address:
//      {                //key:value
//          company:"prograd",
//          country:"India"
//             },


// showbook()
// {
//     let msg=ths.otherbooks
//     this.otherbooks.forEach()
//     let s=this.books.forEach(function(value){
//         console.log(value)
//     })
//     console.log(msg)
// }
// }
// course.showbook()
