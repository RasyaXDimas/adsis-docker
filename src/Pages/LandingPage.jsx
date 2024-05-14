import React from 'react'
import Persona from '../Component/Persona'
import foto from "../assets/persona.png"
import ref from "../assets/foto.jpg";

const LandingPage = () => {
	return (
		<>
			<Persona
				foto={ref}
				nama="Lenatheaa"
				role="Front End"
				quote="Jika terlalu menjaga image, hidupmu hanya sebatas jpeg"
				ability={["Cantik", "Baik", "Pintar"]}
				goals={["Jadi Docker"]}
				invers={true}
				hobi={["Membaca buku", "Mendengarkan musik", "Belajar"]}
				skill={["Bedah jantung", "Operasi sesar", "Bisa pegang retri"]}
			/>
		</>
	);
};

export default LandingPage