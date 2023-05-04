import {Link} from 'react-router-dom'

export default function Restricted(){
	return(
		  <div className="h-screen flex items-center justify-center text-2xl flex-col">404 Not Found<Link to="/"><span className="text-blue-500 text-sm">Back to Home</span></Link></div>
		)
}