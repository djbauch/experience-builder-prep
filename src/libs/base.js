// This is the base address to the back end Swagger / OpenAPI server.
// The default is the Railway service generated whenever the monitored branch
// of the portal-server project is updated on GitHub.
// The Railway service pulls its data from MongoDB Atlas
// Note that environment varialbes from the system environment are ignored unless
// they start with the prefix RECT_APP_

const base = process.env.REACT_APP_BASE || 'https://portal-server.up.railway.app/'

module.exports=base;
