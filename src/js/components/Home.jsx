
/*
	¿qué necesitamos?

	necesitamos guardar la data que se esta escribiendo
	ejemplo:
	task, name, email --> mientras se escribe


	lista de data [
	{
		task,
		email,
		name
	},
	{
		task,
		email,
		name
	}
]

*/
import { useState } from "react"

//create your first component
function Home() {
	// aqui se escribe javascript
	const [data, setData] = useState({
		name: "",
		email: "",
		task: ""
	})

	const [listData, setListData] = useState([])


	const handleChange = (event) => {
		// console.log(`{${event.target.name}: ${event.target.value} }`)
		setData({
			...data,
			[event.target.name]: event.target.value
		})
	}


	const addTask = (event) => {
		if (event.key == "Enter") {
			setListData([
				...listData,
				data
			])

			setData({
				name: "",
				email: "",
				task: ""
			})
		}
	}


	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-md-8 border border-danger">
					<h1 className="text-center">To Do List</h1>

					<form className="border p-3">
						<input
							type="text"
							placeholder="Ingresa tu tarea"
							className="form-control mt-2"
							name="task"
							value={data.task}
							onKeyDown={addTask}
							onChange={handleChange}
						/>

						<input
							type="text"
							placeholder="Nombre"
							className="form-control mt-2"
							name="name"
							value={data.name}
							onKeyDown={addTask}
							onChange={handleChange}
						/>

						<input
							type="text"
							placeholder="Correo electrionico"
							className="form-control mt-2"
							name="email"
							value={data.email}
							onKeyDown={addTask}
							onChange={handleChange}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Home;





