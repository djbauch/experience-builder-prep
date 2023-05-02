//this is the base address to the back end server.  This is my current address and must be changed when the
//project is moved

const builder = process.env.REACT_APP_BUILDER || 'http://0.0.0.0:5000/'

module.exports=builder;
