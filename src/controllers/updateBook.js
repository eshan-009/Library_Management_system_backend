const Book = require("../models/bookSchema");
const { findByIdAndUpdate } = require("../models/bookSchema");
const mongoose = require("mongoose")
async function updateBook(req,res) {
    try{
        const {id} = req.body;
        const{title,author,description} = req.body;
        if(!title || !author || !description)
        {
            return res.status(400).json({
                message:"Enter all details"
            })
        }
        const bookData = await Book.findByIdAndUpdate({_id : id},{
            title : title,
            author : author,
            description : description
    
        })
    
        res.status(200).json({
            message :"Data Updated Successfully",
            book : bookData 
        })
    }
    catch (err){
        res.status(500).json({
            message :"Error Updating Data",
           error : err
        })
    }
}

async function updateStatus(req,res) {

  try{
    const {id} = req.body
    const{isBorrowed} = req.body;

    const bookData = await Book.findByIdAndUpdate({_id:id},{
        isBorrowed:isBorrowed
    })

    res.status(200).json({
        message :"Data Updated Successfully",
        book : bookData 
    })
  }
  catch (err){
    res.status(500).json({
        message :"Error Updating Book status",
       error : err
    })
}
}

module.exports = {updateBook,updateStatus}