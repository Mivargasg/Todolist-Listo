import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [tareas, setTareas] = useState("");
	const [lista, setLista] = useState([]);

	return (
		<div className="text-center mt-5">
			<h1> Todo List</h1>
			<input
				value={tareas}
				onChange={e => {
					setTareas(e.target.value);
				}}
				onKeyPress={e => {
					if (e.key == "Enter") {
						setLista(lista.concat(tareas));
						setTareas("");
						console.log("Mi lista", lista);
					}
				}}
			/>
			{lista.map((item, index) => {
				return (
					<li
						key={index}
						onDoubleClick={() => {
							setLista(
								lista.filter(
									(itemf, indexf) => indexf !== index
								)
							);
						}}>
						{item}
					</li>
				);
			})}
		</div>
	);
}
