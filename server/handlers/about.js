const getabout = (req,res) => {
    let data = {
        name:"About Us",
        body:"Lorem Ipsum is simply took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a as opposed to using the years, sometimes by accident."
        
    }
    res.send(data)
} 

module.exports = {
       getabout
}