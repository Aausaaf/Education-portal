const getcontact = (req,res) => {
    let data = {
        name:"company TZ",
        email:"aausafxyz@xyz.com",
        phone:"1234567890",
        Address:"mahadeva road example gali ara  bihar 802301"
        
    }
    res.send(data)
} 

module.exports = {
       getcontact
}