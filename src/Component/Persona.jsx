import React from "react";

const Persona = ({
	nama,
	role,
	foto,
	quote,
	valueA,
	valueEx,
	valueJb,
	valueSk,
}) => {
	return (
		<div className="flex bg-[#C490E4] w-3/4 mx-auto rounded-xl mt-12 ring-2 ring-[#C490E4]">
			<img className="align-middle" src={foto} alt="" />
			<div className="grid grid-cols-4 p-8 w-full bg-[#F9F9F9] rounded-xl">
				<div className="col-span-8">
					<h1 className="font-bold text-4xl">{nama}</h1>
					<p className="font-light text-2xl">{role}</p>
				</div>
				<div className="col-span-8">
					<p className="text-3xl font-bold mb-2">Motivation Quote</p>
					<blockquote className="text-xl italic">{quote}</blockquote>
				</div>
				<div className="col-span-4 ">
					<div className="flex flex-col mt-4 mb-4">
						<p className="text-3xl font-bold">Experience</p>
						<p className="mt-2">{valueEx}</p>
					</div>
					<div className="flex flex-col mt-4">
						<p className="text-3xl font-bold">Skills</p>
						<p className="mt-2">{valueSk}</p>
					</div>
				</div>
				<div className="col-span-4">
					<div className="flex flex-col mt-4">
						<p className="text-3xl font-bold">Job</p>
						<p className="mt-2">{valueJb}</p>
					</div>
					<div className="flex flex-col mt-4">
						<p className="text-3xl font-bold">Alasan Hidup</p>
						<p className="mt-2">{valueA}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Persona;
